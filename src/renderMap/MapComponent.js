import {useMemo} from "react";
import renderMap from "./useRenderMap";


//todo: change markerF to marker for deployment
function MapComponent() {

    const droneSVGLocations = [
        {id:1,lat:51.31,lng:9.48},
        {id:2,lat:51.00,lng:9.22}
    ];

    const center = useMemo(() => ({lat: 51.31, lng: 9.48}), []);

    return renderMap(center,droneSVGLocations);
}

export default MapComponent;