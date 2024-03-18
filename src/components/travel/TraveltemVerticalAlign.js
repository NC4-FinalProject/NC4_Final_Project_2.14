import React from "react";
import '../../scss/components/Travel.scss';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import {SvgIcon} from "@mui/material";

const TraveltemVerticalAlign = () => {
    return (
        <div className="TravelInfoItemVerticalAlign">
            <img src={process.env.PUBLIC_URL + '/assets/temp/travel_test_img_1.jpg'} alt='여행정보 이미지'/>
            <div>
                <h2 className="title">
                    이름
                </h2>
                <div className="info">
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

export default TraveltemVerticalAlign;