import {useMemo, useEffect} from "react";
import renderMap from "./useRenderMap";
import {useFetchPositions} from "./useFetchPositions";
import {InfoWindow} from "@react-google-maps/api";


//todo: change markerF to marker for deployment
function MapComponent() {

    //center
    const center = useMemo(() => ({lat: 51.31, lng: 9.48}), []);

    //Gets data every 5 seconds
    const { data, error, loading } = useFetchPositions(process.env.REACT_APP_POSITIONS_API_URL);

    //load map with default
    let droneSVGLocations = [
        {
            "id": 1617,
            "latitude": 51.248303899038014,
            "longitude": 9.476022916012303,
            "key": "0"
        },
        {
            "id": 1618,
            "latitude": 51.33685101235301,
            "longitude": 9.47919857654024,
            "key": "1"
        },
        {
            "id": 1619,
            "latitude": 51.34365665625554,
            "longitude": 9.42632918245318,
            "key": "2"
        },
        {
            "id": 1620,
            "latitude": 51.35069392096525,
            "longitude": 9.569808280799737,
            "key": "3"
        },
        {
            "id": 1621,
            "latitude": 51.2861188126304,
            "longitude": 9.465952020106041,
            "key": "4"
        },
        {
            "id": 1622,
            "latitude": 51.295593562251966,
            "longitude": 9.405885490958022,
            "key": "5"
        },
        {
            "id": 1623,
            "latitude": 51.35550780751504,
            "longitude": 9.473071694708379,
            "key": "6"
        },
        {
            "id": 1624,
            "latitude": 51.407636850765584,
            "longitude": 9.49933382659803,
            "key": "7"
        },
        {
            "id": 1625,
            "latitude": 51.39717554917208,
            "longitude": 9.485741276512657,
            "key": "8"
        },
        {
            "id": 1626,
            "latitude": 51.29136920752264,
            "longitude": 9.383246210852844,
            "key": "9"
        }
    ];

    //update the value
    useEffect((data) => {

    },[data])


    //default render
    return renderMap(center,droneSVGLocations);
}

export default MapComponent;