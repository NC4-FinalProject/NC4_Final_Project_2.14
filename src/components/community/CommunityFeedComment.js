import React from 'react'
import '../../scss/components/CommunityFeedComment.scss';

const CommunityFeedComment = () => {
    return (
        <div className="community_feed_container">
            <div className='header_container'>
                <div className='header_bar'></div>
                <p>댓글</p>
            </div>
            <div className="profile picture">
            </div>
            <div>
                <div className='title_container'>
                    <div className="name_container">
                    </div>
                    <div className="time_container">
                    </div>
                </div>
                <div className='comment_container'>
                    <p></p>
                </div>
            </div>
            <div className="like">
            </div>
        </div>
    );
}

export default CommunityFeedComment;