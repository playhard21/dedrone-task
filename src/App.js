import {useLoadScript} from "@react-google-maps/api";
import MapComponent from "./renderMap/MapComponent"
import "./assets/css/map.css";


function App() {
    //attach script tag to the index page
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    });
    //return map component after loading
    if(isLoaded){
        return <MapComponent />;
    }
}


export default App;
