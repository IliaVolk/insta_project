import ListItemModel from "./../list/ListItemModel"
import StoreComponent from "./StoreComponent"
import PlaceModel from "./../place/PlaceModel"
import ListModel from "./../list/ListModel"
import PlaceStoreComponent from "./../place/PlaceStoreComponent"
import TagStoreProvider from "./../tag/TagStoreProvider"
import TagStoreModel from "./../tag/TagStoreModel"
import GridListComponent from "./../list/GridListComponent"
import PlaceService from "./../place/PlaceService"
import TagService from "./../tag/TagService"
import CriteriaSelectorModel from "./../home/criteriaSelector/CriteriaSelectorModel"

export default class StoreModel extends ListItemModel{
    constructor(params) {
        super(params)
        this.value.place = this.value.place || {}
        this.value.tags = this.value.tags || []
        this.ComponentClass = StoreComponent
        this.placeModel = new PlaceModel({
            value: params.value.place,
            parent: this.parent,
            ComponentClass: PlaceStoreComponent
        })
        this.tagList = new ListModel({
            provider: new TagStoreProvider(this),
            ChildModel: TagStoreModel,
            ComponentClass: GridListComponent,
            addNewPrompt: ""
        })
        this.placeSelector = new CriteriaSelectorModel({
            title: "Select place:",
            provider: PlaceService,
            onSelect: this.placeModel.setValue,
            isMultiple: false,
            getSelected: ()=>[this.placeModel.value]
        })
        this.tagSelector = new CriteriaSelectorModel({
            title: "Select tag:",
            provider: TagService,
            onSelect: this.tagList.add,
            isMultiple: true,
            getSelected: ()=>this.tagList.models.map(m=>m.value)
        })
        this.setImage = this.setImage.bind(this)
        this.setDescription = this.setDescription.bind(this)
        this.setUrl = this.setUrl.bind(this)
    }
    setEditing(){
        this.placeModel.setEditing()
        this.tagList.models.forEach(m=>m.setEditing())
        super.setEditing()
    }
    setImage(image){
        this.value.image = image
        this.notifyUpdated()
    }
    setUrl(url){
        this.value.url = url
        this.notifyUpdated()
    }
    setDescription(description){
        this.value.description = description
        this.notifyUpdated()
    }
}