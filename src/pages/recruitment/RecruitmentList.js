import React from 'react';
import '../../scss/recruitment/RecruitmentList.scss';
import SearchIcon from '@mui/icons-material/Search';
import RecruitmentCommendList from '../../components/recruitment/RecruitmentCommendList.js';
import CachedIcon from '@mui/icons-material/Cached';
import SelectBox from '../../components/ui/SelectBox.js';
import Input from '../../components/ui/lnput/Input.js';
import RecruitmentItem from '../../components/recruitment/RecruitmentItem.js';

const RecruitmentList = () => {
  const options = ['최신순', '오래된순', '멤버수 높은순', '멤버수 낮은순'];
  const fontSize = '13px';


 


  return (
    <div className="recruitment_container">
      <div className='recruitment_title'>
        <h3>커뮤니티 추천 </h3>
        <CachedIcon id={'CachedIcon'} />
      </div>
      <div className="recruitment_commend">
        <RecruitmentCommendList />
      </div>
      <h3 className='recruitment_title2'>모 집</h3>
      <div className='recruitment_box'>
        <SearchIcon id={'SearchIcon'}></SearchIcon>
        <Input id={'Input'} color={'gray'} placeholder={'검색'} />
        <SelectBox options={options} fontSize={fontSize}></SelectBox>
      </div>
      <RecruitmentItem />
      <RecruitmentItem />
      <RecruitmentItem />
      <RecruitmentItem />
      <RecruitmentItem />
      <RecruitmentItem />
      <RecruitmentItem />
      <RecruitmentItem />
      <RecruitmentItem />
      <RecruitmentItem />

    </div>
  );
}

export default RecruitmentList;