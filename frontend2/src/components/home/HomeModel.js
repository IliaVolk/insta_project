import Model from "./../Model"
import CriteriaSelectorModel from "./criteriaSelector/CriteriaSelectorModel"
import PlaceService from "./../place/PlaceService"
import TagService from "./../tag/TagService"
import StoreService from "./../store/StoreService"
import HomeComponent from "./HomeComponent"
export default class HomeModel extends Model{
    constructor() {
        super()
        this.removeTag = this.removeTag.bind(this)
        this.addTag = this.addTag.bind(this)
        this.setPlace = this.setPlace.bind(this)
        this.ComponentClass = HomeComponent
        this.placeSelector = new CriteriaSelectorModel({
            title: "Select place:",
            provider: PlaceService
        })
        this.tagSelector = new CriteriaSelectorModel({
            title: "Select tag:",
            provider: TagService,
            onSelect:this.addTag
        })
        this.storeService = StoreService
        this.stores = []
        this.selectedTags = []
        this.storeService.get()
            .then((stores)=>{
                this.stores = stores
                this.notifyUpdated()
            })
        this.goSearch = this.goSearch.bind(this)

    }
    goSearch(){
        console.log("GO SEARCH")
        this.notifyUpdated()
    }
    addTag(tag){
        if (this.selectedTags.find(t=>t.name===tag.name)){
            return
        }
        this.selectedTags.push(tag)
        this.notifyUpdated()
    }
    setPlace(place){
        this.selectedPlace = place
        this.notifyUpdated()
    }
    removeTag(tag){
        this.selectedTags = this.selectedTags.filter(t=>t.name !== tag.name)
        this.notifyUpdated()
    }
}