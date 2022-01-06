import {Point} from  '@agm/core/services/google-maps-types.d';  //{Point}




export class Coordinate {
    constructor( public x: number,
                 public y: number,
                 ){ 
    }
}//END.


export class LinkedMarkerIcon {
    constructor( public id: number,
                 public lat: number,
                 public lng: number,
                 public markericon: MarkerIcon  ){ 
    }
}//END.

export class MarkerIcon {
    constructor( public path: string,
                 public fillColor: string,
                 public fillOpacity: number,
                 public strokeColor: string,
                 public scale : number,
                 public rotation: number,
                 public strokeWeight: number,
                 public anchor : Point ){ 
    }
}//END.


export class Flight {
    constructor( public id: number,
                 public guid: number,
                 public flightCAR: string,
                 public direction: string, //?
                 public lat: number,//?
                 public lng: number,//?
                 public lat_start: number,
                 public lng_start: number,
                 public lat_fin: number,
                 public lng_fin: number,
                 public vector: Coordinate,
                 public markericon:MarkerIcon,
                 public statu: string
               ){ 
    }
}//END.







//{"number":"TK14","direction":"1","lat":33.584283,"lng":29.187095,"lat_start":37.290443,"lng_start":36.276855,
// "lat_fin":-10.888889,"lng_fin":-55.888889,"vector":[-0.463268,-0.886218],"accomplished":false},
export class SFlight {
    constructor( public number: string,
                 public direction: string,
                 public lat: number,
                 public lng: number,
                 public lat_start: number,
                 public lng_start: number,
                 public lat_fin: number,
                 public lng_fin: number,
                 public vector:[number],
                 public markericon:MarkerIcon,
                 public statu:string,
                 public accomplished:boolean ){ 
    }
}//END.






