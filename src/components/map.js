import React from "react";
import {GoogleMap, MarkerClustererF, MarkerF} from "@react-google-maps/api";
import {useMemo} from "react";

const icon = "../assets/images/drone.svg"
//todo: change markerF to marker for deployment
function Map() {
    const center = useMemo(() => ({lat: 51.31, lng: 9.48}), []);

    const droneSVGLocations = [
        {id:1,lat:51.31,lng:9.48,iconUrl:icon},
        {id:2,lat:51.00,lng:9.22,iconUrl:icon}
    ];

    return (
        <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
            <MarkerClustererF imagePath={"../assets/images/drone.svg"}>
                {
                    (clusterer) =>
                        droneSVGLocations.map((location) => (
                            <MarkerF
                                key={location.id}
                                position={{ lat: location.lat, lng: location.lng }}
                            />
                        ))
                }
            </MarkerClustererF>
        </GoogleMap>
    );
}

export default Map;