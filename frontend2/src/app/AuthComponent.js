import React from "react"
import {PropTypes} from "react"
import FlatButton from 'material-ui/FlatButton';

export default class AuthComponent extends React.Component {
    constructor() {
        super()
    }

    static get propTypes() {
        return {}
    }
    auth = (e) => {
        var text = e.target.value
        var credentials = JSON.parse(text)
        window["instagram-auth-credentials"] = credentials
        this.forceUpdate()
    }
    openAuthWindow = ()=>{
        window.open("https://api.instagram.com/oauth/authorize/?client_id=0a0ee2a76f364730a3e3c1656baa89aa&redirect_uri=http://localhost:8080/api/auth/instagram/callback&response_type=code",
            "", "width=640,height=480")
    }
    render() {
        var credentials = window["instagram-auth-credentials"]
        return <span>
            {credentials&&credentials.user?<span>Hello, {credentials.user.full_name}</span>:
                <a><FlatButton onClick={this.openAuthWindow} label="Authenticate"/></a>}
            <input type="hidden" id="instagram-auth-credentials" onClick={this.auth}/>
        </span>
    }
}