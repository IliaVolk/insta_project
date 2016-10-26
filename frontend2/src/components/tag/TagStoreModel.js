import TagModel from "./TagModel"
import TagStoreComponent from "./TagStoreComponent"
export default class TagStoreModel extends TagModel{
    constructor(params) {
        super(Object.assign(params, {ComponentClass:TagStoreComponent}))
    }
}