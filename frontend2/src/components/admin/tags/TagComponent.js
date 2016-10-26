import React from "react"
import {PropTypes} from "react"
import Component from "./../../Component"
import {GridTile} from "material-ui/GridList"
import CardActionsContent from "./../CardActions"
import EditingActions from "./../EditingActions"
import TextField from 'material-ui/TextField';

const tileStyle = {
    boxShadow: "0 0 1em black"
}
export default class TagComponent extends Component {
    constructor() {
        super()
    }

    static get propTypes() {
        return {}
    }

    render() {
        let {model} = this.props
        let {name, size, state} = model.value
        let {isEditing, confirm, cancel,
            setName} = model
        if (!isEditing)
            return <GridTile
                style={tileStyle}
            >
                <h2 className="displayFlex flexCenter">{name}</h2>
                <CardActionsContent model={model}/>
            </GridTile>
        else return(
            <GridTile
                style={tileStyle}>
                <div className="marginLeft">
                    <TextField
                        id={""}
                        floatingLabelText="Tag"
                        value={name}
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