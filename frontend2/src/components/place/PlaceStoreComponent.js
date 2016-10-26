import React from "react"
import {PropTypes} from "react"
import PlaceComponent from "./PlaceComponent"
import FlatButton from "material-ui/FlatButton"

export default class PlaceStoreComponent extends PlaceComponent {
    constructor() {
        super()
    }

    getActions(){
        return <FlatButton label="Edit" primary={true} onClick={this.props.model.setEditing}/>
    }
}