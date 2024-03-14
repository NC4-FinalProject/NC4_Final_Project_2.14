import React from 'react'
import '../../scss/recruitment/RecruitmentList.scss';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import SvgButton from "../../components/ui/button/SvgButton";
import {SvgIcon} from "@mui/material";
import RecruitmentCommendComponent from '../../components/recruitment/RecruitmentCommendComponent.js';

const RecruitmentList = () => {
  return (
    <div className="recruitment_container">
        <h3>커뮤니티 추천</h3>
        <div className="recruitment_commend">
        <SvgButton id={'btn-move-review1'} color={'blue'} svg={<SvgIcon component={ArrowBackIosNewRoundedIcon}/>}/>
        
        <RecruitmentCommendComponent/>
        <SvgButton id={'btn-move-review2'} color={'blue'} svg={<SvgIcon component={ArrowBackIosNewRoundedIcon}/>}/>
        </div>
    </div>
  );
}

export default RecruitmentList;