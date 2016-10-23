import { Component, Input } from '@angular/core';


export class EditListItemComponent {
    isEditing:boolean = false;
    prevValue:any;

    item:any;

    onEdit(){
      this.isEditing = true;
      this.prevValue = this.item
    }
    onCancel(){
      this.item = this.prevValue
      this.isEditing = false
    }
    onConfirm(){
      this.isEditing = false
    }
    onDelete(){

    }
}
