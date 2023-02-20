import React from "react";
import {GoogleMap ,MarkerClustererF, MarkerF} from "@react-google-maps/api";
import vector from "../assets/images/drone.svg";
import dedroneLogo from "../assets/images/dedroneLogo.svg"


//todo:Get and update MarkerClustererF.imagePath from an API
//todo:Update animations to show live drone images available drone a specif in location (Can use input box )
//todo:Find some react animation css library
function useRenderMap (center,markerLocations) {

    const google = window.google;

    return (
        <GoogleMap zoom={12} center={center} mapContainerClassName="map-container">
            <MarkerClustererF
                imagePath={dedroneLogo}
                title={"Dedrone"}
                maxZoom={13}


                minimumClusterSize={3}
            >
                {
                    (clusterer) =>
                        markerLocations.map((location) => (
                            <MarkerF
                                key={location.id}
                                position={{ lat: location.latitude, lng: location.longitude }}
                                icon={{
                                    url:vector,
                                    scaledSize: new google.maps.Size(100, 100),

                                }}
                            />
                        ))
                }
            </MarkerClustererF>
        </GoogleMap>
    );
}

export default useRenderMap;