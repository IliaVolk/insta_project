import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TagListComponent} from "../list/list.component";
import {AdminComponent} from "./admin.component";
import {EditStoreListComponent} from "../list/list-store-edit/list-store-edit.component";


const routes= [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: "tag",
      },
      {
        path: 'store',
        component: EditStoreListComponent
      },
      {
        path: 'tag',
        component: TagListComponent
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }


