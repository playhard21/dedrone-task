import {useLoadScript} from "@react-google-maps/api";
import Map from "./components/map"
import "./assets/css/map.css";


function App() {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    });
    //return map component after loading
    if(isLoaded){
        return <Map />;
    }
}


export default App;
