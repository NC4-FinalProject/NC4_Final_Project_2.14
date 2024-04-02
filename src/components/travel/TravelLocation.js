import '../../scss/components/Travel.scss';
import React, {useEffect, useState} from "react";
import {CustomOverlayMap, Map, MapMarker} from "react-kakao-maps-sdk";
import {SvgIcon} from "@mui/material";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import {useDispatch, useSelector} from "react-redux";
import {getMakrers} from "../../apis/travelApi";
import BookmarkBorderRoundedIcon from "@mui/icons-material/BookmarkBorderRounded";
import {travelType} from "../../util/travelType";

const getContentTypeName = (contentType) => {
    const foundType = travelType.find(t => t.type === contentType);
    return foundType ? foundType.name : 'Unknown';
};


const TravelLocation = () => {
    const dispatch = useDispatch();

    const [userLocation, setUserLocation] = useState(null);
    const [selectedMarker, setSelectedMarker] = useState(null);

    const markers = useSelector(state => state.travel.markers);

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

    useEffect(() => {
        if (userLocation) {
            dispatch(getMakrers({
                userMapx: userLocation.lng,
                userMapy: userLocation.lat
            }));
        }
    }, [dispatch, userLocation]);

    const handleMarkerClick = (markerId, contentType) => {
        const clickedMarker = markers.find(marker => marker.contentid === markerId);
        const contentTypeName = getContentTypeName(contentType);

        setUserLocation({
            lat: clickedMarker.mapy,
            lng: clickedMarker.mapx
        });
        setSelectedMarker({...clickedMarker, contentTypeName});
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
                    height: '400px',
                    borderRadius: '40px',
                    marginTop: '40px',
                    marginBottom: '20px',
                    position: 'relative',
                }}
                level={5}
                onDragEnd={(map) => {
                    const latlng = map.getCenter();
                    setUserLocation({
                        lat: latlng.getLat(),
                        lng: latlng.getLng()
                    });
                }}
                onZoomChanged={() => {
                    handleCloseInfoWindow();
                }}
            >
                {selectedMarker && (
                    <CustomOverlayMap
                        position={{lat: selectedMarker.mapy, lng: selectedMarker.mapx}}
                        yAnchor={1}
                        zIndex={100}
                        onCloseClick={handleCloseInfoWindow}
                    >
                        <div className="wrap">
                            <SvgIcon component={CancelRoundedIcon} className="close" onClick={handleCloseInfoWindow}
                                     title="닫기"/>
                            <div className="info">
                                <div className="title">
                                    {selectedMarker.title}<span>{selectedMarker.contentTypeName}</span>
                                </div>
                                <div className="body">
                                    <div className="img">
                                        {selectedMarker.firstimage ? (
                                            <img src={selectedMarker.firstimage} width="70" height="70"
                                                 alt="Thumbnail"/>
                                        ) : (
                                            <img src={process.env.PUBLIC_URL + '/assets/default_thumbnail.jpg'}
                                                 width="70" height="70" alt="Thumbnail"/>
                                        )}
                                    </div>
                                    <div className="desc">
                                        <div className="addr">
                                            ({selectedMarker.zipCode})&nbsp;{selectedMarker.addr1}&nbsp;{selectedMarker.addr2}
                                        </div>
                                        <div className="view-bookmark-wrapper">
                                            <span className="bookmark">
                                                <SvgIcon
                                                    component={BookmarkBorderRoundedIcon}/> {selectedMarker.bookmarkCnt}
                                            </span>
                                            <span className="view">
                                                <SvgIcon component={VisibilityRoundedIcon}/> {selectedMarker.viewCnt}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CustomOverlayMap>
                )}
                {markers.map((marker) => (
                    <MapMarker
                        key={marker.contentid}
                        position={{lat: marker.mapy, lng: marker.mapx}}
                        image={{
                            src: marker.contenttypeid ?
                                process.env.PUBLIC_URL + `/assets/icons/map-marker-${marker.contenttypeid}.png` :
                                process.env.PUBLIC_URL + '/assets/icons/map-marker-default.png',
                            size: {width: 35, height: 35},
                        }}
                        zIndex={0}
                        onClick={() => handleMarkerClick(marker.contentid, marker.contenttypeid)}
                    />
                ))}
            </Map>
        </div>
    );
};

export default TravelLocation;