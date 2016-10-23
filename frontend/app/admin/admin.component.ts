import { Component, HostBinding,
  trigger, transition, animate,
  style, state  } from '@angular/core';
import {AppService} from "../app.service";

@Component({
  moduleId: module.id,
  selector: 'admin',
  templateUrl: `admin.component.html`,
  styleUrls: ['admin.component.css']
})


export class AdminComponent {


  constructor(private appService:AppService){}
  title = 'Admin Component';
  message = "No Message";
  handleRequest(){
    this.appService.getHelloMessage()
      .subscribe(mes=>this.message = mes)
  }
}
