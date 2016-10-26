import Accepted from "material-ui/svg-icons/action/done"
import Dismissed from "material-ui/svg-icons/content/clear"
import React from "react"
export default props=>{
    return props.state === "accepted"?<Accepted className="scaled2" color="#008800"/>:
        props.state === "dismissed"?<Dismissed className="scaled2" color="#880000"/>:
            <div></div>
}