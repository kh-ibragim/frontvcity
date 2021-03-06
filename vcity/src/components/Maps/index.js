import React, { Component } from 'react';
import L  from 'leaflet';
// postCSS import of Leaflet's CSS
import 'leaflet/dist/leaflet.css';

import {geolocated} from 'react-geolocated';

// store the map configuration properties in an object,
// we could also move this to a separate file & import it if desired.
const position = [44.9605229,34.0897997];
var greenIcon = L.icon({
    iconUrl: '../images/marker.png',


    iconAnchor:   [50, 75], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -50] // point from which the popup should open relative to the iconAnchor
});

let config = {};
config.params = {
  center: [44.9605229,34.0897997 ],
  zoomControl: false,
  zoom: 11,
  maxZoom: 18,
  minZoom: 11,
  scrollwheel: false,
  legends: true,
  infoControl: false,
  attributionControl: true
};
config.tileLayer = {
  uri: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
  params: {
    minZoom: 11,
    maxZoom : 18,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    id: '',
    accessToken: ''
  }
};

class Maps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      map: null
    };
    this._mapNode = null;
  }

  componentDidMount() {
    // create the Leaflet map object
    if (!this.state.map) this.init(this._mapNode);
  }

  getpostion(){

  }

  init(id) {
    if (this.state.map) return;
    // this function creates the Leaflet map object and is called after the Map component mounts
    let map = L.map(id, config.params , {
      render: L.svg()
    });
    L.control.zoom({ position: "bottomleft"}).addTo(map);
    L.control.scale({ position: "bottomleft"}).addTo(map);

    // a TileLayer is used as the "basemap"
    const tileLayer = L.tileLayer(config.tileLayer.uri, config.tileLayer.params).addTo(map);
L.marker(position, {icon: greenIcon}).addTo(map).bindPopup("Party");
  }
 

  render() {
    return (
      <div id="mapUI">
          <div ref={(node) => this._mapNode = node} id="map" className="mapst" >
              </div>
      </div>
    );
  }
}

export default Maps;
