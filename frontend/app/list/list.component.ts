import { Component, Input, OnInit} from '@angular/core';
import {StoreService} from "../store/store.service";
import {Store} from "../store/store";
import {Router} from "@angular/router"
import {TagService} from "../tag/tag.service";
import {Tag} from "../tag/Tag";
import {AbstractService} from "../store/abstract.service";


export class ListClass implements OnInit{
  ngOnInit():void {
    this.service.get().subscribe((items:any)=>this.items = items)
  }
  title = "Title"
  items:any[] = []
  constructor(
    private service:AbstractService){
  }

}


@Component({
  moduleId: module.id,
  selector: 'tag-list',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.css']
})
export class TagListComponent extends ListClass{
  constructor(tagService:TagService, router:Router){
    super(tagService);
    this.title = "Tag List"
  }
}
