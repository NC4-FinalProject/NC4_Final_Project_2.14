import '../../scss/components/Travel.scss';
import React, {useEffect} from "react";
import {SvgIcon} from "@mui/material";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderRoundedIcon from "@mui/icons-material/BookmarkBorderRounded";
import {travelType} from "../../util/travelType";
import SvgButton from "../ui/button/SvgButton";

const getContentTypeName = (contentType) => {
    const foundType = travelType.find(t => t.type === contentType);
    return foundType ? foundType.name : 'Unknown';
};

const TravelInfo = ({item, children}) => {
    const contentTypeName = getContentTypeName(item.contenttypeid);

    useEffect(() => {
        console.log(">> " + item.bookmarkCnt);
    }, []);

    return (
        <div className="TravelInfo">
            <div className="img-wrapper">
                {item.firstimage ? (
                    <img src={item.firstimage} alt='여행정보 이미지'/>
                ) : (
                    <img src={process.env.PUBLIC_URL + '/assets/default_thumbnail.jpg'} alt='여행정보 이미지'/>
                )}
                {item.bookmarkCnt > 0 && (
                    <SvgButton id={'btn-bookmark'} color={'yellow'} svg={<SvgIcon component={BookmarkIcon}/>}/>
                )}
                <SvgButton id={'btn-bookmark'} color={'yellow'} svg={<SvgIcon component={BookmarkIcon}/>}/>
            </div>
            <div className="info">
                <div className="type">
                    {contentTypeName}
                </div>
                <h2 className="title">
                    {item.title}
                </h2>
                <div className="view-bookmark-wrapper">
                    <span className="area">
                        <SvgIcon
                            component={PlaceOutlinedIcon}/> {item.areaName}&nbsp;{item.sigunguName !== null && item.sigunguName}
                    </span>
                    <span className="view">
                        <SvgIcon component={VisibilityRoundedIcon}/> {item.viewCnt}
                    </span>

                    <span className="bookmark">
                        {item.bookmarkCnt === 0 ? (
                            <SvgIcon component={BookmarkBorderRoundedIcon}/>
                        ) : (
                            <SvgIcon component={BookmarkIcon}/>
                        )}
                        <span>{item.bookmarkCnt}</span>
                    </span>
                </div>
                {children}
            </div>
        </div>
    );
}

export default TravelInfo;