import React from "react"
import {PropTypes} from "react"
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Component from "./../Component"
import EditingItemComponent from "./../list/EditingItemComponent"
import CardActionsContent from "./../list/CardActions"
import StateIcon from "./../StateIcon"
import styles from "./styles.sass"
import H3 from "./H3MidTitle"
import Divider from "material-ui/Divider"
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
                <CardText
                    expandable={true}
                >
                    <div className="displayFlex cols">
                        <div>
                            {description}
                            <Divider/>
                            <div className="width100 displayFlex flexCenter">
                                <div className="aroundImg">
                                    <img className="img" src={image}/>
                                </div>
                            </div>

                        </div>
                        <H3>Place</H3>
                        <div>
                            {model.placeModel.getView()}
                        </div>
                        <H3>Tags</H3>
                        <div>
                            {model.tagList.getView()}
                        </div>
                    </div>
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
                    ]}
                    _children={[{
                        header: "Places",
                        content: <div>
                            {model.placeSelector.getView()}
                            {model.placeModel.getView()}
                        </div>},{
                        header: "Tags",
                        content:<div>
                            {model.tagSelector.getView()}
                            {model.tagList.getView()}
                    </div>}
                    ]}

                />
                </div>)
    }
}