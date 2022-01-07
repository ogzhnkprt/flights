import {NgModule}      from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {IntroMainComponent}  from './intro-main.component';


export const introRoutes : Routes = [
    { path: '', 
      component:  IntroMainComponent,
    
    }
]

@NgModule({
    imports: [RouterModule.forChild(introRoutes)],
    exports: [RouterModule]
})
export class IntroRoutingModule { }
