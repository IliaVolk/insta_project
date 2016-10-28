var comparator = function(a,b){return b.size- a.size}


export default class Cloud{
    setCurrent(value){
        if (!value)return
        var found = null
        this.node.each(function(d){
            if (d.name === value.name && d.size == value.size){
                found = this;
            }
        })
        if (found){
            this.handleChange.call(found, this)
        }
    }
    constructor({json, notifyAdded, containerSelector,
                width=+d3.select("body").style("width").slice(0, -2),
                height=400, multiSelect=false, notifyRemoved}){
        this.multiSelect = multiSelect
        this.selected = {}
        this.onClick = this.getOnClick();
        this.width = width
        this.height = height
        this.notifyAdded = notifyAdded
        this.notifyRemoved = notifyRemoved
        var bleed = 10,
            botOffset = 80,
            dw = Math.min(0.9,(height)/width),
            self = this
        var pack = d3.layout.pack()
            .sort(comparator)
            .size([width, height + bleed -botOffset])
            .padding(2, 20),
            fontSize = function(d) { return (width/height)*Math.min(3 * d.r, (2 * d.r - 8) / this.getComputedTextLength() * 14)+4 + "px"; }
        this.fontSize = fontSize

        this.svg = d3.select(containerSelector).append("svg")
            .attr("width", width)
            .attr("height", height)
            .append("g");
        var svg = this.svg

        svg.attr("transform", "translate("+(-width/dw/2+width/2)+"," + -bleed + ")scale("+(1/dw)+",1)")
        var minR = Number.MAX_VALUE
        var node = svg.selectAll(".node")
            .data(pack.nodes(flatten(json))
                .filter(function(d) { return !d.children; })
            )
            .enter().append("g")
            .attr("class", function(d){
                minR = Math.min(d.r, minR)
                return "node"
            })

            .attr("transform", function(d) {return "translate(" + d.x + "," + d.y + ")"})//scale("+(Math.log(1+d.r-minR)/Math.max(2,0))+")"; });

        node.append("ellipse")
            //.attr("transform", "scale("+(dw)+",1)")
            .attr("rx", function(d) {return d.r; })
            .attr("ry", function(d) {return d.r; });

        node.append("text")
            .text(function(d) { return `${d.name}(${d.size})`; })
            .attr("transform", "scale("+(dw)+",1)")
            .style("font-size", self.fontSize)
            .attr("dy", ".35em");
        node.on("click", this.onClick)
        this.node = node;
        this.r = 30
        this.duration = 1000
    }
    moveBack(self){
        self.selected.object
            .transition()
            .duration(self.duration)
            .attr("transform", self.selected.transformBack)
            .select("ellipse")
            //.attr("transform", "scale("+(dw)+",1)")
            .attr("rx", self.selected.rBack)
            .attr("ry", self.selected.rBack)
            .attr("r", self.selected.rBack)
        self.selected.object
            .select("text")
            .transition()
            .duration(self.duration)
            .style("font-size", self.fontSize)
    }
    modeForward(self){
        self.selected.transformBack = self.selected.object.attr("transform")
        self.selected.rBack = +self.selected.object.select("ellipse").attr("rx")
        self.selected.object
            .transition()
            .duration(self.duration)
            .attr("transform", "translate(" + (self.width/2) + "," + (self.height-self.r) + ")")
            .select("ellipse").attr("rx", self.width).attr("ry", self.r)
        var data = {}
        self.selected.object
            .select("text")
            .transition()
            .duration(self.duration)
            .style("font-size", function(d){data = d;return 24})
        return data

    }
    handleChange(self){
        console.log("handle")
        var newSelectedObject = d3.select(this);
        if (self.locked){
            self.nextSelected = this
            return
        }else{
            self.unlockTimeout = setTimeout(()=>{
                self.locked = false
                self.onClick.call(self.nextSelected, self)
                self.locked = false
            }, self.duration)
        }
        self.locked = true;
        if (self.selected.object) {
            self.moveBack(self)
            if (newSelectedObject[0][0].innerHTML == self.selected.object[0][0].innerHTML) {
                let data = {}
                self.selected.object
                    .select("text")
                    .each(d=>data = d)
                self.notifyRemoved(data)
                self.selected = {}
                return null
            }
        }
        self.selected.object = newSelectedObject
        let data = self.modeForward(self)

        return data
    }
    getOnClick(){
        var self = this;
        return function (){
            if (!d3.event)return
            d3.event.stopPropagation()
            var data = self.handleChange.call(this, self)
            if (!data)return
            self.notifyAdded({
                name: data.name,
                size: data.size
            })
        }
    }

}
function flatten(root) {
    if (!root.children){
        root = {
            children: root
        }
    }
    var nodes = [];

    function recurse(node) {
        if (node.children) node.children.forEach(recurse);
        else nodes.push({name: node.name, value: 1+Math.sqrt(node.size), size: node.size});
    }

    recurse(root);
    return {children: nodes.sort(function(a,b){return -comparator(a,b)})};
}

