import React from "react";
import {GoogleMap, MarkerF} from "@react-google-maps/api";
import {useMemo} from "react";
import { MarkerClusterer } from '@react-google-maps/api';
function Map() {
    const center = useMemo(() => ({lat: 51.31, lng: 9.48}), []);

    return (
        <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
            <MarkerF
                position={center}
            />
        </GoogleMap>
    );
}

export default Map;