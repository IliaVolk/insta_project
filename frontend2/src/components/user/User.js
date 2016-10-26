import React from "react"
import {PropTypes} from "react"
import styles from "./styles.sass"
import Paper from 'material-ui/Paper';
import { Link } from 'react-router';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import ContentLink from 'material-ui/svg-icons/content/link';
import Divider from 'material-ui/Divider';
import ContentCopy from 'material-ui/svg-icons/content/content-copy';
import Download from 'material-ui/svg-icons/file/file-download';
import Delete from 'material-ui/svg-icons/action/delete';
import FontIcon from 'material-ui/FontIcon';
export default class Admin extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (<div className="displayFlex">
            <Paper className="paper">
                <Menu>
                    <Link to="/user/stores" activeClassName="activeLink"><MenuItem primaryText="Offer Stores" leftIcon={<RemoveRedEye />} /></Link>
                    <Link to="/user/tags" activeClassName="activeLink"><MenuItem primaryText="Offer Tags" leftIcon={<PersonAdd />} /></Link>
                    <Link to="/user/places" activeClassName="activeLink"><MenuItem primaryText="Offer Places" leftIcon={<ContentLink />} /></Link>
                </Menu>
            </Paper>
            <div className="adminContent displayFlex flexCenter">
                {this.props.children}
            </div>
        </div>)
    }
}