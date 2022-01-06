import {NgModule}      from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule}   from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import {SgvData} from './svgs';
import {Styles} from './styles';



@NgModule({
        imports:      [FormsModule,CommonModule,HttpClientModule],
        declarations: [],
        providers:    [],
        exports: []
})
export class SharedModule { }
