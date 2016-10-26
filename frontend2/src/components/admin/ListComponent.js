import React from "react"
import {PropTypes} from "react"
import Component from "./../Component"
export default class ListComponent extends Component {
    constructor() {
        super()
    }

    render() {
        let {model} = this.props
        return <div className="list-container">
            {model.models.map((m,i)=>m.getView({key:i}))}
        </div>
    }
}