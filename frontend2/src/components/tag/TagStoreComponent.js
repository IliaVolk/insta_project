import React from "react"
import {PropTypes} from "react"
import TagComponent from "./TagComponent"
import FlatButton from "material-ui/FlatButton"
export default class TagStoreComponent extends TagComponent {
    constructor() {
        super()
    }
    getActions(){
        return <div>
            <FlatButton label="Edit" primary={true} onClick={this.props.model.setEditing}/>
            <FlatButton label="Remove" secondary={true} onClick={this.props.model.remove}/>
        </div>
    }

}