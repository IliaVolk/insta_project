import { Component, Input, OnInit } from '@angular/core';
import {EditListItemComponent} from "./list-edit-item.component";
import {Store} from "../../store/store";

@Component({
    moduleId: module.id,
    selector: 'edit-store-list-item',
    templateUrl: 'list-edit-item-store.component.html',
    styleUrls: ['list-edit-item-store.component.css']
})
export class EditStoreListItemComponent extends EditListItemComponent {
  @Input()
  item:Store
}
