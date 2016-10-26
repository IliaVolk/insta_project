import Model from "./../Model"
export default class ListItemModel extends Model{
    constructor({value, parent}) {
        super()
        this.value = value
        this.parent = parent
    }
    accept = ()=>{
        this.value.state = "accepted"
        this.isEditing = false
        this.notifyUpdated()
    }
    dismiss = () =>{
        this.value.state = "dismissed"
        this.isEditing = false
        this.notifyUpdated()
    }
    remove = () => {
        this.parent.remove(this)
    }
    setEditing = () => {
        this.isEditing = true
        this.savedValue = Object.assign({}, this.value)
        this.notifyUpdated()
    }
    confirm = () => {
        this.isEditing = false
        this.parent.update(this)
            .then(this.notifyUpdated())
    }
    cancel = () => {
        this.isEditing = false
        this.value = this.savedValue
        this.notifyUpdated()
    }
    setName = (name) => {
        this.value.name = name
        this.notifyUpdated()
    }

}