import '../../scss/components/Travel.scss';
import React from "react";
import {SvgIcon} from "@mui/material";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import BookmarkBorderRoundedIcon from "@mui/icons-material/BookmarkBorderRounded";

const BookmarkTravelItem = ({item}) => {
    return (
        <div className="BookmarkTravelItem">
            {item.firstimage ? (
                <img src={item.firstimage} alt='여행정보 이미지'/>
            ) : (
                <img src={process.env.PUBLIC_URL + '/assets/default_thumbnail.jpg'} alt='여행정보 이미지'/>
            )}
            <div className="info">
                <div className="title">
                    <a href={`/travel/${item.id}`}>
                        {item.title}
                    </a>
                </div>
                <div className="overview">
                    {item.overview}
                </div>
                <div className="view-bookmark-wrapper">
                    <span className="area">
                        <SvgIcon
                            component={PlaceOutlinedIcon}/> {item.areaName}&nbsp;{item.sigunguName !== null && item.sigunguName}
                    </span>
                    <span className="view">
                        <SvgIcon component={VisibilityRoundedIcon}/> {item.viewCnt}
                    </span>
                    <span className="bookmark">
                        <SvgIcon component={BookmarkBorderRoundedIcon}/> {item.bookmarkCnt}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default BookmarkTravelItem;