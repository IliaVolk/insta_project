import Model from "./../Model"
import ListComponent from "./ListComponent"
import AddItemModelWrapper from "./AddItemModelWrapper"
export default class ListModel extends Model{
    constructor({provider, ChildModel, ComponentClass=ListComponent, addNewPrompt="Add New Item"}) {
        super()
        this.models = []
        this.provider = provider
        this.ChildModel = ChildModel
        this.ComponentClass = ComponentClass
        this.addNewPrompt = addNewPrompt
        provider.get()
            .then(values=>{
                this.models = values.map(value=>new this.ChildModel({value, parent: this}))
                this.notifyUpdated()
            })
        this.addItemModel = new AddItemModelWrapper({
            ModelClass: ChildModel,
            parent: this
        })
    }
    add(value){
        return this.provider.post(value)
            .then(data=>{
                this.models.push(new this.ChildModel({value, parent: this}))
                this.notifyUpdated()
            })
    }
    remove(model){
        return this.provider.delete(model.value)
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
        this.addItemModel.shouldComponentUpdate = true
        this.notifyUpdated(()=>{
            this.models.forEach(m=>m.shouldComponentUpdate = false)
            this.addItemModel.shouldComponentUpdate = false
        })
    }

}