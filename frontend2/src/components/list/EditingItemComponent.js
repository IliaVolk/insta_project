import React from "react"
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import EditingFieldsComponent from "./EditingFieldsComponent"
import EditingActions from "./EditingActions"
import {Tabs, Tab} from 'material-ui/Tabs';

export default props=> {
    return <Card>
        <CardText expandable={false}>
            <Tabs>
                {[{
                    header: <div>General</div>,
                    content: <EditingFieldsComponent
                        image={props.image}
                        values={props.values}/>
                }].concat(props._children||[])
                    .map(({header, content})=><Tab label={header}>{content}</Tab>)}
            </Tabs>
        </CardText>
        <CardActions>
            <EditingActions
                confirm={props.confirm}
                cancel={props.cancel}/>
        </CardActions>
    </Card>
}