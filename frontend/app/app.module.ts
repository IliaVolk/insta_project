import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api/in-memory-web-api.module';
import './rxjs-extensions';
import { AppComponent } from './app.component';
import { AppRoutingModule} from './app-routing.module';
import {AppService} from "./app.service";
import {HomeComponent} from "./home/home.component";
import {HighlightDirective} from "./home/highlight.directive";
import {TitleComponent} from "./home/title.component";
import {StoreService} from "./store/store.service";
import {AdminModule} from "./admin/admin.module";
import {ListModule} from "./list/list.module";
import {TagService} from "./tag/tag.service";
import {NotFoundComponent} from "./not-found/not-found.component";
import {UiLibAdapterModule} from "./ui-lib.adapter.module";



//import { MdRippleModule } from '@angular2-material/core';

@NgModule({
  imports: [
    UiLibAdapterModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    AdminModule,
    AppRoutingModule,
    ListModule,
    //MdRippleModule
  ],
  declarations: [
    HomeComponent,
    AppComponent,
    HighlightDirective,
    TitleComponent,
    NotFoundComponent
  ],
  providers: [
    AppService,
    StoreService,
    TagService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
