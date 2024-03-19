import '../../scss/components/Travel.scss';
import React, {useEffect, useState} from "react";
import {CustomOverlayMap, Map, MapMarker} from "react-kakao-maps-sdk";
import {SvgIcon} from "@mui/material";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import BookmarkBorderRoundedIcon from "@mui/icons-material/BookmarkBorderRounded";
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';

const TravelLocation = () => {
    const [userLocation, setUserLocation] = useState(null);
    const [selectedMarker, setSelectedMarker] = useState(null);

    const markers = [
        {id: 1, position: {lat: 37.500207, lng: 127.027361}},
    ];

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setUserLocation({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    });
                },
                (error) => {
                    console.error("Error getting user location:", error);
                }
            );
        } else {
            console.error("Geolocation is not supported by this browser.");
        }
    }, []);

    const handleMarkerClick = (markerId) => {
        const clickedMarker = markers.find(marker => marker.id === markerId);
        setSelectedMarker(clickedMarker);
    };

    const handleCloseInfoWindow = () => {
        setSelectedMarker(null);
    };

    return (
        <div className="TravelLocation">
            <Map
                center={userLocation || {lat: 37.506320759000715, lng: 127.05368251210247}}
                style={{
                    width: '100%',
                    height: '450px',
                    borderRadius: '40px',
                    marginTop: '40px',
                    marginBottom: '20px',
                    position: 'relative',
                }}
            >
                {markers.map((marker) => (
                    <MapMarker
                        key={marker.id}
                        position={marker.position}
                        onClick={() => handleMarkerClick(marker.id)}
                    />
                ))}

                {selectedMarker && (
                    <CustomOverlayMap
                        position={selectedMarker.position}
                        yAnchor={1}
                        onCloseClick={handleCloseInfoWindow}>
                        <div className="wrap">
                            <SvgIcon component={CancelRoundedIcon} className="close"
                                     onClick={handleCloseInfoWindow} title="닫기"/>
                            <div className="info">
                                <div className="title">
                                    카카오 스페이스닷원awdawdaasdasdwdawdd<span>관광타입</span>
                                </div>
                                <div className="body">
                                    <div className="img">
                                        <img
                                            src="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/thumnail.png"
                                            width="70" height="70" alt="Thumbnail"/>
                                    </div>
                                    <div className="desc">
                                        <div className="addr">제주특별자치도 제주시 첨단로 242</div>
                                        <div className="zipcode">(우) 63309 (지번) 영평동 2181</div>
                                        <div className="view-bookmark-wrapper">
                                            <span className="view">
                                                 <SvgIcon component={VisibilityRoundedIcon}/> 500
                                            </span>
                                            <span className="bookmark">
                                                <SvgIcon component={BookmarkBorderRoundedIcon}/> 500
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CustomOverlayMap>
                )}
            </Map>
        </div>
    );
};

export default TravelLocation;
