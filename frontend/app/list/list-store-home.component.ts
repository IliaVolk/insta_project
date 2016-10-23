import { Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router"
import {Tag} from "../tag/Tag";
import {StoreService} from "../store/store.service";
import {ListClass} from "./list.component";
@Component({
  moduleId: module.id,
  selector: 'store-list-home',
  templateUrl: 'list-store-home.component.html',
  styleUrls: ['list.component.css']
})
export class StoreListComponent extends ListClass{
  constructor(storeService:StoreService, private router:Router){
    super(storeService);
    this.title = "Store List"
  }
  onTagClick(tag:Tag){
    this.router.navigate(["home", {"tag-name": tag.name}])
  }
}
