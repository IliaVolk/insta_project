import ListItemModel from "./../list/ListItemModel"
import StoreComponent from "./StoreComponent"
import PlaceModel from "./../place/PlaceModel"
import ListModel from "./../list/ListModel"
import PlaceStoreComponent from "./../place/PlaceStoreComponent"
import TagStoreProvider from "./../tag/TagStoreProvider"
import TagStoreModel from "./../tag/TagStoreModel"
import GridListComponent from "./../list/GridListComponent"
export default class StoreModel extends ListItemModel{
    constructor(params) {
        super(params)
        this.ComponentClass = StoreComponent
        this.placeModel = new PlaceModel({
            value: params.value.place,
            parent: this.parent,
            ComponentClass: PlaceStoreComponent
        })
        this.tagList = new ListModel({
            provider: new TagStoreProvider(this.value),
            ChildModel: TagStoreModel,
            ComponentClass: GridListComponent,
            addNewPrompt: "Add Tag"
        })
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