import { Component } from '@angular/core';
import {NgModule}  from '@angular/core';
import {MyRootComponent}  from './components/regions/myroot.component';


/*@NgModule({
  declarations: [MyRootComponent],
  providers: [] 
})*/
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'planes';
}
