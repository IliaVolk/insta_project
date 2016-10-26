import React from "react"
import FlatButton from "material-ui/FlatButton"

export default props=><div style={{display:"flex", justifyContent: "space-between"}}>
    <div>
        <FlatButton label="Accept" onClick={props.model.accept}/>
        <FlatButton label="Dismiss" onClick={props.model.dismiss}/>
    </div>
    <div>
        <FlatButton label="Edit" primary={true} onClick={props.model.setEditing}/>
        <FlatButton label="Remove" secondary={true} onClick={props.model.remove}/>
    </div>
</div>