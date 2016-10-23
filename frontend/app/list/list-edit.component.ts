

import {ListClass} from "./list.component";
import {AbstractService} from "../store/abstract.service";
export class EditListClass extends ListClass{
  constructor(service:AbstractService){
    super(service)
  }

}
