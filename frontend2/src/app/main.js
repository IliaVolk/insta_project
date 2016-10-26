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
import StoresAdmin from '../components/admin/Stores'
import TagsAdmin from '../components/admin/Tags'
import PlacesAdmin from '../components/admin/Places'
import StoresUser from '../components/user/Stores'
import TagsUser from '../components/user/Tags'
import PlacesUser from '../components/user/Places'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { IndexRoute, Route, Router, browserHistory, useRouterHistory, IndexRedirect } from 'react-router';

import User from "./../components/user/User"
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
                    <Route path="stores" component={StoresAdmin} />
                    <Route path="tags" component={TagsAdmin} />
                    <Route path="places" component={PlacesAdmin}/>
                </Route>
                <Route path="user" component={User}>
                    <IndexRedirect to="stores"/>
                    <Route path="stores" component={StoresUser} />
                    <Route path="tags" component={TagsUser} />
                    <Route path="places" component={PlacesUser}/>
                </Route>
            </Route>    
        </Router>
    </MuiThemeProvider>),
    document.getElementById('root')
);

