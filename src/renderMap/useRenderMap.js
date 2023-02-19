import React, {useCallback} from "react";
import {GoogleMap ,MarkerClustererF, MarkerF} from "@react-google-maps/api";
import vector from "../assets/images/drone.svg"



function useRenderMap (center,droneSVGLocations) {
    const google = window.google;
    const onLoad = useCallback(
         (mapInstance)  => {

        },[]
    );

    return (
        <GoogleMap zoom={10} center={center} mapContainerClassName="map-container" onLoad={onLoad}>
            <MarkerClustererF>
                {
                    (clusterer) =>
                        droneSVGLocations.map((location) => (
                            <MarkerF
                                key={location.id}
                                position={{ lat: location.lat, lng: location.lng }}
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