import Model from "./../Model"
import ListComponent from "./ListComponent"
export default class ListModel extends Model{
    constructor({provider, ChildModel, ComponentClass=ListComponent}) {
        super()
        this.models = []
        this.provider = provider
        this.ChildModel = ChildModel
        this.ComponentClass = ComponentClass
        provider.get()
            .then(values=>{
                this.models = values.map(value=>new this.ChildModel({value, parent: this}))
                this.notifyUpdated()
            })
    }
    add(value){
        this.provider.post(value)
            .then(data=>{
                this.models.push(new this.ChildModel({value, parent: this}))
                this.notifyUpdated()
            })
    }
    remove(model){
        this.provider.delete(model.value)
            .then(data=>{
                model.shouldComponentUpdate = true
                this.models = this.models.filter(m=>!this.equals(m, model))
                this.notifyUpdatedAll()
            })
    }
    update(model){
        return this.provider.update(model.value)
    }
    equals(v1, v2){
        return JSON.stringify(v1.value) === JSON.stringify(v2.value)
    }
    notifyUpdatedAll(){
        this.models.forEach(m=>m.shouldComponentUpdate = true)
        this.notifyUpdated(()=>{
            this.models.forEach(m=>m.shouldComponentUpdate = false)
        })
    }

}