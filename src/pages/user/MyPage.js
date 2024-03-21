import React from 'react'
import '../../scss/pages/user/User.scss';
import Button from "../../components/ui/button/Button";
import MyPageItem from '../../components/user/MyPageItem';

const MyPage = () => {
  const title = ['나의 커뮤니티', '나의 여행']
  const subtitle = ['찜한목록', '커뮤니티 모집', '내 친구 관리', '내 지역 설정', '내 후기', '신고', '공지사항', '고객센터']

  function handleClick(e) {
    window.location.href = "/my-review"
  }
 
  return (
    <div className="MyPage">
      <article>
        <img className="user-interface" src="/assets/userface.png" alt="User-interface" />
        <p className="nickname">userNickname</p>
        <Button color={"gray"} text={"내 정보 수정"}></Button>
      </article>
      <MyPageItem title={title[0]} onClick={handleClick} />
      <MyPageItem subtitle={subtitle[0]} icon="/assets/icons/찜.png"/>
      <MyPageItem subtitle={subtitle[1]} icon="/assets/icons/모집.png"/>
      <MyPageItem title={title[1]}/>
      <MyPageItem subtitle={subtitle[2]} icon="/assets/icons/친구찾기.png"/>
      <MyPageItem subtitle={subtitle[3]} icon="/assets/icons/지역.png"/>
      <MyPageItem subtitle={subtitle[4]} icon="/assets/icons/후기.png"/>
      <MyPageItem subtitle={subtitle[5]} icon="/assets/icons/신고.png"/>
      <MyPageItem subtitle={subtitle[6]} icon="/assets/icons/공지사항.png"/>
      <MyPageItem subtitle={subtitle[7]} icon="/assets/icons/고객센터.png"/>

    </div>
  )
}

export default MyPage
