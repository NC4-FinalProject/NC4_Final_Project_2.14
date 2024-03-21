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
import Input from '../../components/ui/lnput/Input.js';

const RecruitmentList = () => {
  const options = ['최신순', '오래된순', '멤버수 높은순', '멤버수 낮은순'];
  const fontSize = '13px';

  function handleClick() {
    console.log("click");
  }


  return (
    <div className="recruitment_container">
        <div className='recruitment_title'>
          <h3>커뮤니티 추천 </h3>
          <CachedIcon id={'CachedIcon'} onClick={handleClick}/>
        </div>
        <div className="recruitment_commend">
            <RecruitmentCommendList/>
        </div>
        <h3 className='recruitment_title2'>모 집</h3>
        <div className='recruitment_box'>
              <SearchIcon id={'SearchIcon'}></SearchIcon>
              <Input id={'Input'} color={'gray'} placeholder={'검색'} />
              <SelectBox id={'SelectBox'} options={options} fontSize={fontSize}></SelectBox>
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

            {/* <SvgButton id={'SvgButton'} color={'blue'} svg={<SvgIcon component={AddRoundedIcon}/>}/> */}
    </div>
  );
}

export default RecruitmentList;