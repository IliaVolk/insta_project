import React from "react"
import {PropTypes} from "react"
import Cloud from "./Cloud"
import FlatButton from 'material-ui/FlatButton';
import AutoComplete from 'material-ui/AutoComplete';
import MenuItem from 'material-ui/MenuItem';
import Component from "./../../Component"
var getId = (function(){
    var id = 0
    return function (){
        return "criteria-selector-id"+ id++
    }
})()
export default class CriteriaSelectorComponent extends Component {
    constructor() {
        super()
        this.id = getId()
        this.setValue = this.setValue.bind(this)
    }

    static get propTypes() {
        return {}
    }
    valueToDataSource(v){
        if (!v.name) return {
            text: "",
            value: v
        }
        return ({
            text: v.name,
            value: v
        })
    }
    setValue(value, index){
        let {model} = this.props
        if (index < 0){
            return
        }
        value = value.value
        model.setValue(value)
    }

    render() {
        let {model} = this.props
        let {title, values, value, isOpened} = model
        let dataSourceConfig = {
                text: "text",
                value: "value"
            },
            dataSource = values.map(this.valueToDataSource)
        return (
            <div>
                <div className="displayFlex flexCenter">
                    <h2 className="title-padding">{title}  </h2>
                    <AutoComplete
                        hintText="Type..."
                        open={isOpened}
                        openOnFocus={true}
                        filter={(searchText, key)=>{
                                return !searchText || AutoComplete.fuzzyFilter(searchText, key)
                            }}
                        maxSearchResults={5}
                        dataSource={dataSource}
                        dataSourceConfig={dataSourceConfig}
                        onNewRequest={this.setValue}
                        searchText={this.valueToDataSource(value).text}
                    />
                    <FlatButton label="Me Lucky" primary={true}
                                onClick={()=>{model.setValue(values[Math.floor(Math.random()*values.length)])}}/>
                </div>
            </div>
        )
    }
}