console.log('Hello!');

import mapboxgl from "mapbox-gl";
import buildMaker from "./marker";

mapboxgl.accessToken = "pk.eyJ1IjoiYW1hYmFyciIsImEiOiJja2Z3cTZ2c2YxNXQ3MnpwOW9uc3d0NzNiIn0.j2H5hjG7owFuY6KQqxBaHw";

const map = new mapboxgl.Map({
    container: "map",
    center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
    zoom: 12, // starting zoom
    style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

// const markerDomEl = document.createElement("div");
// markerDomEl.style.width = "32px";
// markerDomEl.style.height = "39px";
// markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
// new mapboxgl.Marker(markerDomEl).setLngLat([-74.009151, 40.705086]).addTo(map);

const marker = buildMaker("activity", [-74.009151, 40.705086]); // or [-87.6354, 41.8885]
marker.addTo(map);