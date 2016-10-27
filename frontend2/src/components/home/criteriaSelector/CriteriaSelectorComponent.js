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
    cloud(){
        let {model, width} = this.props,
            {values, value, withCloud} = model
        if (!values.length || !withCloud)return
        this._cloud = new Cloud(values, model.setValue, "#"+this.id, width)
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
            return model.setValue(value)
        }
        value = value.value
        model.setValue(value)
    }
    componentDidMount(){
        this.cloud()
        super.componentDidMount()
    }
    render() {
        let {model} = this.props
        let {title, values, value} = model
        if (!this._cloud)
            this.cloud()
        this._cloud && this._cloud.setCurrent(value)
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
                        openOnFocus={true}
                        filter={(searchText, key)=>{
                                return !searchText || AutoComplete.fuzzyFilter(searchText, key)
                            }}
                        maxSearchResults={3}
                        dataSource={dataSource}
                        dataSourceConfig={dataSourceConfig}
                        onNewRequest={this.setValue}
                        searchText={this.valueToDataSource(value).text}
                    />
                    <FlatButton label="Me Lucky" primary={true}
                                onClick={()=>{model.setValue(values[Math.floor(Math.random()*values.length)])}}/>
                </div>
                <div id={this.id}></div>

            </div>
        )
    }
}