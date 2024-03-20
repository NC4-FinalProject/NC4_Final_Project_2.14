import '../../scss/components/Travel.scss';
import React from "react";
import {SvgIcon} from "@mui/material";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import BookmarkBorderRoundedIcon from "@mui/icons-material/BookmarkBorderRounded";

const BookmarkTravelItem = () => {
    return (
        <div className="BookmarkTravelItem">
            <img src={process.env.PUBLIC_URL + '/assets/temp/travel_test_img_1.jpg'} alt='여행정보 이미지'/>
            <div className="info">
                <h2>
                    장소명
                </h2>
                <div className="overview">
                    설명dddddddddddddddddddddddddddddddddddddddddddddddddddddddd...
                </div>
                <div className="view-bookmark-wrapper">
                    <span className="area">
                        <SvgIcon component={PlaceOutlinedIcon}/> 지역
                    </span>
                    <span className="view">
                        <SvgIcon component={VisibilityRoundedIcon}/> 500
                    </span>
                    <span className="bookmark">
                        <SvgIcon component={BookmarkBorderRoundedIcon}/> 500
                    </span>
                </div>
            </div>
        </div>
    );
}

export default BookmarkTravelItem;