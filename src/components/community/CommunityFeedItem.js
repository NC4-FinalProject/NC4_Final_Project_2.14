import React from 'react'
// import '../../scss/components/CommunityFeedItem.scss';
import {SvgIcon} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const CommunityFeedItem = () => {
    return (
        <div className="community_container">
            <div className="name_container">
                <div className="profile_container">
                    <img className="profile_icon" src={process.env.PUBLIC_URL + '/assets/icons/profile.svg'}
                         alt=''/>
                    <div className="name">
                        <p>신지우</p>
                    </div>
                </div>
                <SvgIcon component={MoreHorizIcon}/>
            </div>
            <div className="feed_container">
                <div className='img_container'>
                    <img></img>
                </div>
                <div className="feed_icon_container">
                    <div className='icon_container'>
                        <img className="profile_icon" src={process.env.PUBLIC_URL + '/assets/icons/community_love.svg'}
                             alt=''/>
                        <img className="profile_icon" src={process.env.PUBLIC_URL + '/assets/icons/community_chat.svg'}
                             alt=''/>
                        <img className="profile_icon" src={process.env.PUBLIC_URL + '/assets/icons/community_share.svg'}
                             alt=''/>
                    </div>
                    <img className="profile_icon" src={process.env.PUBLIC_URL + '/assets/icons/community_save.svg'}
                         alt=''/>
                </div>
                <div className='like'>
                    <p>좋아요23개</p>
                </div>
                <div className="feed_text_container">
                    <p>검찰의 기꺼이 계속 선진국을 수입하다, 있다. 측 국제는 체조직으로 부당하기, 기금은 그리고 씨 신생아를 통렬한가. 길고 대학은 포맷을 차기가 높는 숭배가 원장과 평론가도
                        혹독하다. 육이구가 유월의 씨 2023년 9,340,000원 있을 요청한 목동일, 우수로 대한다. 없어 될, 대통령의 국내와 있어 알다.
                        <span>...더보기</span></p>
                </div>
            </div>
        </div>
    );
}

export default CommunityFeedItem;