import React from 'react'
import '../../scss/components/CommunityComment.scss';
import Input from '../../components/ui/lnput/Input';
import CommunityFeedComment from './CommunityFeedComment';

const CommunityComment = () => {
      const testCommentData = {
        id: 1, 
        author: "신지우", 
        content: "이것은 테스트 댓글입니다.",
        time: "5분 전",
        replies: [
            {
                id: 2, 
                author: "김종범",
                content: "이것은 대댓글입니다.",
                time: "3분 전",
                replies: []
                
            }
            
            
        ]
    };
    
    return (
        <div className='community_comment_container'>
                <div className='header_container'>
                    <div className='header_bar'></div>
                    <p>댓글</p>
            </div>
             {/* 수정된 부분: testCommentData를 comment prop으로 전달 */}
            <CommunityFeedComment comment={testCommentData} ></CommunityFeedComment>
            <div className='footer_container'>
                <div className="footer_profile_content">
                        <div className='footer_profile'></div>
                </div>
                <div className='input_container'> 
                    <Input color={'white'}  placeholder={'댓글 달기...'} />
                </div>
            </div>
        </div>
        
    );
}

export default CommunityComment;