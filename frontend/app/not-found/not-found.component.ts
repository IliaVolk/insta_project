import { Component, Input } from '@angular/core';
import {Location} from "@angular/common";

@Component({
    moduleId: module.id,
    selector: 'not-found',
    template: `<div>
    <h1>{{title}}</h1><button md-button (click)="back()">Back</button></div>`,
})
export class NotFoundComponent {
    title = "Not Found"
    constructor(private location: Location){}
    back(){
      this.location.back()
    }
}
