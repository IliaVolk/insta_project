import React from "react"
import {PropTypes} from "react"

import state from "./../state"
export default class Home extends React.Component {
    constructor() {
        super()
    }

    static get propTypes() {
        return {}
    }

    render() {
        return state.home.getView()
    }
}