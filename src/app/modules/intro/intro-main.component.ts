import {Component} from '@angular/core';
import {OnInit,OnDestroy,AfterContentInit} from '@angular/core';


declare var $: any;
            
@Component({
    moduleId: module.id,
    templateUrl: 'intro-main.component.html',
    providers: [],
    selector: 'intro-main'
    
})
export class IntroMainComponent implements OnInit,OnDestroy,AfterContentInit{
    div_change_duration : number = 240;
    logoImagePath : string ;         			
  
    constructor( ) {
        this.logoImagePath =  "assets/img/main_logo.png";          
    }

    ngOnInit(){ 
      
    }
    ngOnDestroy(){


    } 
    ngAfterContentInit() {    
        
    }
       
    
}//END.




