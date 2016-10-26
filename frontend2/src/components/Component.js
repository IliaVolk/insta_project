import React from "react"
import {PropTypes} from "react"
export default class Component extends React.Component {
    constructor() {
        super()
    }
    shouldComponentUpdate(){
        return this.props.model.shouldComponentUpdate
    }
    componentDidMount(){
        this.props.model.component = this
    }
    componentWillReceiveProps(props){
        props.model.component = this
    }
}