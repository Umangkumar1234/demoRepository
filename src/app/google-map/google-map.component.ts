import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})
export class GoogleMapComponent implements OnInit {
  map: google.maps.Map | undefined ;
  ngOnInit(): void {
    this.createMarker();
  }

  display: any;
    center: google.maps.LatLngLiteral = {
        lat: 24,
        lng: 12
    };
    zoom = 4;
    moveMap(event: google.maps.MapMouseEvent) {
        if (event.latLng != null) this.center = (event.latLng.toJSON());
    }
    move(event: google.maps.MapMouseEvent) {
        if (event.latLng != null) this.display = event.latLng.toJSON();
    }

    createMarker(){
     debugger
     const marker = new google.maps.Marker({position: new google.maps.LatLng(40.73061, 73.935242),
     map: this.map,
     title: "Marker 1"
    })

    //marker.setMap(this.map);
  }
}
