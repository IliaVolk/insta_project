class StoreService {
    constructor() {

    }
    get(){
        return Promise.resolve([
            {
                name: "place1",
                image: "http://www.zooclub.ru/skat/img.php?w=700&h=700&img=./attach/12000/12669.jpg",
                description: "desc1",
                url: "http://www.zooclub.ru/skat/img.php?w=700&h=700&img=./attach/12000/12669.jpg",
                tags:[
                    {name: "tag2", size: 1},
                    {name: "tag1", size: 2},
                    {name: "tag3", size: 3},
                    {name: "tag4", size: 1},
                ],
                place:{
                    name: "place3",
                    size: 3,
                    description: "djl;khdkjhckjhdkljshjldkj"
                }

            },
            {
                name: "place2",
                image: "http://www.zooclub.ru/skat/img.php?w=700&h=700&img=./attach/12000/12669.jpg",
                description: "desckjhkl hkljhlk hjklhlk h lkhlhlhkljhjhkl,lj lh lhljh kjhlh 1",
                url: "http://www.zooclub.ru/skat/img.php?w=700&h=700&img=./attach/12000/12669.jpg",
                tags:[
                    {name: "tag2", size: 1},
                    {name: "tag1", size: 2},
                    {name: "tag3", size: 3},
                    {name: "tag4", size: 1},
                ],
                place:{
                    name: "place3",
                    size: 3,
                    description: "djl;khdkjhckjhdkljshjldkj"
                }
            },
            {
                name: "place3",
                image: "http://www.zooclub.ru/skat/img.php?w=700&h=700&img=./attach/12000/12669.jpg",
                description: "desc1",
                url: "http://www.zooclub.ru/skat/img.php?w=700&h=700&img=./attach/12000/12669.jpg",
                tags:[
                    {name: "tag2", size: 1},
                    {name: "tag1", size: 2},
                    {name: "tag3", size: 3},
                    {name: "tag4", size: 1},
                ],
                place:{
                    name: "place3",
                    size: 3,
                    description: "djl;khdkjhckjhdkljshjldkj"
                }
            },
            {
                name: "place4",
                image: "http://www.zooclub.ru/skat/img.php?w=700&h=700&img=./attach/12000/12669.jpg",
                description: "desc1",
                url: "http://www.zooclub.ru/skat/img.php?w=700&h=700&img=./attach/12000/12669.jpg",
                tags:[
                    {name: "tag2", size: 1},
                    {name: "tag1", size: 2},
                    {name: "tag3", size: 3},
                    {name: "tag4", size: 1},
                ],
                place:{
                    name: "place3",
                    size: 3,
                    description: "djl;khdkjhckjhdkljshjldkj"
                }
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