import React from "react"
import {PropTypes} from "react"
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Component from "./../Component"
import EditingItemComponent from "./../list/EditingItemComponent"
import CardActionsContent from "./../list/CardActions"
import StateIcon from "./../StateIcon"
export default class StoreComponent extends Component {
    constructor() {
        super()
    }

    render() {
        let {model} = this.props
        let {name, description, state, image, url} = model.value
        let {isEditing, confirm, cancel,
            setName, setDescription, setImage, setUrl} = model
        if (!isEditing)
            return <Card>
                <CardHeader
                    avatar={<StateIcon state={state}/>}
                    title={<div className="marginLeft font150"><a target="_blank" href={url} >{name}</a></div>}
                    actAsExpander={true}
                    showExpandableButton={true}
                />
                <CardMedia
                    expandable={true}
                    overlay={<CardTitle title={description}/>}
                >
                    <img src={image} />
                </CardMedia>
                <CardActions>
                    <CardActionsContent model={model}/>
                </CardActions>
            </Card>
        else return(
            <div>
                <EditingItemComponent
                    image={image}
                    confirm={confirm}
                    cancel={cancel}
                    values={[
                        {label: "Image", value: image, setter: setImage},
                        {label: "Name", value: name, setter: setName},
                        {label: "Description", value: description, setter: setDescription},
                        {label: "Url", value: url, setter: setUrl}
                    ]}/>
                </div>)
    }
}