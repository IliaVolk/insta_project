import React from "react"
import {PropTypes} from "react"
import Component from "./../Component"
import {GridList} from 'material-ui/GridList';

export default class GridListComponent extends Component {
    constructor() {
        super()
    }

    render() {
        let {model} = this.props
        return <div className="list-container">
            <GridList
                cellHeight={120}
                cols={2}
                padding={10}>
                {model.models.map((m,i)=>m.getView({key:i}))}
            </GridList>
        </div>
    }
}