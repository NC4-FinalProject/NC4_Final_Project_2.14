import React from 'react'
import '../../scss/recruitment/RecruitmentList.scss';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Tag from '../ui/Tag';
import { Link, Route } from 'react-router-dom';
import Recruitment from '../../pages/recruitment/Recruitment';

const RecruitmentListContent = () => {
  <Route path="/recruitments" element={<Recruitment/>}></Route>
  return (
    
    <div className='recruitment_box1'>
      <Link to="/recruitments">
        <img className='img2' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhSkozbxrfkXMlzAUfgmUenBijb8uDW6FjUg&usqp=CAU'></img>
      </Link>

      <div className='recruitment_content_box'>
        <Link to="/recruitments">
        <p className='recruitment_content1'>
          오늘 오후 6시에 제주에서 롤체할 사람~ 찾습니다 ~~~ ㅎㅎㅎ !!
          <span className='recruitment_regdate'>오후 4:30</span>
        </p>
        </Link>


        <p className='recruitment_content2'>
          플레티넘 이상만 구합니다. 오늘 오후 6시에 칼퇴하고 바로 내전 하실분 찾아요 ㅎㅎ 제주도 서귀포시 짱 PC...
        </p>
        <div className='tag_box'>
          <Tag id={'Tag'} text={'#롤체'} color={'blue'}></Tag>
          <Tag id={'Tag'} text={'#11시즌'} color={'blue'}></Tag>
          <Tag id={'Tag'} text={'#성인만'} color={'blue'}></Tag>
          <Tag id={'Tag'} text={'#목요일까지'} color={'blue'}></Tag>
          <Tag id={'Tag'} text={'#끝내야한다'} color={'blue'}></Tag>

          <div className='member_box'>
            <p className='recruitment_member'><img className="recruitment_member_img" src={process.env.PUBLIC_URL + '/assets/icons/friend_gray.svg'} alt=''/>12/300</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecruitmentListContent;