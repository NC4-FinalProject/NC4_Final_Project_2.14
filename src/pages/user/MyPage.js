import '../../scss/pages/user/User.scss';
import Button from "../../components/ui/button/Button";
import MyPageItem from '../../components/user/MyPageItem';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const MyPage = () => {
  const title = ['북마크', '나의 후기', '나의 커뮤니티', '북마크', '좋아요한 컨텐츠', '친구관리', '신고', '공지사항', '고객센터']
  const nickname = useSelector((state) => state.userSlice.loginUserName);
  const profileImageUrl = useSelector((state) => state.userSlice.profileImageUrl);

  function handleClick(e) {
    window.location.href = "/user-modify"
  }
  const navi = useNavigate();

  //navi('링크 주소')
  const MoveToPage = (index) => {
    switch (index) {
      case 0:
        navi('/bookmark');
        return;
      case 1:
        navi('/review/my');
        return;
      case 2:
        navi('');
        return;
      case 3:
        navi('');
        return;
      case 4:
        navi('');
        return;
      case 5:
        navi('');
        return;
      case 6:
        navi('');
        return;
      case 7:
        navi('');
        return;
      case 8:
        navi('');
        return;
                      
      default:
        return;
    }
  };
 
  return (
    <div className="MyPage">
      <article>
      <img
          className="user-interface"
          src={profileImageUrl || '/assets/userface.png'}
          alt="User-interface"
          style={{ 
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            objectFit: 'cover',
          }}
        />
        <span className="nickname">{nickname}</span>
        <Button color={"gray"} text={"정보 수정"} onClick={handleClick}></Button>
      </article>
      <h2>나의 여행</h2>
      <MyPageItem title={title[0]} icon={process.env.PUBLIC_URL + "/assets/icons/bookmark.png"} onClick={() => MoveToPage(0)}/>
      <MyPageItem title={title[1]} icon={process.env.PUBLIC_URL + "/assets/icons/my_review.png"} onClick={() => MoveToPage(1)}/>
      {/*<h2>커뮤니티</h2>*/}
      {/*<MyPageItem title={title[2]} icon={process.env.PUBLIC_URL + "/assets/icons/my_community.png"} onClick={() => MoveToPage(2)}/>*/}
      {/*<MyPageItem title={title[3]} icon={process.env.PUBLIC_URL + "/assets/icons/bookmark.png"} onClick={() => MoveToPage(3)}/>*/}
      {/*<MyPageItem title={title[4]} icon={process.env.PUBLIC_URL + "/assets/icons/heart_black.png"} onClick={() => MoveToPage(4)}/>*/}
      {/*<h2 className="none"></h2>*/}
      {/*<MyPageItem title={title[5]} icon={process.env.PUBLIC_URL + "/assets/icons/friend_black.png"} onClick={() => MoveToPage(5)}/>*/}
      {/*<h2 className="none"></h2>*/}
      {/*<MyPageItem title={title[6]} icon={process.env.PUBLIC_URL + "/assets/icons/report_black.png"} onClick={() => MoveToPage(6)}/>*/}
      {/*<MyPageItem title={title[7]} icon={process.env.PUBLIC_URL + "/assets/icons/notice.png"} onClick={() => MoveToPage(7)}/>*/}
      {/*<MyPageItem title={title[8]} icon={process.env.PUBLIC_URL + "/assets/icons/customer_service_center.png"} onClick={() => MoveToPage(8)}/>*/}
    </div>
  ) 
}

export default MyPage