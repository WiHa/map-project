
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
import domHist from '../project-images/smiley_happy_1.png';
import domHistChoice from '../project-images/smiley_happy_2.png';
import slaveHist from '../project-images/torture_1.png';
import slaveHistChoice from '../project-images/torture_2.png';
import lords from '../project-images/heren-zeventien-xvii.jpg';
import tulp from '../project-images/tulp.jpg';




var Map = React.createClass({
   createMap: function (element) {
    var map = L.map(element);
     L.tileLayer('http://tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
         }).addTo(map);


    var markers = [
    		//Alan Turing Pardon
    		[ -0.124809, 51.499480, 'On December 24th 2013 Alan Turing was pardoned for his conviction for gross indecency for which he was chemically castrated. His pardon comes a mere 59 years after his death, and only for him. Not for the other 49.000 men who have been convicted for homosexual relations.<br><a href="https://www.change.org/p/british-government-pardon-all-of-the-estimated-49-000-men-who-like-alan-turing-were-convicted-of-consenting-same-sex-relations-under-the-british-gross-indecency-law-only-repealed-in-2003-and-also-all-the-other-men-convicted-under-other-uk-anti-gay" target="_blank">People are striving to get that done </a><button class="button"> Choose </button> ', femGayHist, femGayHistChoice],
    		// Rembrandt House
    		[4.901235, 52.369369, ' The Rembrandt House<br><iframe width="560" height="315" src="https://www.youtube.com/embed/tVBsi5LFQwc" frameborder="0" allowfullscreen></iframe><button class="button"> Choose </button>', domHist, domHistChoice],
    		//Gay Monument Amsterdam
    		[ 4.884913, 52.374420, 'The idea of a permanent memorial to gay and lesbian victims of persecution dated from 1970, when gay activists were arrested for attempting to place a wreath at the National War Memorial on Dam Square in the centre, as is done to commemorate victims of WWII on Mey 4th of every year. The wreath was removed by police and denounced as a disgrace. After that, a campaign was started that resulted in the worlds first monument in public space, that is a memorial to the persecution of homosexuals. <br><a href="http://en.wikipedia.org/wiki/Homomonument" target="_blank"> Wikipedia </a><button class="button"> Choose </button>', femGayHist, femGayHistChoice],
    		// Plaquette aanslag bevolkingsregister
    		[ 4.911924, 52.366478, 'On March 27, 1943 members of a resistance group, dressed as police officers, entered the civil register office and set fire to the building. Twelve people involved in the group known as the Artists Reistance were executed non July 1st. What is less known is that most members of this group were gay, such as one of the leaders of the group Willem Arondéus. <button class="button"> Choose </button>', femGayHist, femGayHistChoice ],
    		// Anne Frank House
    		[ 4.883989, 52.375184, 'This is the Anne Frank House. Now a museum, but former hiding place of 8 people, amongst who a young girl named Anne Frank, who had little else to do but write in her diary about her life as a Jewish girl in hiding in WWII.<br><a href="http://www.annefrank.org/en/Anne-Frank/Not-outside-for-2-years/">The museums website</a><button id="open-overlay"> Choose </button>', domHist, domHistChoice ],
    		//KVV
        [ 4.891827, 52.365070, '<iframe width="420" height="315" src="https://www.youtube.com/embed/yd-t7OkBF3g" frameborder="0" allowfullscreen></iframe> <button class="button"> Choose </button>', femHist, femHistChoice  ],
        //1st vrouwelijke politieagenten
        [ 4.89356, 52.373228, '<iframe width="420" height="315" src="https://www.youtube.com/embed/eSqB_Zln9Fo" frameborder="0" allowfullscreen></iframe><button class="button"> Choose </button>', femHist, femHistChoice ],
        //Major Bosshardt
        [ 4.899873, 52.375477, 'This building, for a long time, was the workspace of<br><a href="http://en.wikipedia.org/wiki/Alida_Bosshardt" target="_blank">Major Bosshardt</a><button class="button"> Choose </button>', femHist, femHistChoice ],
        //Aletta Jacobs practice
        [ 4.897627, 52.374635, 'The former practice of dr. Aletta Jacobs <iframe width="560" height="315" src="https://www.youtube.com/embed/ivCxBCzj1J8" frameborder="0" allowfullscreen></iframe><button class="button"> Choose </button>', femHist, femHistChoice  ],
        //Widow Johanna Borski
        [ 4.895486, 52.374200, 'Johanna Borski was one of the richest people in her day (1764-1864), and one of the few female bankers. She was co-owner of the Dutch National Bank and saved another, laying the basis for what is now ABN-AMRO, one of the 15 largest banks in the world <br><a href="http://en.wikipedia.org/wiki/Johanna_Borski" target="_blank">wikipedia</a><button class="button"> Choose </button>', femHist, femHistChoice ],
        //Marretje Arents
        [ 4.900137, 52.373058, 'Marretje Arents was a rebellion leader, leading the pacher riots in 1748. After the rebellion she was sentenced to death by hanging and hung from the window of the Waag.<br><a href="http://en.wikipedia.org/wiki/Marretje_Arents" target="_blank">wikipedia</a><button id="open-overlay"> Choose </button>', femHist, femHistChoice ],
        //Haesje Claes
        [ 4.895986, 52.369303, 'The Oudemanhuispoort; the gate to the Old Mens House, founded by Haesje Claes, a woman who also founded the Old Womens House and was involved in the founding of the Burgerweeshuis (a city orphanage).<br><a href="http://resources.huygens.knaw.nl/vrouwenlexicon/lemmata/data/claes" target="_blank">Time to learn some Dutch</a><button class="button"> Choose </button>', femHist, femHistChoice ],
        //Johanna Reynvaan
        [ 4.894633, 52.368562, 'The Binnengasthuis, the first workplace of Johanna Reynvaan, who was at the basis of Dutch nursing, and later assistant-director of the Buitengasthuis on the Overtoom.<br><a href="http://books.google.nl/books?id=fk7K4WQVllYC&pg=PA92&lpg=PA92&dq=johanna+reynvaan&source=bl&ots=30b7SE3TPW&sig=kK0Se7lL1rldS-JMcFOwmJkqTuQ&hl=en&sa=X&ei=8AJXVayUOYmOsAHRnIC4BQ&ved=0CGYQ6AEwDw#v=onepage&q=johanna%20reynvaan&f=false" target="_blank">Nursing History Review</a><button class="button"> Choose </button>', femHist, femHistChoice ],
        //The Shakespeare Club
        [ 4.885188, 52.365276, 'Former Café De La Paix, where in September 1946 150 people gathered for the founding of the Shakespeare Club. It was the largest gathering of gay people in the country until then. The Shakespeare Club is now known as the C.O.C., the oldest surviving LGBT organisation.<br><a href="http://nl.wikipedia.org/wiki/Nederlandse_Vereniging_tot_Integratie_van_Homoseksualiteit_COC" target="_blank">Dutch wikipedia</a><button class="button"> Choose </button>', femGayHist, femGayHistChoice ],
        // April 1st 2001
        [ 4.902281, 52.368078, 'On  April 1st 2001, four couples were wed by mayor Job Cohen. Anne-Marie Thus and Hélène Faasen become the first two women in the world to legally marry.<br><a href="www.news.com.au/world/worlds-first-legally-wed-lesbian-couple-celebrates-their-10th-wedding-anniversary/story-e6frfkyi-1226030866529" target="_blank">Interview</a><button class="button"> Choose </button>', femGayHist, femGayHistChoice ],
	      //Monument Deaf Jews
	      [ 4.906952, 52.366255, 'The world remained deaf. The first monument for deaf victims of the Second World War.<br><img src=" '+ imgSrc+'"><button class="button"> Choose </button>', disHist, disHistChoice ],
	      //Education for the Blind.
        [ 4.819959, 52.378813, 'In 1808 the Institute for the Education of the Blind is founded in Amsterdam, the first school for the blind.<button class="button"> Choose </button>', disHist, disHistChoice ],
        //River Kwai
        [ 99.532811, 14.022780, 'Well done! You looked beyond the frame you were given. This is the River Kwai, famous for its railway bridge built by Japan in WWII. But did you know that Thailand was never occupied? And that it was the only country in South East Asia to not be colonised?<br><a href="www.stickmanbangkok.com/ReadersSubmissions2014/reader8591.htm" target="_blank">Why Thailand Was Never Colonized</a><button class="button"> Choose </button>', warHist, warHistChoice ],
        // Slave Compensation
        [ 4.89456, 52.361602, 'Joan Muijsken first lived on the Singel 274, later on this address, Prinsengracht 712. With the abolishment of slavery he was one of the people to receive 300 guilders compensation per slave, owning as many as 128 slaves at that time.<br> <a href="https://www.google.com/maps/d/viewer?mid=z_50lGRHy2eM.kOvGbMjogrkc&msa=0&hl=nl&ie=UTF8&t=m&ll=52.372874,4.894152&spn=0.043441,0.077162&source=embed" target="_blank">A full map of the slave owners in Amsterdam that recieved compensation</a><button class="button"> Choose </button>', slaveHist, slaveHistChoice],
        //Deportation of handicapped
        [4.90974, 52.367695, 'On February 3 1943 the A.C. Wertheimhuis, a care home, was cleared. How many people were taken, and what happened to them remains unclear. What we do know is that between 1939 and 1945 hundreds of thousands of children and adults with disabilities were systematically killed by the nazi-regime, as part of a so called "euthanasia-programme".<button class="button"> Choose </button>', disHist, disHistChoice],
        //Golden Bend
        [4.889367, 52.366376, 'Since 2010 the Amsterdam Canals have been placed on the Unesco World Heritage list. Part of it is this, the Golden Bend, in the Golden Age (and perhaps still) the most prestigious part of the canals. The rich people that lived there made most money by owning plants in Suriname. In 1814 trade in slaves is abolished, but it takes until July 1st 1863 until slavery is abolished entirely, because economic impact of abolishment is too great for those in power. And then slaves are forced to work until 1873 due to discussions about the height of compensation.<button class="button"> Choose </button>', slaveHist, slaveHistChoice ],
        //Slave plays
        [4.881924, 52.363670, 'At the end of the 18th century many books were published against slavery. Plays with the same topic were staged in the Stadsschouwburg. "Monzongo" or "The Royal Slave" was one of them, but an adaptation of this play was quickly forbidden in 1810. Voices against slavery would only rise again in the 1840s.<button class="button"> Choose </button>', slaveHist, slaveHistChoice],
        //Mayor's residence
        [4.893444, 52.364861, "Now the official residence of the mayor of Amsterdam, formerly the house of Paulus Godin(1618-1690), very active in slavery and one of the richest people in the city in his day. Mayor Job Cohen (mayor from 2001-2010) had a plaquette attached to the building reminding of the relationship this building has with slavery.<button class='button'> Choose </button>", slaveHist, slaveHistChoice],
        //Royal Palace
        [4.891368, 52.373186, "Known as the Royal Palace of Amsterdam, this house is actually the former city's Town Hall that became a palace after Louis Napoleon became king of the country.<br> <a href='http://www.paleisamsterdam.nl/en/the-palace/history/napoleonic-palace/city-hall-becomes-napoleonic-palace'>Official Website</a><button class='button'> Choose </button>", domHist, domHistChoice ],
        //Royal Palace
        [4.891368, 52.373186, "The Town Hall, as it was before Louis Napoleon. The place where Amsterdam business was conducted in the Golden Age. The place where the West-Indian Company was founded, that had the exclusive rights to trade people in the Atlantic area. Most people in the WIC were also politically active as mayors, council members etc. The WIC, in the first 100 years of its existence, had already shipped a quarter of a million Africans across the ocean under force.<button class='button'> Choose </button>", slaveHist, slaveHistChoice],
   		  //Lords XVII
   		  [4.897986, 52.371108, 'The Lords Seventeen was the name of the central board of the East India Company.<br> <img src=" '+ lords+'"> <a href="http://european-heritage.org/netherlands/alkmaar/dutch-east-india-company"> More info</a><button class="button"> Choose </button>' , domHist, domHistChoice ],
     		//Heineken
     		[4.891491, 52.357941, 'The original brewery, bought by Gerard Adriaan Heineken on February 15th, 1864. Since then, it developed to become a famous, prize winning beer brewery, sold in over 170 countries. <a href="http://en.wikipedia.org/wiki/Heineken"> Wikipedia </a><button class="button"> Choose </button>', domHist, domHistChoice ],
     		//Marie Heineken
     		[4.891457, 52.357305, 'The Heineken plein, actually the Marie Heineken plein, and not named after the brewery, but after a niece of Gerard Adriaan Heineken. Yet the choice of her name was mostly due to the area being named after painters, and the city wanting to name that square to the brewery of Marie\'s uncle.<button class="button"> Choose </button>', femHist, femHistChoice],
     		//Nicolaes Tulp
     		[4.884696, 52.373545, 'Nicolaes Tulp was a surgeon and from 1654 he was mayor of Amsterdam four times. His house can be recognised by the signboard above the door. Painted by Rembrandt in one of his most famous paintings: <img src=" '+tulp+' "> <a href="http://en.wikipedia.org/wiki/Nicolaes_Tulp">Wiki</a><button class="button"> Choose </button>', domHist, domHistChoice],
     		//André Hazes
     		[4.893199, 52.355512, 'In 2005 a statue was raised on the corner of the Albert Cuypstraat for folk singer André Hazes, who died a year before. He was discovered in a pub, by comedian and singer Johnny Kraaijkamp Sr., who saw 8-year old André singing on Liberation Day.<button class="button"> Choose </button>', domHist, domHistChoice],
     		//Olympics
     		[4.85413, 52.343420, 'In 1928 the Summer Olympics were held in Amsterdam. For a lot of data and participating countries, see <a href="http://en.wikipedia.org/wiki/1928_Summer_Olympics"> Wikipedia</a><button class="button"> Choose </button>', domHist, domHistChoice],
     		//Deaf olympics
     		[4.85413, 52.343420, 'In 1928, for the second time in the history of the world, the Deaflympics were held. Since deaf athletes need other signs than gunshots, the deaflympics had started four years earlier in Paris. They still go on today and are generally seen as a very early precursor of the paralympics, that had its first edition as late as 1960.<button class="button"> Choose </button>', disHist, disHistChoice],
     		//Café 't Mandje
     		[4.90096, 52.374840, 'The famous Café \'t Mandje, run by Bet van Buuren since 1927, an openly gay woman. She was the first pub owner that allowed openly gay people in her bar (she did not allow kissing of same sex couples on every day of the week. They got to dance with each other only on Queensday.). \'T Mandje became the most famous place for gays in the city, and remained such until the Zeedijk was runover by whores and heroin users. It closed its doors in 1982, but was reopened in 2008.<button class="button"> Choose </button>', femGayHist, femGayHistChoice ]
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


 render: function() {
        return (<div className="map"> </div>);
    }

});


React.render(<Map lat="52.3710" lon="4.900" zoom="14" />, document.body);
