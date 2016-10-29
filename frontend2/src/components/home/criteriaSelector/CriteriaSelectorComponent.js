import React from "react"
import {PropTypes} from "react"
import Cloud from "./Cloud"
import FlatButton from 'material-ui/FlatButton';
import AutoComplete from 'material-ui/AutoComplete';
import MenuItem from 'material-ui/MenuItem';
import Component from "./../../Component"
import TextField from 'material-ui/TextField';
import styles from "./styles.sass"
var getId = (function(){
    var id = 0
    return function (){
        return "criteria-selector-id"+ id++
    }
})()
var i = 0
export default class CriteriaSelectorComponent extends Component {
    constructor() {
        super()
        this.id = getId()
    }

    static get propTypes() {
        return {}
    }


    render() {
        let {model} = this.props
        let {title, values, value, isOpened, setValue, selectValue, isMultiple,
            showTips, hideTips, toggleTips, setFocusRef, canHide, cantHide} = model
        return (
            <div>
                <div className="displayFlex flexCenter">
                    <h2 className="title-padding">{title}  </h2>
                    <TextField
                        ref={setFocusRef}
                        id={this.id}
                        value={value}
                        onChange={e=>setValue(e.target.value)}
                        onFocus={showTips}
                        onBlur={hideTips}
                        onTouchTap={toggleTips}/>
                    <FlatButton label="Me Lucky" primary={true}
                                onClick={()=>{selectValue(values[Math.floor(Math.random()*values.length)])}}/>
                </div>

                <div className={(isOpened?"positionAbsolute":"displayNone")+" tips"}
                     onMouseEnter={cantHide}
                     onMouseLeave={canHide}
                     >
                    {values.map(v=><FlatButton label={`${v.name} (${v.size})`} onTouchTap={e=>selectValue(v)}/>)}
                </div>
            </div>
        )
    }
}