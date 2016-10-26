import React from "react"
import {PropTypes} from "react"
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Component from "./../../Component"
import EditingItemComponent from "./../EditingItemComponent"
import CardActionsContent from "./../CardActions"
export default class StoreComponent extends Component {
    constructor() {
        super()
    }
    shouldComponentUpdate(){
        let model = this.props.model
        let shup = model.shouldComponentUpdate
        return super.shouldComponentUpdate()
    }
    render() {
        let {model} = this.props
        let {name, size, description, state, image, url} = model.value
        let {isEditing, confirm, cancel,
            setName, setDescription, setImage, setUrl} = model
        debugger
        if (!isEditing)
            return <Card>
                <CardHeader
                    avatar={image}
                    title={name}
                    actAsExpander={true}
                    showExpandableButton={true}
                >State: {state} <a href={url}/></CardHeader>
                <CardText expandable={true}>
                    {description} ({size})
                </CardText>
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