import React from "react"
export default class Model {
    constructor() {
        this.notifyUpdatedCallback = this.notifyUpdatedCallback.bind(this)
        this.shouldComponentUpdate = false
    }
    notifyUpdatedCallback(){
        this.shouldComponentUpdate = false
        this.cb && this.cb()
        this.cb = undefined
    }
    notifyUpdated(cb){
        this.shouldComponentUpdate = true
        this.cb = cb
        this.component && this.component.forceUpdate(this.notifyUpdatedCallback)
    }
    getView(props, replace){
        return React.createElement(this.ComponentClass, replace?props: Object.assign({model: this}, props))
    }
}