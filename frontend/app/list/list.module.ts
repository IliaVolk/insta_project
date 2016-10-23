import {NgModule} from "@angular/core"
import { BrowserModule } from '@angular/platform-browser';
import {ListClass} from "./list.component";
import {TagListComponent} from "./list.component";
import {StoreListComponent} from "./list-store-home.component";
import {UiLibAdapterModule} from "../ui-lib.adapter.module";
import {EditStoreListItemComponent} from "./list-edit-item/list-edit-item-store.component";
import {EditStoreListComponent} from "./list-store-edit/list-store-edit.component";

@NgModule({
    imports: [
      UiLibAdapterModule,
      BrowserModule
    ],
    declarations: [
      TagListComponent,
      StoreListComponent,
      EditStoreListItemComponent,
      EditStoreListComponent
    ],
    exports: [
      TagListComponent,
      StoreListComponent,
      EditStoreListComponent
    ]
})
export class ListModule {

}
