

import React from 'react';
import './app.css';
import L from 'leaflet';

class Map extends React.Component {

    createMap(element){
        let map = L.map(element);
        L.tilelayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
     }).addTo(map);
    
        return (map)
    }
    setupMap(){
        this.map.setView([this.props.lat, this.props.lon], this.props.zoom);
    
    }
    render(){
        return (<div className="map"> {this.props.map} </div>);
    }
}

React.render(<Map lat="60.0" lon="10.0" zoom="10"/>, document.body)




export default class SimpleExample extends React.Component {
  constructor() {
    super();
    this.state = {
      lat: 51.505,
      lng: -0.09,
      zoom: 13
    };
  }

  render() {
    const position = [this.state.lat, this.state.lng];
    return <Map center={position} zoom={this.state.zoom}>
      <TileLayer
        url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          <span>A pretty CSS3 popup. <br/> Easily customizable.</span>
        </Popup>
      </Marker>
    </Map>;
  }
}

React.render(<SimpleExample />, document.body)



        return (<div className="map"> </div>);
    }

var Map = React.createClass({
     createMap: function (element) { 
    var map = L.map(element);
     L.tileLayer('http://tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
         }).addTo(map);
     L.Icon.Default.imagePath = 'http://api.tiles.mapbox.com/mapbox.js/v1.0.0beta0.0/images';
      return map;
    },

 
  
   add_marker: function() {

    var points = [
    //KVV
        ["P1", 52.365070,  4.891827, '<iframe width="420" height="315" src="https://www.youtube.com/embed/yd-t7OkBF3g" frameborder="0" allowfullscreen></iframe>'],
        ["P2", 43.058618, -89.442032, "http://www.url_address_02.com/"],
        ["P3", 43.058618, -86.441726, "http://www.url_address_03.com/"]
    ];
    var marker = [];
    var i;
    for (i = 0; i < points.length; i++) {
        marker[i] = new L.Marker([points[i][1], points[i][2]], {
            popup: points[i][3]
        });
        marker[i].bindPopup.openPopup()
        marker[i].addTo(map);
        marker[i].on('click', onClick);
    };
},
   setupMap: function () {
        this.map.setView([this.props.lat, this.props.lon], this.props.zoom);
    },
    componentDidMount: function () {

        if (this.props.createMap) {
            this.map = this.props.createMap(this.getDOMNode());
        } else {
            this.map = this.createMap(this.getDOMNode());
        }

        this.setupMap();
    },
 
    render: function() {
});

(<Map lat="52.3710" lon="4.900" zoom="14" />, document.body);


var CustomIcon = L.Icon.extend({
        options: {
            iconSize: [38,55]
        }
     });
    var redIcon = new CustomIcon({ iconUrl: '../project-images/marker-icon-red.png' }),
    greenIcon = new CustomIcon({ iconUrl: 'Images/green-marker.png' });

    L.icon = function (options) {
    return new L.Icon(options);
    };