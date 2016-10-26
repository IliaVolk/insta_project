import HomeModel from "./home/HomeModel"
import ListModel from "./list/ListModel"
import PlaceService from "./place/PlaceService"
import StoreService from "./store/StoreService"
import TagService from "./tag/TagService"
import PlaceModel from "./place/PlaceModel"
import StoreModel from "./store/StoreModel"
import TagModel from "./tag/TagModel"
import GridListComponent from "./list/GridListComponent"
export default {
    home: new HomeModel(),
    admin:{
        places: new ListModel({provider: PlaceService, ChildModel: PlaceModel, addNewPrompt: "Add New Place"}),
        stores: new ListModel({provider: StoreService, ChildModel: StoreModel, addNewPrompt: "Add New Store"}),
        tags: new ListModel({provider: TagService, ChildModel: TagModel, ComponentClass: GridListComponent, addNewPrompt: "Add New Tag"})
    },
    user:{
        places: new ListModel({provider: PlaceService, ChildModel: PlaceModel, addNewPrompt: "Add New Place"}),
        stores: new ListModel({provider: StoreService, ChildModel: StoreModel, addNewPrompt: "Add New Store"}),
        tags: new ListModel({provider: TagService, ChildModel: TagModel, ComponentClass: GridListComponent, addNewPrompt: "Add New Tag"})
    }

}