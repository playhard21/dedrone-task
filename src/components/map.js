import React from "react";
import {GoogleMap, MarkerF} from "@react-google-maps/api";
import {useMemo} from "react";
const icon = '{ url: require("../assets/images/drone.svg"), scaledSize: { width: 32, height: 32 } }'
function Map() {
    const center = useMemo(() => ({lat: 44, lng: -80}), []);

    return (
        <GoogleMap zoom={12} center={center} mapContainerClassName="map-container">
            <MarkerF
                position={{lat: 44, lng: -80}}
                icon={icon}
            />
            <MarkerF
                position={{lat: 43, lng: -80}}
                icon={icon}
            />
        </GoogleMap>
    );
}

export default Map;