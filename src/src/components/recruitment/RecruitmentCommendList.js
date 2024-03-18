import React from 'react'
import RecruitmentCommendItem from './RecruitmentCommendItem';
import '../../scss/recruitment/RecruitmentList.scss';

const RecruitmentCommendList = () => {
  return (
    <div className='RecruitmentCommendList'>
        <RecruitmentCommendItem/>
        <RecruitmentCommendItem/>
        <RecruitmentCommendItem/>
        <RecruitmentCommendItem/>
    </div>
  );
}

export default RecruitmentCommendList;