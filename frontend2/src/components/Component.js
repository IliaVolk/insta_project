import React from "react"
import {PropTypes} from "react"
export default class Component extends React.Component {
    constructor() {
        super()
    }
    shouldComponentUpdate(){
        console.log(this.model, this.props.model.shouldComponentUpdate)
        return this.props.model.shouldComponentUpdate
    }
    componentDidMount(){
        this.props.model.component = this
    }
    componentWillReceiveProps(props){
        props.model.component = this
        props.model.shouldComponentUpdate = true
        props.model.notifyUpdated()
    }
}