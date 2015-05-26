
import React from 'react';
import '../styles/mapstyles.css';
import L from 'leaflet';
import RL from "react-leaflet";
import imgSrc from '../project-images/dovenshoah.jpg';
import femHist from '../project-images/female-2_1.png';
import femHistChoice from '../project-images/female-2_2.png';
import disHist from '../project-images/disability.png';
import disHistChoice from '../project-images/disability_2.png';
import femGayHist from '../project-images/gay-female_2.png';
import femGayHistChoice from '../project-images/gay-female_1.png';
import warHist from '../project-images/war_1.png';
import warHistChoice from '../project-images/war_2.png';




var Map = React.createClass({
   createMap: function (element) {
    var map = L.map(element);
     L.tileLayer('http://tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
         }).addTo(map);


    var markers = [
    		//KVV
            [ 4.891827, 52.365070, '<iframe width="420" height="315" src="https://www.youtube.com/embed/yd-t7OkBF3g" frameborder="0" allowfullscreen></iframe> <button className="selected"> Select </button>', femHist, femHistChoice  ],
            //1st vrouwelijke politieagenten
            [ 4.89356, 52.373228, '<iframe width="420" height="315" src="https://www.youtube.com/embed/eSqB_Zln9Fo" frameborder="0" allowfullscreen></iframe>', femHist, femHistChoice ],
            //Major Bosshardt
            [ 4.899873, 52.375477, 'This building, for a long time, was the workspace of<br><a href="http://en.wikipedia.org/wiki/Alida_Bosshardt" target="_blank">Major Bosshardt</a>', femHist, femHistChoice ],
            //Aletta Jacobs practice
            [ 4.897627, 52.374635, 'The former practice of dr. Aletta Jacobs <iframe width="560" height="315" src="https://www.youtube.com/embed/ivCxBCzj1J8" frameborder="0" allowfullscreen></iframe>', femHist, femHistChoice  ],
            //Widow Johanna Borski
            [ 4.895486, 52.374200, 'Johanna Borski was one of the richest people in her day (1764-1864), and one of the few female bankers. She was co-owner of the Dutch National Bank and saved another, laying the basis for what is now ABN-AMRO, one of the 15 largest banks in the world <br><a href="http://en.wikipedia.org/wiki/Johanna_Borski" target="_blank">wikipedia</a>', femHist, femHistChoice ],
            //Marretje Arents
            [ 4.900137, 52.373058, 'Marretje Arents was a rebellion leader, leading the pacher riots in 1748. After the rebellion she was sentenced to death by hanging and hung from the window of the Waag.<br><a href="http://en.wikipedia.org/wiki/Marretje_Arents" target="_blank">wikipedia</a>', femHist, femHistChoice ],
            //Haesje Claes
            [ 4.895986, 52.369303, 'The Oudemanhuispoort; the gate to the Old Mens House, founded by Haesje Claes, a woman who also founded the Old Womens House and was involved in the founding of the Burgerweeshuis (a city orphanage).<br><a href="http://resources.huygens.knaw.nl/vrouwenlexicon/lemmata/data/claes" target="_blank">Time to learn some Dutch</a>', femHist, femHistChoice ],
            //Johanna Reynvaan
            [ 4.894633, 52.368562, 'The Binnengasthuis, the first workplace of Johanna Reynvaan, who was at the basis of Dutch nursing, and later assistant-director of the Buitengasthuis on the Overtoom.<br><a href="http://books.google.nl/books?id=fk7K4WQVllYC&pg=PA92&lpg=PA92&dq=johanna+reynvaan&source=bl&ots=30b7SE3TPW&sig=kK0Se7lL1rldS-JMcFOwmJkqTuQ&hl=en&sa=X&ei=8AJXVayUOYmOsAHRnIC4BQ&ved=0CGYQ6AEwDw#v=onepage&q=johanna%20reynvaan&f=false" target="_blank">Nursing History Review</a>', femHist, femHistChoice ],
            //The Shakespeare Club
            [ 4.885188, 52.365276, 'Former Café De La Paix, where in September 1946 150 people gathered for the founding of the Shakespeare Club. It was the largest gathering of gay people in the country until then. The Shakespeare Club is now known as the C.O.C., the oldest surviving LGBT organisation.<br><a href="http://nl.wikipedia.org/wiki/Nederlandse_Vereniging_tot_Integratie_van_Homoseksualiteit_COC" target="_blank">Dutch wikipedia</a>', femGayHist, femGayHistChoice ],
            // April 1st 2001
            [ 4.902281, 52.368078, 'On  April 1st 2001, four couples were wed by mayor Job Cohen. Anne-Marie Thus and Hélène Faasen become the first two women in the world to legally marry.<br><a href="www.news.com.au/world/worlds-first-legally-wed-lesbian-couple-celebrates-their-10th-wedding-anniversary/story-e6frfkyi-1226030866529" target="_blank">Interview</a>', femGayHist, femGayHistChoice ],
			//Monument Deaf Jews
			[ 4.906952, 52.366255, 'The world remained deaf. The first monument for deaf victims of the Second World War.<br><img src=" '+ imgSrc+'">', disHist, disHistChoice ],
			//Education for the Blind.
            [ 4.819959, 52.378813, 'In 1808 the Institute for the Education of the Blind is founded in Amsterdam, the first school for the blind.', disHist, disHistChoice ],
            //River Kwai
            [ 99.532811, 14.022780, 'Well done! You looked beyond the frame you were given. This is the River Kwai, famous for its railway bridge built by Japan in WWII. But did you know that Thailand was never occupied? And that it was the only country in South East Asia to not be colonised?<br><a href="www.stickmanbangkok.com/ReadersSubmissions2014/reader8591.htm" target="_blank">Why Thailand Was Never Colonized</a>', warHist, warHistChoice ]

         ];

         //Loop through the markers array
         for (var i=0; i<markers.length; i++) {
         	var opacity = 1
         	var selected = false
            var lon = markers[i][0];
            var lat = markers[i][1];
            var popupText = markers[i][2];
            var initIcon = L.Icon.extend({options: {iconUrl: markers[i][3], popupAnchor:  [5, 7], selected: selected, opacity: opacity} });
            var id = [i]
            var markerLocation = new L.LatLng(lat, lon);
            var marker = new L.marker(markerLocation, {icon: new initIcon});
             map.addLayer(marker);

             marker.bindPopup(popupText);


           var button = document.getElementsByClassName(".selected");

            marker.on('click', function(markerData, e){
            var choiceIcon = L.Icon.extend({options: {iconUrl: markerData[4], popupAnchor:  [5, 7], selected: true} }); 
            e.target.setIcon( new choiceIcon)}.bind(this, markers[i])

            );
      
  		 }
    return map
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

pageLoad: function(){
	var overlay = document.getElementById('hugeAnnoyingAdvertisement');
 	overlay.style.display = 'block';
	
},
 render: function() {
        return (<div className="map"> </div>);
    }

});


React.render(<Map lat="52.3710" lon="4.900" zoom="14" />, document.body);
