import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import {AppComponent} from './app.component';

export const appRoutes : Routes = [
  /*{ 
      path: '',
      loadChildren: () => import('./modules/intro/intro.module').then(x => x.IntroModule)
  },
  {
      path: 'intro',
      loadChildren: () => import('./modules/intro/intro.module').then(x => x.IntroModule)
  }*/ 
  {
      path: '',
      loadChildren: 'app/modules/intro/intro.module#IntroModule'
  }
  ,
  {
      path: 'intro',
      loadChildren: 'app/modules/intro/intro.module#IntroModule'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }