
import React from 'react';
import './app.css';
import L from 'leaflet';
import RL from "react-leaflet";

var Map = React.createClass({

    createMap: function (element) {
      var map = L.map(element);
     L.tileLayer('http://tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
         }).addTo(map);
     L.Icon.Default.imagePath = 'http://api.tiles.mapbox.com/mapbox.js/v1.0.0beta0.0/images';
     var marker = L.marker([52.365070, 4.891827])
      .bindPopup('<iframe width="420" height="315" src="https://www.youtube.com/embed/yd-t7OkBF3g" frameborder="0" allowfullscreen></iframe>').openPopup()
      .addTo(map);
    return map;
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
        return (<div className="map"> </div>);
    }

});


React.render(<Map lat="52.3710" lon="4.900" zoom="14" />, document.body);