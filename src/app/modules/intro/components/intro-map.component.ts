import {NgModule,Component} from '@angular/core';
import {OnInit,AfterContentInit} from '@angular/core';
import {ViewChild,ViewChildren,QueryList} from '@angular/core';
import {CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA }      from '@angular/core';

import {Observable} from 'rxjs';
import {Subscription}   from 'rxjs';

import {Flight,Coordinate,MarkerIcon} from '../../shared/models';
import {SgvData} from '../../shared/svgs';
import {IntroUtilService} from '../services/intro.util.service';
import {Styles} from '../../shared/styles'; 
import {AgmMap} from '@agm/core';
import { MapTypeControlOptions , MapTypeStyle, MapTypeControlStyle , ControlPosition} from '@agm/core/services/google-maps-types';

declare var $:any;
            
@Component({
    moduleId: module.id,
    templateUrl: 'intro-map.component.html',
    selector: 'intro-map',
    providers: []
    
})
export class IntroMapComponent implements OnInit,AfterContentInit{
    lat_map: number = 24.000001;
    lng_map: number = -38.000001;
    zoom_map: number = 4;    
    lat_map_initial: number = 24.000001;
    lng_map_initial: number = -38.000001;
    zoom_map_initial: number = 4;

    flightsInitialized : boolean = false;
    cflightsInitialized : boolean = false;
        
        

    flights: Flight[] = [];
    cflights: Flight[] = [];
       
    
    tetaMap : Map<number, number> = new Map<number, number>();   
    lat_C_center: number = 24.000001;
    lng_C_center: number = -38.000001;
 
             
    private subscriptionOfTimer : Subscription;   
    private subscriptionOfTimerEarth : Subscription;   
    private subscriptionOfTimerC : Subscription; 
    @ViewChild(AgmMap) map : AgmMap;      
    
    
    
    constructor( //private service: IntroService,
                 private util: IntroUtilService ) {
    }

    ngOnInit(){ 
        this.initMap(); 
        this.subscriptionOfTimer = Observable.timer(1000,100).subscribe((x : number) => {this.advanceFlights()});   
        this.subscriptionOfTimerC = Observable.timer(1000,200).subscribe((x : number) => { this.advanceCFlights()});
        this.subscriptionOfTimerEarth = Observable.timer(1000,1000).subscribe((x : number) => {this.advanceEarth()});   
 
              
    }
    ngOnDestroy(){
        this.subscriptionOfTimer.unsubscribe();
        this.subscriptionOfTimerC.unsubscribe();
        this.subscriptionOfTimerEarth.unsubscribe();
         
    } 
    ngAfterContentInit() {
    
    }
  
    initFlights() {
        for (let i=0;i<160;i++){
            let f : Flight = this.util.generateFlight(Math.random()*1000);
            this.flights.push(f);   
            //console.log("flight.id:" + f.id);     
        } 
        this.flightsInitialized = true; 
    }    
    advanceFlights() { //console.log("advanceFlights.....");
        let indexesToRemove : number[] = [];
        if (this.flightsInitialized == false){ //console.log("   flightsInitialized false");
            this.initFlights();
        }else{ //console.log("   //flightsInitialized true");
            let f: Flight;
            let factor: number = 0.06;
            for (let i = 0; i < this.flights.length;i++){
                f = this.flights[i];
                f.lat = f.lat + (f.vector.y * factor);  
                f.lng = f.lng + (f.vector.x * factor);
                //if flight accomplished get the index to remove and generate a new flight
                let bool: boolean = this.util.isFlightAccomplished(f);
                if (bool) {  
                    let flight : Flight = this.util.generateFlight(Math.random()*1000);
                    this.flights.push(flight); 
                    indexesToRemove.push(i);  
                }
            } 
            for (let i = 0; i < indexesToRemove.length;i++){
                this.flights.splice(indexesToRemove[i],1);  
            }
        }
    }//advanceFlights


       
        
    initCFlights() {
        let radius : number = 16;
        let initialTeta : number = 0;
        let teta : number = initialTeta;
        for (let i=0;i<9;i++){ //radius 10 için  sayı:14  , teta: +20
            teta=teta + 40;
            let f : Flight = this.util.generateCFlight(radius,teta,this.lat_C_center,this.lng_C_center);
            this.cflights.push(f);        
            this.tetaMap.set(f.id,teta);
                      //console.log("advanceCFlights  tetaMap e  flight id  "+ f.id + " için teta set edildi:"+teta);
        } 
        this.cflightsInitialized = true;  

    }
    advanceCFlights() { //console.log("advanceCFlights....."); 
        let radius : number = 16;
        let initialTeta : number = 0;
        let tetaLastDegree : number = 360;
        let indexesToRemove : number[] = [];

        if (this.cflightsInitialized == false){  //console.log("   cflightsInitialized false");
            this.initCFlights();
        }else{ //console.log("   //flightsInitialized true");
            let f: Flight;
            let teta : number;
            for (let i = 0; i < this.cflights.length;i++){
                f = this.cflights[i];
                teta =  this.tetaMap.get(f.id);     
                          //console.log("advanceCFlights  tetaMap den flight id  "+ f.id + " için teta alındı:"+teta);
                teta = teta + 1.0;
                this.tetaMap.set(f.id,teta);

                this.util.advanceCFlight(f,radius,teta,this.lat_C_center,this.lng_C_center);

                let bool: boolean = this.util.isCFlightAccomplished(f,teta,tetaLastDegree);
                if (bool) {   
                    let flight : Flight = this.util.generateCFlight(radius,initialTeta,this.lat_C_center,this.lng_C_center);
                    this.cflights.push(flight); 
                    this.tetaMap.set(flight.id,initialTeta);
                    indexesToRemove.push(i);  
                }
            } 
            for (let i = 0; i < indexesToRemove.length;i++){
                this.cflights.splice(indexesToRemove[i],1);  
            }
        }
    }

    
    
    
    private initMap(){ 
        this.map.mapTypeControl = true;
        let mapTypeControlOptions: {
            //style: MapTypeControlStyle.HORIZONTAL_BAR,
            //mapTypeIds: ['roadmap', 'terrain' ]   //satellite , roadmap, terrain ,hybrid
            mapTypeIds: ['satellite']   //satellite , roadmap, terrain ,hybrid
        } 
        this.map.mapTypeControlOptions = mapTypeControlOptions; //styledMapType_Day1 ,introStyledMapType
        //this.map.styles = Styles.introStyledMapType;  
        this.map.styles = Styles.styledMapType_Day1;  
    

        this.lat_map = this.lat_map_initial;
        this.lng_map = this.lng_map_initial;
        this.zoom_map  = this.zoom_map_initial; 
        $("agm-map").width("100%");
        $("agm-map").height($("#intromap").height());
           
    }         
    
 
    advanceEarth() { //console.log("advanceFlights.....");
        //this.lng_map = this.lng_map - 0.05;
    }    
    
    
    
    
    
    
    
    
    
    
    
}//END.


