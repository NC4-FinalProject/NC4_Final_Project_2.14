import React from 'react'
import '../../scss/recruitment/MyRecruitment.scss';
import MyRecruitmentContent from '../../components/recruitment/MyRecruitmentContent';
import CustomPagination from '../../components/ui/CustomPagination';


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

      <div className='CustomPagination'>
          <CustomPagination total={"10"}/>    
      </div>
    </div>
  );
}

export default MyRecruitment;