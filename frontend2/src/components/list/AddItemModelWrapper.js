import Model from "./../Model"

export default class AddItemModelWrapper extends Model{
    constructor({ModelClass, parent}) {
        super()
        this.ModelClass = ModelClass
        this.parent = parent
        this.setupModel()
        this.ComponentClass = this.model.ComponentClass
    }
    setupModel(){
        if (this.model) this.model.shouldComponentUpdate = true

        this.model = Object.assign(new this.ModelClass({value: {}, parent: this.parent}), this)
        this.model.setEditing()
    }
    confirm = () => {
        this.parent.add(this.model.value)
            .then(()=>{
                this.setupModel()
                this.notifyUpdated()
            })
    }
    cancel = () => {
        this.setupModel()
        this.notifyUpdated()
    }
    getView(){
        return super.getView({model: this.model}, true)
    }
    notifyUpdated(){
        this.parent.notifyUpdated()
        this.model.notifyUpdated()
    }
}