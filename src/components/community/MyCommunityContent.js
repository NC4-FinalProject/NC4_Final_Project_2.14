import React from 'react'


const MyCommunityContent = () => {
    return (
        <div className='myCommunity_content_box'>
            <img className='img2'
                 src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhSkozbxrfkXMlzAUfgmUenBijb8uDW6FjUg&usqp=CAU'></img>

            <div className='content_box'>
                <p className='content1'>
                    강원도권 등산 여행 커뮤니티
                    <span className='regdate'>오후 4:30</span>
                </p>

                <divv className='content2'>
                    3/10(일) 강원도 설악산 여행 정모
                </divv>
                <div className='member'>
                    <img className="member_img" src={process.env.PUBLIC_URL + '/assets/icons/friend_gray.svg'} alt=''/>12/300
                </div>

            </div>
        </div>
    )
}

export default MyCommunityContent