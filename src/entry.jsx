
import React from 'react';
import './app.css';
import L from 'leaflet';

var Map = React.createClass({

    createMap: function (element) {
      var map = L.map(element);
     L.tileLayer('http://tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
         }).addTo(map);
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

React.render(<Map lat="60.0" lon="10.0" zoom="10" />, document.body);