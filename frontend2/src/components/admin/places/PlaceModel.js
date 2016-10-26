import ListItemModel from "./../ListItemModel"
import PlaceComponent from "./PlaceComponent"
export default class PlacesModel extends ListItemModel{
    constructor(params) {
        super(params)
        this.ComponentClass = PlaceComponent
    }
    setDescription = (description) => {
        this.value.description = description
        this.notifyUpdated()
    }
}