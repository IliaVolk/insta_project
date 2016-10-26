class TagService {
    constructor() {

    }
    get(){
        return Promise.resolve([
            {name: "tag2", size: 1},
            {name: "tag1", size: 2},
            {name: "tag3", size: 3},
            {name: "tag4", size: 1},
            {name: "tag5", size: 2},
            {name: "tag6", size: 3},
            {name: "tag12", size: 1},
            {name: "tag122", size: 2},
            {name: "tag32323", size: 3}
        ])
    }
    post(){
        return Promise.resolve({})
    }
    delete(){
        return Promise.resolve({})
    }
    update(){
        return Promise.resolve({})
    }
}


export default new TagService()