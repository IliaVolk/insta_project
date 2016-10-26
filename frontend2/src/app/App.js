/* general */
import React from 'react';
import cookies from 'react-cookie';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ReduxToastr from 'react-redux-toastr';
import { browserHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Link } from 'react-router';



/* styles */
import styles from './app.sass';

/* icons */
import FaList from 'react-icons/lib/fa/list';
import FaIntro from 'react-icons/lib/fa/blind';
import FaExit from 'react-icons/lib/fa/sign-out';
import FaUser from 'react-icons/lib/fa/user-secret';

/* components */

injectTapEventPlugin();
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
export default class App extends React.Component {

    constructor(props) {
        super(props);
    }



    render() {
        let route = this.props.children.props.route,
            children = this.props.children


        return (
            <div>
                <AppBar
                    title={<Link to="/home"><span>Insta App</span></Link>}
                    iconElementRight={<Link to="/admin"><FlatButton label="Admin" /></Link>}
                />
                {children}
            </div>
        )
    }
}



