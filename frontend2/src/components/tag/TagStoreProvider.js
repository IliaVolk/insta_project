export default class TagStoreProvider {
    constructor(store) {
        this.tags = store.tags
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