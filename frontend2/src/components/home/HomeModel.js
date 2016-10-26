import Model from "./../Model"
import CriteriaSelector from "./criteriaSelector/CriteriaSelectorModel"
import PlaceService from "./../place/PlaceService"
import TagService from "./../tag/TagService"
import StoreService from "./../store/StoreService"
import HomeComponent from "./HomeComponent"
export default class HomeModel extends Model{
    constructor() {
        super()
        this.ComponentClass = HomeComponent
        this.placeSelector = new CriteriaSelector({
            title: "Select tag:",
            provider: PlaceService
        })
        this.tagSelector = new CriteriaSelector({
            title: "Select place:",
            provider: TagService
        })
        this.storeService = StoreService
        this.stores = []
        this.storeService.get()
            .then((stores)=>{
                this.stores = stores
                this.notifyUpdated()
            })
    }
    goSearch(){
        console.log("GO SEARCH")
    }
    get selectedTag(){
        return this.placeSelector.value
    }
    get selectedPlace(){
        return this.tagSelector.value
    }
}