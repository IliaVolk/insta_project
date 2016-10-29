import Model from "./../../Model"
import CriteriaSelectorComponent from "./CriteriaSelectorComponent"

import locked from "./locked"
export default class CriteriaSelectorModel extends Model{
    constructor({title, provider, onSelect=()=>[], isMultiple=true, getSelected = ()=>[]}) {
        super()
        this.ComponentClass = CriteriaSelectorComponent
        this.title = title
        this._values = []
        this.onSelect = onSelect
        this._isOpened = false
        this.pattern = ""
        this.value = ""
        this._canHide = true
        this.isMultiple = isMultiple
        this.getSelected = getSelected
        provider.get()
            .then((values)=>{
                this._values = values.sort((v1,v2)=>v2.size-v1.size)
                this.notifyUpdated()
            })
        this.setValue = this.setValue.bind(this)
        this.showTips = this.showTips.bind(this)
        this.hideTips = this.hideTips.bind(this)
        this.setValue = this.setValue.bind(this)
        this.toggleTips = this.toggleTips.bind(this)
        this.setFocusRef = this.setFocusRef.bind(this)
        this.selectValue = locked(this.selectValue, this)
        this.setIsOpen = locked(this.setIsOpen, this)
        this.canHide = this.canHide.bind(this)
        this.cantHide = this.cantHide.bind(this)
    }
    get selected(){
        return this.getSelected()
    }
    get isOpened(){
        return this._isOpened
    }
    set isOpened(value){
        this.setIsOpen(value)
    }
    setIsOpen(value){
        this._isOpened = value
    }
    get values(){
        return this._values
            .filter(v=>v.name.indexOf(this.value)>-1)
            .filter(v=>!this.getSelected().find((s)=>s.name===v.name))
    }
    selectValue(value){
        this.onSelect(value)
        if (this.isMultiple){
            this.focusRef.focus()
        }else{
            this.isOpened = false
            this.notifyUpdated()
        }
    }
    showTips(){
        this.isOpened = true
        this.notifyUpdated()
    }
    hideTips(){
        if (this._canHide){
            this.isOpened = false
            this.notifyUpdated()
        }
    }
    setValue(value){
        this.value = value
        this.notifyUpdated()
    }
    toggleTips(){
        this.isOpened = !this.isOpened
        this.notifyUpdated()
    }
    setFocusRef(ref){
        this.focusRef = ref
    }

    canHide(){
        this._canHide = true
    }
    cantHide(){
        this._canHide = false
    }
}