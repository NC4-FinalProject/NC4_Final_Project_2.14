import React from 'react';
import '../../scss/recruitment/RecruitmentList.scss';
import SearchIcon from '@mui/icons-material/Search';
import RecruitmentListContent from '../../components/recruitment/RecruitmentListContent.js';
import RecruitmentCommendList from '../../components/recruitment/RecruitmentCommendList.js';
import CachedIcon from '@mui/icons-material/Cached';
import SvgButton from '../../components/ui/button/SvgButton.js';
import { SvgIcon } from '@mui/material';
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import SelectBox from '../../components/ui/SelectBox.js';

const RecruitmentList = () => {
  const options = ['최신순', '오래된순', '멤버수 높은순', '멤버수 낮은순'];
  

  return (
    <div className="recruitment_container">
        <div className='recruitment_title'>
          <h3>커뮤니티 추천 </h3>
          <CachedIcon id={'CachedIcon'}/>
        </div>
        <div className="recruitment_commend">
            <RecruitmentCommendList/>
        </div>
        <h3>모 집</h3>
        <div className='recruitment_box'>
              <SearchIcon id={'SearchIcon'}></SearchIcon>
              <input className='recruitment_select' placeholder="검색"/>
              <div className='SelectBox'>
                <SelectBox options={options}></SelectBox>
              </div>
        </div>

            <RecruitmentListContent/>
            <RecruitmentListContent/>
            <RecruitmentListContent/>
            <RecruitmentListContent/>
            <RecruitmentListContent/>
            <RecruitmentListContent/>
            <RecruitmentListContent/>
            <RecruitmentListContent/>
            <RecruitmentListContent/>
            <RecruitmentListContent/>

            <SvgButton id={'SvgButton'} color={'blue'} svg={<SvgIcon component={AddRoundedIcon}/>}/>
    </div>
  );
}

export default RecruitmentList;