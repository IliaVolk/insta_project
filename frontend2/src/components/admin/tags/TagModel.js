import ListItemModel from "./../ListItemModel"
import TagComponent from "./TagComponent"

export default class TagModel extends ListItemModel{
    constructor(params) {
        super(params)
        this.ComponentClass = TagComponent
    }
}