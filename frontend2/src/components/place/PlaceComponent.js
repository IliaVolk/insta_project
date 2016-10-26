import React from "react"
import {PropTypes} from "react"
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Component from "./../Component"
import EditingItemComponent from "./../list/EditingItemComponent"
import CardActionsContent from "./../list/CardActions"
import StateIcon from "./../StateIcon"
export default class PlaceComponent extends Component {
    constructor() {
        super()
    }
    getActions(){
        return <CardActionsContent model={this.props.model}/>
    }
    render() {
        let {model} = this.props
        let {name, size, description, state} = model.value
        let {isEditing, confirm, cancel,
            setName, setDescription} = model
        if (!isEditing)
        return <Card>
            <CardHeader
                avatar={<StateIcon state={state}/>}
                title={<div className="font150 marginLeft">{name}</div>}
                subtitle={<div className="marginLeft">{size} store(s)</div>}
                actAsExpander={true}
                showExpandableButton={true}
            />
            <CardText expandable={true}>
                {description}
            </CardText>
            <CardActions>
                {this.getActions()}
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