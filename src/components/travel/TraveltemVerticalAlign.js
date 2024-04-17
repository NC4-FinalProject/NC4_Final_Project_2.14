import React from "react";
import '../../scss/components/Travel.scss';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import {SvgIcon} from "@mui/material";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import BookmarkBorderRoundedIcon from "@mui/icons-material/BookmarkBorderRounded";

const TraveltemVerticalAlign = ({item}) => {
    return (
        <div className="TravelInfoItemVerticalAlign">
            {item.firstimage ? (
                <img src={item.firstimage} alt='여행정보 이미지'/>
            ) : (
                <img src={process.env.PUBLIC_URL + '/assets/default_thumbnail.jpg'} alt='여행정보 이미지'/>
            )}
            <div>
                <div className="title">
                    <a href={`/travel/${item.id}`}>
                        {item.title}
                    </a>
                </div>
                <div className="view-bookmark-wrapper">
                    <span className="view">
                        <SvgIcon component={VisibilityRoundedIcon}/> {item.viewCnt}
                    </span>
                    <span className="bookmark">
                        <SvgIcon component={BookmarkBorderRoundedIcon}/> {item.bookmarkCnt}
                    </span>
                </div>
                <div className="area">
                    <SvgIcon
                        component={PlaceOutlinedIcon}/> {item.areaName}&nbsp;{item.sigunguName !== null && item.sigunguName}
                </div>
            </div>
        </div>
    );
}

export default TraveltemVerticalAlign;