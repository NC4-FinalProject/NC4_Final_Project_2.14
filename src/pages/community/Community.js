import "../../scss/pages/community/Community.scss"
import React from "react";
import Button from "../../components/ui/button/Button";
import CommunityFeedItem from "../../components/community/CommunityFeedItem";
import CommunityFeedTitle from "../../components/community/CommunityFeedTitle";

const Community = () => {

    return (
        <div className="community">
            <CommunityFeedTitle></CommunityFeedTitle>
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