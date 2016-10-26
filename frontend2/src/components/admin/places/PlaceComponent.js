import React from "react"
import {PropTypes} from "react"
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Component from "./../../Component"
import EditingItemComponent from "./../EditingItemComponent"
import CardActionsContent from "./../CardActions"
export default class PlaceComponent extends Component {
    constructor() {
        super()
    }

    render() {
        let {model} = this.props
        let {name, size, description, state} = model.value
        let {isEditing, confirm, cancel,
            setName, setDescription} = model
        if (!isEditing)
        return <Card>
            <CardHeader
                title={name}
                actAsExpander={true}
                showExpandableButton={true}
            >State: {state}</CardHeader>
            <CardText expandable={true}>
                {description} ({size})
            </CardText>
            <CardActions>
                <CardActionsContent model={model}/>
            </CardActions>
        </Card>
        else return(
            <EditingItemComponent
                    confirm={confirm}
                    cancel={cancel}
                    values={[
                        {label: "Name", value: name, setter: setName},
                        {label: "Description", value: description, setter: setDescription}
                    ]}/>)
    }
}