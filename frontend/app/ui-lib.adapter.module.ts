import {NgModule} from "@angular/core"
import {MATERIAL_DIRECTIVES, MATERIAL_PROVIDERS} from "ng2-material";
import {MdToolbar} from '@angular2-material/toolbar';
import {MdSidenav} from '@angular2-material/sidenav';
import {MdIcon} from 'ng2-material';
import {FORM_DIRECTIVES} from '@angular/forms';
import {MD_INPUT_DIRECTIVES} from '@angular2-material/input';
import { MaterialModule } from '@angular/material';

@NgModule({
  imports: [
    MaterialModule.forRoot()
  ],
  declarations: [],
  exports: [
    MaterialModule
  ],
  directives: [MATERIAL_DIRECTIVES, MdToolbar, MD_INPUT_DIRECTIVES, FORM_DIRECTIVES, MdSidenav],

  providers: []
})
export class UiLibAdapterModule {

}
