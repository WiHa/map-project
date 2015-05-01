

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