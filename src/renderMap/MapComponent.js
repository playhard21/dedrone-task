import {useMemo, useEffect} from "react";
import renderMap from "./useRenderMap";
import {useFetchPositions} from "./useFetchPositions";


//todo: change markerF to marker for deployment
function MapComponent() {
    //center
    const center = useMemo(() => ({lat: 51.31, lng: 9.48}), []);
    //Gets data every 1 second
     let { data } = useFetchPositions(process.env.REACT_APP_POSITIONS_API_URL);
    //Render the map with markers
    if(data){
        return renderMap(center,data);
    }
}

export default MapComponent;