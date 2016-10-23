import {Injectable} from "@angular/core"
import {Observable} from "rxjs/Observable";
import {AbstractService} from "../store/abstract.service";


@Injectable()
export class TagService extends AbstractService{
  get():Observable {
    return Observable.of([
      {name: "tag1"},
      {name: "tag2"}
    ]);
  }

}
