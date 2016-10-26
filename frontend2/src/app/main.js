/* general */
import 'babel-polyfill';
import React from 'react';
import thunk from "redux-thunk";
import { render } from 'react-dom';
import { createHistory } from 'history';

/* components */
import App from './App.js';
import Home from '../components/home/Home';
import Admin from '../components/admin/Admin'
import Stores from '../components/admin/stores/Stores'
import Tags from '../components/admin/tags/Tags'
import Places from '../components/admin/places/Places'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { IndexRoute, Route, Router, browserHistory, useRouterHistory, IndexRedirect } from 'react-router';


const history = useRouterHistory(createHistory)({
    basename: '/'
});


render(
    (<MuiThemeProvider>
        <Router history={history} onUpdate={() => window.scrollTo(0, 0)} >
            <Route path="/" component={App}>
                <IndexRedirect to="home"/>
                <Route path="home" component={Home}/>
                <Route path="admin" component={Admin}>
                    <IndexRedirect to="stores"/>
                    <Route path="stores" component={Stores} />
                    <Route path="tags" component={Tags} />
                    <Route path="places" component={Places}/>
                </Route>
            </Route>    
        </Router>
    </MuiThemeProvider>),
    document.getElementById('root')
);

