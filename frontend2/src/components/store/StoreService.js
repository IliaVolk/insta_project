class StoreService {
    constructor() {

    }
    get(){
        return Promise.resolve([
            {
                name: "place1",
                image: "http://www.zooclub.ru/skat/img.php?w=700&h=700&img=./attach/12000/12669.jpg",
                description: "desc1",
                url: "http://www.zooclub.ru/skat/img.php?w=700&h=700&img=./attach/12000/12669.jpg"
            },
            {
                name: "place2",
                image: "http://www.zooclub.ru/skat/img.php?w=700&h=700&img=./attach/12000/12669.jpg",
                description: "desc1",
                url: "http://www.zooclub.ru/skat/img.php?w=700&h=700&img=./attach/12000/12669.jpg"
            },
            {
                name: "place3",
                image: "http://www.zooclub.ru/skat/img.php?w=700&h=700&img=./attach/12000/12669.jpg",
                description: "desc1",
                url: "http://www.zooclub.ru/skat/img.php?w=700&h=700&img=./attach/12000/12669.jpg"
            },
            {
                name: "place4",
                image: "http://www.zooclub.ru/skat/img.php?w=700&h=700&img=./attach/12000/12669.jpg",
                description: "desc1",
                url: "http://www.zooclub.ru/skat/img.php?w=700&h=700&img=./attach/12000/12669.jpg"
            }
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

export default new StoreService()