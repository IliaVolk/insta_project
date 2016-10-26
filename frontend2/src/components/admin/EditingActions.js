import React from "react"
import FlatButton from "material-ui/FlatButton"

export default props=><div style={{display:"flex", justifyContent: "space-between"}}>
    <div></div>
    <div>
        <FlatButton label="Confirm" primary={true} onClick={props.confirm}/>
        <FlatButton label="Cancel" secondary={true} onClick={props.cancel}/>
    </div>
</div>