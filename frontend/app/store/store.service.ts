import {Injectable} from "@angular/core"
import {Observable} from "rxjs/Observable";
import {Store} from "./store";
import {AbstractService} from "./abstract.service";
import {Tag} from "../tag/Tag";
import {Tag} from "../tag/Tag";


@Injectable()
export class StoreService extends AbstractService{
  get():Observable{
    return Observable.of([
      new Store("store1 glass", "The titles of Washed Out's breakthrough song and the first single from Paracosm share the two most important words in Ernest Greene's musical language: feel it. It's a simple request, as well...",
                "https://www.google.com.ua/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=grass",
        "https://pixabay.com/static/uploads/photo/2014/06/23/20/32/grass-375586_960_720.jpg",
      [new Tag("tag1"), new Tag("tag2")]),
      new Store("store2 cat", "The titles of Washed Out's breakthrough song and the first single from Paracosm share the two most important words in Ernest Greene's musical language: feel it. It's a simple request, as well...",
        "https://www.google.com.ua/search?q=grass&newwindow=1&espv=2&rlz=1C1SAVI_ruUA700UA700&biw=1517&bih=708&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjG-ZO1tfHPAhUFP5oKHdP2BhkQ_AUIBigB&dpr=0.9#newwindow=1&tbm=isch&q=cat&imgrc=G5FE3B2W0sWRHM%3A",
      "https://d4n5pyzr6ibrc.cloudfront.net/media/27FB7F0C-9885-42A6-9E0C19C35242B5AC/D968A2D0-35B8-41C6-A94A0C5C5FCA0725/thul-43c319fb-cc3a-56b5-afdc-f3544a682986.jpg?response-content-disposition=inline",
       [new Tag("cake"), new Tag("potato")]),
      new Store("store3", "The titles of Washed Out's breakthrough song and the first single from Paracosm share the two most important words in Ernest Greene's musical language: feel it. It's a simple request, as well...",
        "https://www.google.com.ua/search?q=grass&newwindow=1&espv=2&rlz=1C1SAVI_ruUA700UA700&biw=1517&bih=708&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjG-ZO1tfHPAhUFP5oKHdP2BhkQ_AUIBigB&dpr=0.9#newwindow=1&tbm=isch&q=cat&imgrc=G5FE3B2W0sWRHM%3A",
        "https://d4n5pyzr6ibrc.cloudfront.net/media/27FB7F0C-9885-42A6-9E0C19C35242B5AC/D968A2D0-35B8-41C6-A94A0C5C5FCA0725/thul-43c319fb-cc3a-56b5-afdc-f3544a682986.jpg?response-content-disposition=inline",
       [new Tag("cat"), new Tag("dog")])
    ])
  }
}
