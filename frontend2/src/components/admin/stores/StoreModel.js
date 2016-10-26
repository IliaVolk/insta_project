import ListItemModel from "./../ListItemModel"
import StoreComponent from "./StoreComponent"
export default class StoreModel extends ListItemModel{
    constructor(params) {
        super(params)
        this.ComponentClass = StoreComponent
    }
    setImage = (image) => {
        this.value.image = image
        this.notifyUpdated()
    }
    setUrl = (url) => {
        this.value.url = url
        this.notifyUpdated()
    }
    setDescription = (description) => {
        this.value.description = description
        this.notifyUpdated()
    }
}