import ListItemModel from "./../list/ListItemModel"
import PlaceComponent from "./PlaceComponent"
export default class PlaceModel extends ListItemModel{
    constructor(params) {
        super(params)
        this.ComponentClass = params.ComponentClass || PlaceComponent
    }
    setDescription = (description) => {
        this.value.description = description
        this.notifyUpdated()
    }
}