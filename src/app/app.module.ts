import { NgModule } from '@angular/core';
import {CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA }      from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule } from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
//import 'rxjs/add/operator/toPromise';
import {AppRoutingModule} from './app-routing.module';
import {SharedModule} from './modules/shared/shared.module';
//import {IntroModule} from './modules/intro/intro.module';

import { APP_BASE_HREF } from '@angular/common';
import {AppComponent}  from './app.component';
import {MyRootComponent}  from './components/regions/myroot.component';



@NgModule({
  imports:      [ BrowserModule,FormsModule,HttpClientModule,BrowserAnimationsModule,AppRoutingModule,SharedModule/*,IntroModule*/],
  declarations: [ AppComponent,MyRootComponent],
  bootstrap:    [ AppComponent],
  providers:    [ ],
  schemas:      [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class AppModule { }