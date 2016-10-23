import { Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router"
import {Tag} from "../../tag/Tag";
import {StoreService} from "../../store/store.service";
import {ListClass} from "./../list.component";
@Component({
  moduleId: module.id,
  selector: 'store-list-edit',
  templateUrl: 'list-store-edit.component.html',
  styleUrls: ['list-store-edit.component.css']
})
export class EditStoreListComponent extends ListClass{
  constructor(storeService:StoreService, private router:Router){
    super(storeService);
    this.title = "Store List"
  }

}
