import Model from "./../../Model"
import CriteriaSelectorComponent from "./CriteriaSelectorComponent"
export default class CriteriaSelectorModel extends Model{
    constructor({title, value, provider}) {
        super()
        this.ComponentClass = CriteriaSelectorComponent
        this.title = title
        this.value = value || {}
        this.values = []
        provider.get()
            .then((values)=>{
                this.values = values
                this.notifyUpdated()
            })
        this.setValue = this.setValue.bind(this)
    }
    setValue(value){
        this.value = value
        this.notifyUpdated()
    }

}