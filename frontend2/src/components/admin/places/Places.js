import React from "react"
import {PropTypes} from "react"
import state from "./../../state"
export default class Places extends React.Component {
    constructor() {
        super()
    }

    static get propTypes() {
        return {}
    }

    render() {
        return state.places.getView()
    }
}