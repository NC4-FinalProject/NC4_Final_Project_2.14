import React from 'react'
import '../../scss/review/MyReview.scss';
import CustomPagination from '../../components/ui/CustomPagination';
import MyReviewContent from '../../components/review/MyReviewContent';
import SvgButton from '../../components/ui/button/SvgButton.js';
import { SvgIcon } from '@mui/material';
import AddRoundedIcon from "@mui/icons-material/AddRounded";

const MyReview = () => {
  return (
      <div className='myRecruitment_container'>
        <div>
          <h3>내 여행후기</h3>
        </div>
        <MyReviewContent />
        <MyReviewContent />
        <MyReviewContent />
        <MyReviewContent />

        <div className='CustomPagination'>
          <CustomPagination total={"10"} />
        </div>

        <SvgButton id={'SvgButton'} color={'blue'} svg={<SvgIcon component={AddRoundedIcon}/>}/>
      </div>
  );
}

export default MyReview;