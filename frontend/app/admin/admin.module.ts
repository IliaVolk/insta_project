import {NgModule} from "@angular/core"
import {AwesomePipe} from "./awesome.pipe";
import {HighlightDirective} from "./highlight.directive";
import {AdminComponent} from "./admin.component";
import {ListModule} from "../list/list.module";
import {FormsModule} from "@angular/forms"
import {AdminRoutingModule} from "./admin-routing.module";
import {UiLibAdapterModule} from "../ui-lib.adapter.module";
@NgModule({
  imports:[
    UiLibAdapterModule,
    ListModule,
    AdminRoutingModule,
    FormsModule
  ],
  declarations:[
    AwesomePipe,
    HighlightDirective,
    AdminComponent,
  ],
  exports:[
    AdminRoutingModule
    //AdminComponent
  ]
})
export class AdminModule{

}
