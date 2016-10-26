class PlaceService {
    constructor() {

    }
    get(){
        return Promise.resolve([
            {name: "p2", size: 1},
            {name: "place1", size: 2},
            {name: "place3", size: 3, description: "djl;khdkjhckjhdkljshjldkj"}
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


export default new PlaceService()