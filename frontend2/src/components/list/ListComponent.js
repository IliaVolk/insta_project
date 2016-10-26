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
            <div className="displayFlex flexCenter width100">
                <h1>{model.addNewPrompt}</h1>
            </div>

            {model.addItemModel.getView()}
        </div>
    }
}