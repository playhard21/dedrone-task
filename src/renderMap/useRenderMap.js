import React, {useCallback} from "react";
import {GoogleMap ,MarkerClustererF, MarkerF} from "@react-google-maps/api";
import vector from "../assets/images/drone.svg"



function useRenderMap (center,markerLocations) {

    const google = window.google;

    return (
        <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
            <MarkerClustererF>
                {
                    (clusterer) =>
                        markerLocations.map((location) => (
                            <MarkerF
                                key={location.id}
                                position={{ lat: location.latitude, lng: location.longitude }}
                                icon={{
                                    url:vector,
                                    scaledSize: new google.maps.Size(100, 100)
                                }}
                            />
                        ))
                }
            </MarkerClustererF>
        </GoogleMap>
    );
}

export default useRenderMap;