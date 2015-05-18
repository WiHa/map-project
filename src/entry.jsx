
import React from 'react';
import './mapstyles.css';
import L from 'leaflet';
import RL from "react-leaflet";

var Map = React.createClass({
  createMap: function (element) {
    var map = L.map(element);
     L.tileLayer('http://tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
         }).addTo(map);
    L.Icon.Default.imagePath = 'http://api.tiles.mapbox.com/mapbox.js/v1.0.0beta0.0/images';


    var markers = [
    		//KVV
            [ 4.891827, 52.365070, '<iframe width="420" height="315" src="https://www.youtube.com/embed/yd-t7OkBF3g" frameborder="0" allowfullscreen></iframe>' ],
            //1st vrouwelijke politieagenten
            [ 4.89356, 52.373228, '<iframe width="420" height="315" src="https://www.youtube.com/embed/eSqB_Zln9Fo" frameborder="0" allowfullscreen></iframe>' ],
            //Major Bosshardt
            [ 4.899873, 52.375477, 'This building, for a long time, was the workspace of<br><a href="http://en.wikipedia.org/wiki/Alida_Bosshardt" target="_blank">Major Bosshardt</a>' ],
            //Aletta Jacobs practice
            [ 4.897627, 52.374635, 'The former practice of dr. Aletta Jacobs <iframe width="560" height="315" src="https://www.youtube.com/embed/ivCxBCzj1J8" frameborder="0" allowfullscreen></iframe>' ],
            //Widow Johanna Borski
            [ 4.895486, 52.374200, 'Johanna Borski was one of the richest people in her day (1764-1864), and one of the few female bankers. She was co-owner of the Dutch National Bank and saved another, laying the basis for what is now ABN-AMRO, one of the 15 largest banks in the world <br><a href="http://en.wikipedia.org/wiki/Johanna_Borski" target="_blank">wikipedia</a>' ],
            //Marretje Arents
            [ 4.900137, 52.373058, 'Marretje Arents was a rebellion leader, leading the pacher riots in 1748. After the rebellion she was sentenced to death by hanging and hung from the window of the Waag.<br><a href="http://en.wikipedia.org/wiki/Marretje_Arents" target="_blank">wikipedia</a>' ],
            //Haesje Claes
            [ 4.895986, 52.369303, 'The Oudemanhuispoort; the gate to the Old Mens House, founded by Haesje Claes, a woman who also founded the Old Womens House and was involved in the founding of the Burgerweeshuis (a city orphanage).<br><a href="http://resources.huygens.knaw.nl/vrouwenlexicon/lemmata/data/claes" target="_blank">Time to learn some Dutch</a>' ],
            //Johanna Reynvaan
            [ 4.894633, 52.368562, 'The Binnengasthuis, the first workplace of Johanna Reynvaan, who was at the basis of Dutch nursing, and later assistant-director of the Buitengasthuis on the Overtoom.<br><a href="http://books.google.nl/books?id=fk7K4WQVllYC&pg=PA92&lpg=PA92&dq=johanna+reynvaan&source=bl&ots=30b7SE3TPW&sig=kK0Se7lL1rldS-JMcFOwmJkqTuQ&hl=en&sa=X&ei=8AJXVayUOYmOsAHRnIC4BQ&ved=0CGYQ6AEwDw#v=onepage&q=johanna%20reynvaan&f=false" target="_blank">Nursing History Review</a>' ],
            //The Shakespeare Club
            [ 4.885188, 52.365276, 'Former Café De La Paix, where in September 1946 150 people gathered for the founding of the Shakespeare Club. It was the largest gathering of gay people in the country until then. The Shakespeare Club is now known as the C.O.C., the oldest surviving LGBT organisation.<br><a href="http://nl.wikipedia.org/wiki/Nederlandse_Vereniging_tot_Integratie_van_Homoseksualiteit_COC" target="_blank">Dutch wikipedia</a>' ],
            // April 1st 2001
            [ 4.902281, 52.368078, 'On  April 1st 2001, four couples were wed by mayor Job Cohen. Anne-Marie Thus and Hélène Faasen become the first two women in the world to legally marry.<br><a href="www.news.com.au/world/worlds-first-legally-wed-lesbian-couple-celebrates-their-10th-wedding-anniversary/story-e6frfkyi-1226030866529" target="_blank">Interview</a>' ],
			//Monument Deaf Jews
			[ 4.902281, 52.368078, 'The world remained deaf. The first monument for deaf victims of the Second World War.<br><img src="../project-images/dovenshoah.jpg"></img>' ],
			//Education for the Blind.
            [ 4.819959, 52.378813, 'In 1808 the Institute for the Education of the Blind is founded in Amsterdam, the first school for the blind.' ],
            //River Kwai
            [ 99.532811, 14.022780, 'Well done! You looked beyond the frame you were given. This is the River Kwai, famous for its railway bridge built by Japan in WWII. But did you know that Thailand was never occupied? And that it was the only country in South East Asia to not be colonised?<br><a href="www.stickmanbangkok.com/ReadersSubmissions2014/reader8591.htm" target="_blank">Why Thailand Was Never Colonized</a>' ]
          
         ];

         //Loop through the markers array
         for (var i=0; i<markers.length; i++) {

            var lon = markers[i][0];
            var lat = markers[i][1];
            var popupText = markers[i][2];
            var id = [i]
            var markerLocation = new L.LatLng(lat, lon);
            var marker = new L.Marker(markerLocation);
             map.addLayer(marker);

             marker.bindPopup(popupText);

        var clickedIcon = L.Icon.extend({ options: { iconUrl: '../project-images/marker-icon-red.png'} });	
            marker.on('click', function(e){
               marker.setIcon(new clickedIcon)   
            });
           
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

 render: function() {
        return (<div className="map"> </div>);
    }

});


React.render(<Map lat="52.3710" lon="4.900" zoom="14" />, document.body);
