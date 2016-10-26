import React from "react"
import TextField from 'material-ui/TextField';
var getId = (function(){
    var id = 0
    return function (){
        return "text-field-"+id++
    }
})()
export default props=>{
    return <div className="displayFlex width100" ><div className="displayFlex cols flexCenter" style={{width: "70%"}}>
        {props.values.map((value, i)=><div className="width100"><TextField
            key={i}
            id={getId()}
            floatingLabelText={value.label}
            value={value.value || ""}
            onChange={(e)=>value.setter(e.target.value)}
            fullWidth={true}
        /></div>)}
        </div>
        <div className="aroundImg">
            <img className="img" src={props.image}/>
        </div>
    </div>
}
