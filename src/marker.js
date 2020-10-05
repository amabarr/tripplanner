import mapboxgl from "mapbox-gl";

const iconURLs = {
    hotels: "http://i.imgur.com/D9574Cu.png",
    restaurants: "http://i.imgur.com/cqR6pUI.png",
    activities: "http://i.imgur.com/WbMOfMl.png"
}

const buildMaker = function(type, coordinates){
    const markerDomEl2 = document.createElement("div");
    markerDomEl2.style.width = "32px";
    markerDomEl2.style.height = "39px";

    let picture;
    if (type === 'activity'){
        picture = iconURLs.activities;
    } else if (type === 'hotel'){
        picture = iconURLs.hotels;
    } else if (type === 'restaurant'){
        picture = iconURLs.restaurants;
    }

    markerDomEl2.style.backgroundImage = `url(${picture})`
    return new mapboxgl.Marker(markerDomEl2).setLngLat(coordinates);
}

export default buildMaker;
