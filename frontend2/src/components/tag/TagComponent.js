import React from "react"
import {PropTypes} from "react"
import Component from "./../Component"
import {GridTile} from "material-ui/GridList"
import CardActionsContent from "./../list/CardActions"
import EditingActions from "./../list/EditingActions"
import TextField from 'material-ui/TextField';
import StateIcon from "./../StateIcon"
const tileStyle = {
    boxShadow: "0 0 2px 2px #eeeeee"
}
export default class TagComponent extends Component {
    constructor() {
        super()
    }

    getActions(){
        return <CardActionsContent model={this.props.model}/>
    }
    render() {
        let {model} = this.props
        let {name, size, state} = model.value
        let {isEditing, confirm, cancel,
            setName} = model
        if (!isEditing) {


            return <GridTile
                style={tileStyle}
            >
                <div className="displayFlex flexBetween">
                    <StateIcon state={state}/>
                    <h2>{name}</h2>
                    {size?<div>{size} store(s)</div>:<div></div>}
                </div>

                {this.getActions()}
            </GridTile>
        }
        else return(
            <GridTile
                style={tileStyle}>
                <div className="marginLeft">
                    <TextField
                        id={name}
                        floatingLabelText="Tag"
                        value={name || ""}
                        onChange={(e)=>setName(e.target.value)}
                        fullWidth={true}
                    />
                </div>

                <EditingActions
                    confirm={confirm}
                    cancel={cancel}/>

            </GridTile>)
    }
}