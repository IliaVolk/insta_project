import HomeModel from "./home/HomeModel"
import ListModel from "./admin/ListModel"
import PlaceService from "./place/PlaceService"
import StoreService from "./store/StoreService"
import TagService from "./tag/TagService"
import PlaceModel from "./admin/places/PlaceModel"
import StoreModel from "./admin/stores/StoreModel"
import TagModel from "./admin/tags/TagModel"
import GridListComponent from "./admin/GridListComponent"
export default {
    home: new HomeModel(),
    places: new ListModel({provider: PlaceService, ChildModel: PlaceModel}),
    stores: new ListModel({provider: StoreService, ChildModel: StoreModel}),
    tags: new ListModel({provider: TagService, ChildModel: TagModel, ComponentClass: GridListComponent})
}