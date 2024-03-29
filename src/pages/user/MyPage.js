import '../../scss/pages/user/User.scss';
import Button from "../../components/ui/button/Button";
import MyPageItem from '../../components/user/MyPageItem';
import React, { useEffect, useState } from 'react';

const MyPage = () => {
  const title = ['북마크', '나의 후기', '나의 커뮤니티', '북마크', '내 후기', '좋아요한 컨텐츠', '신고', '공지사항', '고객센터']
  
  const [userInfo, setUserInfo] = useState(null);
  function handleClick(e) {
    window.location.href = "/user-modify"
  }

  useEffect(() => {
    fetch('/api/user')
      .then(response => response.json())
      .then(data => setUserInfo(data));
  }, []);
 
  return (
    <div className="MyPage">
      <article>
      <img
          className="user-interface"
          src={userInfo ? userInfo.profileImageUrl : '/assets/userface.png'}
          alt="User-interface"
        />
        <p className="nickname">{userInfo ? userInfo.nickname : 'userNickname'}</p>
        <Button color={"gray"} text={"내 정보 수정"} onClick={handleClick}></Button>
      </article>

      <h2>나의 여행</h2>
      <MyPageItem title={title[0]} icon="/assets/icons/북마크.png"/>
      <MyPageItem title={title[1]} icon="/assets/icons/후기.png"/>
      <h2>커뮤니티</h2>
      <MyPageItem title={title[2]} icon="/assets/icons/나의 커뮤니티.png"/>
      <MyPageItem title={title[3]} icon="/assets/icons/북마크.png"/>
      <MyPageItem title={title[4]} icon="/assets/icons/찜.png"/>
      <h2 className="none"></h2>
      <MyPageItem title={title[5]} icon="/assets/icons/친구찾기.png"/>
      <h2 className="none"></h2>
      <MyPageItem title={title[6]} icon="/assets/icons/신고.png"/>
      <MyPageItem title={title[7]} icon="/assets/icons/공지사항.png"/>
      <MyPageItem title={title[8]} icon="/assets/icons/고객센터.png"/>

    </div>
  )
}

export default MyPage
