import React from "react"
import {PropTypes} from "react"
import state from "./../../state"

export default class Stores extends React.Component {
    constructor() {
        super()
    }

    static get propTypes() {
        return {}
    }

    render() {
        return state.stores.getView()
    }
}