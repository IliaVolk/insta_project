import React from "react"
import {PropTypes} from "react"
import Cloud from "./criteriaSelector/Cloud"
import FlatButton from 'material-ui/FlatButton';
import AutoComplete from 'material-ui/AutoComplete';
import MenuItem from 'material-ui/MenuItem';
var getId = (function(){
   var id = 0
    return function (){
        return "criteria-selector-id"+ id++
    }
})()
class CriteriaSelector extends React.Component {
    constructor() {
        super()
        this.id = getId()
        this.setValue = this.setValue.bind(this)
    }

    static get propTypes() {
        return {}
    }
    componentDidMount(){
        let {values, setter, width, value} = this.props;
        this.cloud = new Cloud(values, setter, "#"+this.id, width)
        this.cloud.setCurrent(value)
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
        if (index < 0){
            return this.props.setter(this.props.value)
        }
        value = value.value
        this.cloud && this.cloud.setCurrent(value)
        this.props.setter(value)
    }
    render() {
        let {title, setter, values, value} = this.props
        this.cloud && this.cloud.setCurrent(value)
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
                                    onClick={()=>{setter(values[Math.floor(Math.random()*values.length)])}}/>
                    </div>
                    <div id={this.id}></div>

                </div>
            )
    }
};