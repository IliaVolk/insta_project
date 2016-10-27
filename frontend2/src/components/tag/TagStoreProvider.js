export default class TagStoreProvider {
    constructor(storeModel) {
        this.tags = storeModel.value.tags
        this.model = storeModel
    }
    get(){
        return Promise.resolve(this.tags)
    }
    post(tag){
        this.tags.push(tag)
        return Promise.resolve({})
    }
    delete(tag){
        this.tags = this.tags.filter(t=>!JSON.stringify(tag)===JSON.stringify(t))
        return Promise.resolve({})
    }
    update(tag){
        return Promise.resolve({})
    }
}