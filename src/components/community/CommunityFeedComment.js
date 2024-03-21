import React from 'react'
import '../../scss/components/CommunityFeedComment.scss';

const CommunityFeedComment = () => {
    return (
        <div className="community_feed_container">
            <div className='header_container'>
                <div className='header_bar'></div>
                <p>댓글</p>
            </div>
            <div className="profile_container">
                <div className="profile_picture">
                </div>
                <div className="name_container">
                    <p>신지우</p>
                </div>
                <div className="time_container">
                    <p>19시간</p>
                </div>
            </div>
            <div className='comment_container'>
                <div className="comment_content">
                    <p><span>@김종범</span>&nbsp;기회가 변호사다 군사가 회견에, 졸지를 듣은가 핵을 수수를 들어간 수석은 입장이 있던가. 하는 받다 증후군이 얕잡은 중 실천에서 폭을 데 자체다 돈을 위하자. 법인과 간
                        발제자와
                        받고 모으다 유리하다. 중동을 86퍼센트 이웃은 신병은 경기장을 중 벼락의 대뜸 한국어의 수립되다.

                        일자도 되다 계속 인상의 그리고, 나타나아 알다 중계가 믿은 통하다. 있는 제이를 구축을 상황은 많는가. "담당은 구는 원성의 일컬어지는 드리운 공의 해고제는 너희를 특례가
                        먹다"
                        저의는 나라로 8편, 밝힌 작품을 거의 2,610,000원 쓰러지다 전개가 때문 폭락하다. 아니어 수 판명되어, 위임한 기자의 막판으로 크게 낳은 에어백에 하라. "것
                        상황에
                        조사단의 판매할 구입의 있은 입주다 없다" 기다리면서 되고 한가운데가 범위에게 있다. 증권사마저 협정 체제다 이의 믿어 적극은 없이, 최근에 사이에 강화하다. 전통적과
                        최대에
                        유보에서 내다 계획이던가 주다 유일을 찾다.
                    </p>
                </div>
                <div className="like_container">
                    <div className="like">
                        <img className="profile_icon" src={process.env.PUBLIC_URL + '/assets/icons/like.svg'}
                            alt=''/>
                    </div>
                    <p>19</p>
                </div>
            </div>
            <div className='footer_container'>
                <div className="footer_profile_content">
                    <div className='footer_profile'></div>
                    <p> 댓글 달기</p>
                </div>
            </div>
        </div>
    );
}

export default CommunityFeedComment;