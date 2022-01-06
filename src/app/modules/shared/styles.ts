
import {MapTypeStyle} from '@agm/core/services/google-maps-types';

export class Styles {
   
   
    public static introStyledMapType : MapTypeStyle [] = //(
        [
            {
              "stylers": [
                {
                  "lightness": -100
                }
              ]
            }
        ];    
              
    public static introStyledMapType2 : MapTypeStyle [] = //(
        [
          {
            elementType: "all",
            stylers: [
              { invert_lightness: true } 
            ]
          },        
          {
            featureType: "landscape",
            elementType: "all",
            stylers: [
                 { lightness: -10 } , { saturation: -40 }
            ]
          },
          {
            featureType: "administrative",
            elementType: "all",
            stylers: [
              { visibility: "off"}
            ]
          },          
          {
            featureType: "poi",
            elementType: "all",
            stylers: [
              { visibility: "off"}
            ]
          },
          {
            featureType: "water",
            elementType: "all",
            stylers: [
              { invert_lightness: true } 
            ]
          },
          {
            featureType: "transit",
            elementType: "all",
            stylers: [
              { visibility: "off" } 
            ]
          }
        ];

    


    //public static styledMapType_Day1 : MapTypeStyle [] = [{"featureType":"landscape","stylers":[{"color":"#6c8080"},{"visibility":"simplified"}]},{"featureType":"administrative","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"road","stylers":[{"visibility":"simplified"}]},{"featureType":"poi","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"labels","stylers":[{"visibility":"off"}]},{"elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","stylers":[{"visibility":"off"}/*{"color":"#d98080"},{"hue":"#eeff00"},{"lightness":100},{"weight":1.5}*/]}];
    public static styledMapType_Day11 : MapTypeStyle [] = //(
        [
       
                 
          {
            featureType: "poi",
            elementType: "all",
            stylers: [
              { visibility: "off"}
            ]
          },
          {
            featureType: "transit",
            elementType: "all",
            stylers: [
              { visibility: "off" } 
            ]
          } 
          
                                  
                  
        ];
        
    public static styledMapType_Day12 : MapTypeStyle [] = //(        
        [
          {
            "stylers": [
              {
                "lightness": -5
              }
            ]
          },
          {
            "elementType": "geometry.fill",
            "stylers": [
              {
                "saturation": -15
              },
              {
                "lightness": -5
              }
            ]
          },
          {
            "elementType": "geometry.stroke",
            "stylers": [
              {
                "color": "#fafbd0"
              }
            ]
          },
          {
            "featureType": "administrative.country",
            "elementType": "geometry.stroke",
            "stylers": [
              {
                "color": "#6974d8"
              }
            ]
          },
          {
            "featureType": "administrative.country",
            "elementType": "labels.text",
            "stylers": [
              {
                "color": "#ffffff"
              },
              {
                "lightness": -5
              },
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "administrative.country",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "saturation": 5
              },
              {
                "lightness": -20
              }
            ]
          },
          {
            "featureType": "administrative.country",
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#000000"
              }
            ]
          },
          {
            "featureType": "landscape",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#e0e0e0"  /* #abd0de #dcd6d9 */ 
              }
            ]
          },
          {
            "featureType": "landscape.natural.terrain",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#9d9d9d"
              },
              {
                "lightness": 30
              },
              {
                "weight": 2
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#ffffff"
              }
            ]
          }
        ];




public static styledMapType_Day1 : MapTypeStyle [] = 
[


    {
        "stylers": [
          {
            "saturation": -5
          },
          {
            "lightness": -5
          }
        ]
      },
      
  {
    "elementType": "geometry.fill",
    "stylers": [
      {
        "saturation": -75
      },
      {
        "lightness": -20
      }
    ]
  }
        ,
          {
            "featureType": "landscape.natural",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "lightness": -10
              }
            ]
          },  
        
            {
              "featureType": "road",
              "stylers": [
                {
                  "saturation": -70
                },
                {
                  "lightness": 5
                }
              ]
            },
            
          {
            "featureType": "water",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "saturation": 5
              },
              {
                "lightness": -15
              }
            ]
          }  
];

    /*Copy and paste the JSON into your app or website code.*/
    public static styledMapType_Day100 : MapTypeStyle [] = 
        [
          {
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#1d2c4d"   
              }
            ]
          },
          {
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#8ec3b9"
              }
            ]
          },
          {
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#1a3646"
              }
            ]
          },
          {
            "featureType": "administrative.country",
            "elementType": "geometry.stroke",
            "stylers": [
              {
                "color": "#4b6878"
              }
            ]
          },
          {
            "featureType": "administrative.land_parcel",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#64779e"     
              }
            ]
          },
          {
            "featureType": "administrative.province",
            "elementType": "geometry.stroke",
            "stylers": [
              {
                "color": "#4b6878"   
              }
            ]
          }, 
          {
            "featureType": "landscape.man_made",
            "elementType": "geometry.stroke",
            "stylers": [
              {
                "color": "#334e87"   
              }
            ]
          },
          {
            "featureType": "landscape.natural",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#03587d"  /*      #023e58  */ 
              }
            ]
          },
          /*{
            "featureType": "landscape.natural.landcover",
            "stylers": [
              {
                "color": "#eb508a"
              }
            ]
          },
          {
            "featureType": "landscape.natural.landcover",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#47476b"  
              },
              {
                "weight": 1.5
              }
            ]
          },
          {
            "featureType": "landscape.natural.landcover",
            "elementType": "geometry.stroke",
            "stylers": [
              {
                "color": "#eb508a"
              },
              {
                "visibility": "simplified"
              }
            ]
          },*/
          {
            "featureType": "landscape.natural.terrain",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#314e33"  /* #87b489 */
              }
            ]
          },
          {
            "featureType": "landscape.natural.terrain",
            "elementType": "geometry.stroke",
            "stylers": [
              {
                "color": "#9687b4"  
              },
              {
                "visibility": "on"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#283d6a"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#6f9ba5"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#1d2c4d"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#023e58"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#3C7680"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
              {
                "color": " #304a7d"  
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#98a5be"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#1d2c4d"  
              }
            ]
          },
          {
            "featureType": "road.arterial",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#2c6675"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [
              {
                "color": "#255763"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "labels",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#b0d5ce"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#023e58"
              }
            ]
          },
          /*{
            "featureType": "road.local",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },*/
          {
            "featureType": "transit",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#98a5be"
              }
            ]
          },
          {
            "featureType": "transit",
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#1d2c4d"
              }
            ]
          },
          {
            "featureType": "transit.line",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#283d6a"
              }
            ]
          },
          {
            "featureType": "transit.station",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#3a4762"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#0e1626"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#59e1db"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#4e6d70"
              }
            ]
          }
        ];


    
}//END.   