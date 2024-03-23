import "../../scss/pages/community/CommunityFeedTitle.scss"
import React from "react";
import {SvgIcon} from "@mui/material";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useNavigate } from 'react-router-dom';

const CommunityFeedTitle = () => {
      const navigate = useNavigate(); // 네비게이션 함수 생성

        const handleIconClick = () => {
            navigate('/community-rename'); // 이미지 업로드 아이콘 클릭 시 해당 경로로 이동
        };
    
    return (
        <div className="community_feed_title">
             <div className="upload_container" onClick={handleIconClick}>
                <img className="image_upload_icon" src={process.env.PUBLIC_URL + '/assets/icons/image_upload.svg'}
                    alt=''/>
            </div>
            <div className="etc_icon">
                <SvgIcon component={MoreHorizIcon}/>
            </div>
            <div className="title_container">
                <p> Travel을 사랑하는 모임</p>
            </div>
        </div>
    );
}

export default CommunityFeedTitle;