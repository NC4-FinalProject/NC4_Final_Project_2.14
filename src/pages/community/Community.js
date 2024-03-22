import "../../scss/pages/community/Community.scss"
import React from "react";
import {SvgIcon} from "@mui/material";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Button from "../../components/ui/button/Button";
import CommunityFeedItem from "../../components/community/CommunityFeedItem";

const Community = () => {
    return (
        <div className="community">
            <div className="upload_container">
                <img className="image_upload_icon" src={process.env.PUBLIC_URL + '/assets/icons/image_upload.svg'}
                     alt=''/>
                <label for="imageInput" id="uploadButton"></label>
                {/* <input type="file" id="imageInput" accept="image/*"></input> */}
            </div>
            <div className="etc_icon">
                <SvgIcon component={MoreHorizIcon}/>
            </div>
            <div className="title_container">
                <p> Travel을 사랑하는 모임</p>
            </div>
            <div className="registered_member_container">
                <div className="member_container">
                    <div className="circle_container">
                        <div className="circle circle1"><img></img></div>
                        <div className="circle circle2"><img></img></div>
                        <div className="circle circle3"><img></img></div>
                    </div>
                    <div className="member_text_container">
                        <p>멤버 554명</p>
                    </div>
                </div>
                <div className="button_container">
                    <Button type={'submit'} color={'gray'} text={'가입함'}/>
                </div>
            </div>
            <CommunityFeedItem></CommunityFeedItem>
        </div>
    );
}

export default Community;