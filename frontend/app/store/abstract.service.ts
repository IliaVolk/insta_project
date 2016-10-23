import {Observable} from "rxjs/Observable";


export abstract class AbstractService{
  abstract get():Observable;
}
