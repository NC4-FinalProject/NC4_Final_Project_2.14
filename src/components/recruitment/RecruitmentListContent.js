import React from 'react'
import '../../scss/recruitment/RecruitmentList.scss';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

const RecruitmentListContent = () => {
  return (
    <div className='recruitment_box1'>
        <img className='img2' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhSkozbxrfkXMlzAUfgmUenBijb8uDW6FjUg&usqp=CAU'></img>

        <div className='recruitment_content_box'>
            <p className='recruitment_content1'>
                오늘 오후 6시에 제주에서 롤체할 사람~ 찾습니다 ~~~ ㅎㅎㅎ !!
                <span className='recruitment_regdate'>오후 4:30</span>
            </p>

            <p className='recruitment_content2'>
                플레티넘 이상만 구합니다. 오늘 오후 6시에 칼퇴하고 바로 내전 하실분 찾아요 ㅎㅎ 제주도 서귀포시 짱 PC...
            </p>

            <p className='recruitment_member'><PersonOutlineIcon className='recruitment_member_img'/>12/300</p>
        </div>
    </div>
  );
}

export default RecruitmentListContent;