import Model from "./../../Model"
import CriteriaSelectorComponent from "./CriteriaSelectorComponent"
export default class CriteriaSelectorModel extends Model{
    constructor({title, value, provider, onSelect=()=>{}}) {
        super()
        this.ComponentClass = CriteriaSelectorComponent
        this.title = title
        this.values = []
        this.value = value || {}
        this.onSelect = onSelect
        this.isOpened = false
        provider.get()
            .then((values)=>{
                this.values = values
                this.notifyUpdated()
            })
        this.setValue = this.setValue.bind(this)
    }
    setValue(value){
        this.value = value
        this.onSelect(value)
        this.notifyUpdated()
    }
}