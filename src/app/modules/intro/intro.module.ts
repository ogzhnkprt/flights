import {NgModule}      from '@angular/core';
import {CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA }      from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule } from '@angular/common/http';
import {CommonModule}   from '@angular/common';

import {AgmCoreModule } from '@agm/core';
import {IntroRoutingModule} from './intro-routing.module';
import {IntroMainComponent } from './intro-main.component';
import {IntroMapComponent}  from './components/intro-map.component';
import {IntroUtilService} from './services/intro.util.service';

import {SharedModule } from '../shared/shared.module';

@NgModule({
        imports: [CommonModule,FormsModule,HttpClientModule,IntroRoutingModule,  SharedModule,
                        AgmCoreModule.forRoot({
                                apiKey: 'AIzaSyCzsO8vrOW2ZzRzDDg81xEYRuxENkE10fA'
                        }),         
                ],
        declarations: [IntroMainComponent,IntroMapComponent],
        providers:    [IntroUtilService]
})
export class IntroModule { }
