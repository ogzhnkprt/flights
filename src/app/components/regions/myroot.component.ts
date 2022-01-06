import {Component} from '@angular/core';
import {OnInit} from '@angular/core';


declare var $: any;    

@Component({
    templateUrl: 'myroot.component.html',
    selector: 'my-root'
})
export class MyRootComponent implements OnInit{
     
    constructor( ) {
    }

    ngOnInit() {
        $("#root").height($(window).height());
    } 
    
    ngOnDestroy() {
    }   
      
}//END.
