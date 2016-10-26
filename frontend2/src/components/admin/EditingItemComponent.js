import React from "react"
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import EditingFieldsComponent from "./EditingFieldsComponent"
import EditingActions from "./EditingActions"
export default props=><Card>
    <CardHeader
        title="Editing..."
    ></CardHeader>
    <CardText expandable={false}>
        <EditingFieldsComponent
            image={props.image}
            values={props.values}/>
    </CardText>
    <CardActions>
        <EditingActions
            confirm={props.confirm}
            cancel={props.cancel}/>
    </CardActions>
</Card>