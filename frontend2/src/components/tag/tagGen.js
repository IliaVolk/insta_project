

var letters = "qwertyuiopasdfghjklzxcvbnm"
function rand(n){
    return Math.floor(Math.random()*n)
}
tags = []
function getName(){
    var len = 5+ rand(15)
    var s = ""
    for (var i = 0; i < len; i++){
        s += letters[rand(letters.length)]
    }
    return s
}
for (var i = 0; i < 100; i++){
    tags.push({name: getName(), size: rand(1000)})
}

require("fs").writeFile("file.json", JSON.stringify(tags))