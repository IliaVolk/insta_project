import { Component } from '@angular/core';
import {AppService} from "../app.service";

@Component({
  moduleId: module.id,
  selector: 'other',
  template: `
    <h1>{{title}}</h1>
    <button (click)="handleRequest()">Request</button>
    <h2>{{message}}</h2>
  `})
export class OtherComponent {
  constructor(private appService:AppService){}
  title = 'Other Component';
  message = "No Message";
  handleRequest(){
    this.appService.getHelloMessage()
      .subscribe(mes=>this.message = mes)
  }
}
