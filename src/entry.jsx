import React from 'react';
import './app.css';
import leaflet from "leaflet";

var Map = React.createClass({

    createMap: function (element) {
      var map = L.map(element);
	 L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
       attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
     }).addTo(map);
        return map;
    },

    setupMap: function () {
        this.map.setView([this.props.lat, this.props.lon], this.props.zoom);        	
    },
   
    render: function() {
        return (<div className="map"></div>);
    }

});

React.render (<Map lat="60.0" lon="10.0" zoom="10"/>, document.body)