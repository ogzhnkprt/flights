import {Injectable} from '@angular/core';

import {Flight,MarkerIcon,Coordinate} from '../../shared/models';
import {Point} from '@agm/core/services/google-maps-types.d';

import {SgvData} from '../../shared/svgs';



@Injectable()
export class IntroUtilService {
    
    constructor() {}
     
    planeIconAnchor : any = {"x": 180, "y": 360, equals(other: Point): boolean{return false;},toString(): string {return "";}}; 
    starIconAnchor : any = {"x": 0, "y": 20, equals(other: Point): boolean{return false;},toString(): string {return "";}}; 
         
    public generateFlight(id : number){
        let flight : Flight = new Flight (id,Math.random()*1000,null,null,null,null,null,null,null,null,null,null,null);  
        this.setCoordinates(flight);
        this.setVector(flight);
        this.setLatLng(flight);
        this.setStatu(flight);
        this.setMarkerIcon(flight);
        this.getRotationDegree(flight);
        return flight;
    }
    
    
    private setPrecision(n : number , precision : number) :  number{
        let num : number = Number(parseFloat(n.toString()).toFixed(precision));
        return num;
    }

    public setCoordinates(f: Flight) {       //console.log("findAirportsAndSetCoordinates..........");
        /*let x=(Math.random()*360)<180?1:-1;     //console.log(x);
        let y=(Math.random()*180)<90?1:-1;
        f.lat_start = Math.random() * 100 ;  console.log("lat_start:"+f.lat_start);
        f.lng_start = Math.random() * 200 ;
        f.lat_fin = Math.random() * 100;
        f.lng_fin = Math.random() *  200 ;*/  
        

        let x=Math.random()*180;
        f.lat_start = x<90 ? x : (x-180);    
        x=Math.random()*360;
        f.lng_start =  x<180 ? x : (x-360);
        x=Math.random()*180;
        f.lat_fin = x<90 ? x : (x-180);  
        x=Math.random()*360;
        f.lng_fin =  x<180 ? x : (x-360);    
    }//setCoordinates 
       
            
    public setVector(f : Flight){
        let vector : Coordinate = new Coordinate(f.lng_fin-f.lng_start,f.lat_fin-f.lat_start);
        let norm: number = Math.sqrt(vector.x*vector.x + vector.y*vector.y);
        norm = this.setPrecision(norm,6);
        let unitvector = new Coordinate(vector.x / norm , vector.y / norm); 
        unitvector.x = this.setPrecision(unitvector.x,6);
        unitvector.y = this.setPrecision(unitvector.y,6);                  
        f.vector = unitvector;
    }//setVector
    
    
    private setLatLng(f : Flight){
        let norm: number = Math.sqrt(f.vector.x*f.vector.x + f.vector.y*f.vector.y);
        norm = this.setPrecision(norm,6);
        let DX: number =  Math.abs(f.lng_fin-f.lng_start);
        let DY: number = Math.abs(f.lat_fin-f.lat_start);
        let normD: number = Math.sqrt(DY*DY+DX*DX); 
        normD = Math.ceil(normD);
        normD = this.setPrecision(normD,6)
        let factor : number = Math.ceil(Math.random() * (normD-2));
        f.lng = f.lng_start + f.vector.x * factor;   
        f.lng = this.setPrecision(f.lng,6)           
        f.lat = f.lat_start +  f.vector.y*factor;   
        f.lat = this.setPrecision(f.lat,6)
    }//setLatLng   
        
    
    public setStatu(f : Flight){
        let radius = 2;
        let AX=Math.abs(f.lng-f.lng_start);
        let AY=Math.abs(f.lat-f.lat_start);
        let DX=Math.abs(f.lng-f.lng_fin);
        let DY=Math.abs(f.lat-f.lat_fin);
        let normA=Math.sqrt(AY*AY+AX*AX);
        let normD=Math.sqrt(DY*DY+DX*DX);
        if (normA < radius){
            f.statu = "1";
        }else if (normD < radius){
            f.statu = "3";
        }else{
            f.statu = "2";
        }        
    }//setStatu
    
    public setMarkerIcon(f : Flight){
        let statu = f.statu;
        let path : string;    
        let fillColor : string;
        let strokeColor : string;
        let strokeWeight : number = 1;
        if (statu=="1"){
            path = SgvData.airlinerBlackSilhouetteSvg; 
            fillColor = "#3884ff"; 
            strokeColor = "white";
            strokeWeight =1;
        }else if (statu=="3"){
            path = SgvData.airlinerBlackSilhouetteSvg; 
            fillColor = "#3884ff";
            strokeColor = "black"; 
            strokeWeight = 1;
        }else{
            path = SgvData.airlinerBlackSilhouetteSvg;  
            fillColor = "white";
            strokeColor = "white";
            strokeWeight = 1;            
        }         
        //calculate rotation degree
        let rotationdegree : number = this.getRotationDegree(f);
        //set markericon
        let markericon : MarkerIcon  = new MarkerIcon(path,fillColor,1.0,strokeColor,0.02,rotationdegree,strokeWeight,this.planeIconAnchor);  //strokeColor = "#356cde"
        f.markericon=markericon;
    }//setMarkerIcon    
     
    private getRotationDegree(f: Flight) :  number{
        let rotationdegree : number = 0; 
        //calculate rotation degree
        let v : Coordinate = f.vector;
        let e : Coordinate = new Coordinate(1,0);
        let normV=Math.sqrt(v.x*v.x+v.y*v.y);
        let cosQ : number = (v.x*e.x +v.y*e.y)/normV; 
        let acosQ : number = Math.acos(cosQ);
        rotationdegree = acosQ * (180 / Math.PI);  
        if ( (v.x>0 && v.y>0) || (v.x<0 && v.y>0) ){
            rotationdegree=(-1)*rotationdegree;   
        }
        return rotationdegree;
    }
    
    
    private isDepartingOrAscending(f: Flight) :  boolean{
        let bool : boolean = false; 
        let DX : number = f.lng - f.lng_start;
        let DY : number = f.lat - f.lat_start;
        let norm=Math.sqrt(DX*DX+DY*DY);
        if ( norm < 2 ){
            bool =  true;
        }
        return bool;
    } 
    private isDescendingOrArrived(f: Flight) :  boolean{
        let bool : boolean = false; 
        let DX : number = f.lng_fin - f.lng;
        let DY : number = f.lat_fin - f.lat;
        let norm=Math.sqrt(DX*DX+DY*DY);
        if ( norm < 2 ){
            bool =  true;
        }
        return bool;
    }        
    
    
    public isFlightAccomplished(f: Flight) :  boolean{
        let bool : boolean = false;
        let DX : number = f.lng_fin - f.lng;
        let DY : number = f.lat_fin - f.lat;
        let norm=Math.sqrt(DX*DX+DY*DY);
        if ( norm < 1 ){
            bool =  true;
        }          
        return bool;
    }
    
    
    
    
    
    
    
/* ****** CFLIGHT ****** */
    public generateCFlight(radius : number ,teta : number,lat_C_center : number,lng_C_center :  number){
        let id= Math.random()*1000;
        id = this.setPrecision(id,1);
        let flight : Flight = new Flight (id,id,null,null,null,null,null,null,null,null,null,null,null);    
        this.setC_LatLng(flight,radius,teta,lat_C_center,lng_C_center);
        this.setC_MarkerIcon(flight,teta);
        return flight;
    }
    
    public advanceCFlight(flight : Flight, radius : number ,teta : number,lat_C_center : number,lng_C_center :  number){
        this.setC_LatLng(flight,radius,teta,lat_C_center,lng_C_center);
        this.setC_MarkerIcon(flight,teta);
        return flight;
    }
        
    private setC_LatLng(f : Flight, radius : number , teta : number, lat_C_center : number,lng_C_center :  number){
        let tetaInRadian : number =  (teta * Math.PI) / 180;
        f.lng = (radius) * Math.cos(tetaInRadian) + lng_C_center;
        f.lat = (radius)* Math.sin(tetaInRadian) + lat_C_center;
        
        f.lng = this.setPrecision(f.lng,6);
        f.lat = this.setPrecision(f.lat,6);
    }//setC_LatLng    
    
    public setC_MarkerIcon(f : Flight,teta : number){
        let statu = f.statu;
        let path : string;    
        let fillColor : string;
        let strokeColor : string;
        let strokeWeight : number = 1;

        path = SgvData.airlinerBlackSilhouetteSvg;  
        fillColor = "white";
        strokeColor = "red";
        strokeWeight = 1;            
       //calculate rotation degree
        let rotationdegree : number = (-1) * (180-(90-teta)) ;
        //set markericon
        let markericon : MarkerIcon  = new MarkerIcon(path,fillColor,1.0,strokeColor,0.060,rotationdegree,strokeWeight,this.planeIconAnchor);  
        f.markericon=markericon;
    }//setC_MarkerIcon       
      
    

    
    public isCFlightAccomplished(f: Flight ,teta, lastTetaDegree) :  boolean{
        let bool : boolean = false;
        if ( teta > lastTetaDegree ){
            bool =  true;
        }          
        return bool;
    }   
     
  
}//END.


