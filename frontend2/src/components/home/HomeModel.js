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
            provider: PlaceService,
            isMultiple:false,
            onSelect:this.setPlace,
            getSelected: ()=>[this.selectedPlace||{}]
        })
        this.tagSelector = new CriteriaSelectorModel({
            title: "Select tag:",
            provider: TagService,
            isMultiple: true,
            onSelect:this.addTag,
            getSelected: ()=>this.selectedTags
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
        this.clearTags = this.clearTags.bind(this)

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
        return this.selectedTags
    }
    setPlace(place){
        this.selectedPlace = place
        this.notifyUpdated()
        return [place]
    }
    removeTag(tag){
        this.selectedTags = this.selectedTags.filter(t=>t.name !== tag.name)
        this.notifyUpdated()
    }
    clearTags(){
        this.selectedTags = []
        this.notifyUpdated()
    }
}