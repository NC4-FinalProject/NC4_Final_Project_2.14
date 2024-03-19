import React from 'react'
import '../../scss/recruitment/MyRecruitment.scss';
import MyRecruitmentContent from '../../components/recruitment/MyRecruitmentContent';



const MyRecruitment = () => {
  return (
    <div className='myRecruitment_container'>
      <div>
        <h3>내 모집글</h3>
      </div>
      <MyRecruitmentContent/>
      <MyRecruitmentContent/>
      <MyRecruitmentContent/>
      <MyRecruitmentContent/>
    </div>
  );
}

export default MyRecruitment;