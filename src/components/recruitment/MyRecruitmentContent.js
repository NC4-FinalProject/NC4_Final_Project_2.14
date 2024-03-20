import React from 'react'
import Tag from '../../components/ui/Tag';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

const MyRecruitmentContent = () => {
  return (
    <div className='myRecruitment_content_box'>
      <img className='img2' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhSkozbxrfkXMlzAUfgmUenBijb8uDW6FjUg&usqp=CAU'></img>

      <div className='content_box'>
        <p className='content1'>
          오늘 오후 6시에 제주에서 롤체할 사람~ 찾습니다 ~~~ 
        </p>
        <span className='regdate'>오후 4:30</span>

        <p className='content2'>
          플레티넘 이상만 구합니다. 오늘 오후 6시에 칼퇴하고 바로 내전 하실분 찾아요 ㅎㅎ 제주도 서귀포시 짱 PC...
        </p>
        <div className='tag_box'>
          <Tag id={'Tag'} text={'#롤체'} color={'blue'}></Tag>
          <Tag id={'Tag'} text={'#11시즌'} color={'blue'}></Tag>
          <Tag id={'Tag'} text={'#성인만'} color={'blue'}></Tag>
          <Tag id={'Tag'} text={'#목요일까지'} color={'blue'}></Tag>
          <Tag id={'Tag'} text={'#끝내야한다'} color={'blue'}></Tag>
          <div className='member'><PersonOutlineIcon className='member_img' />12/300</div>
        </div>
      </div>
    </div>
  );
}

export default MyRecruitmentContent;