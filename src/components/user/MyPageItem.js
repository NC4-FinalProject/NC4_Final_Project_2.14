import React from 'react';
import SvgButton from "../../components/ui/button/SvgButton";
import { SvgIcon } from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import '../../scss/pages/user/User.scss';

const MyPageItem = ({ subtitle, title, icon, onClick }) => {
  return (
    <div className="comu" onClick={onClick}>
      {icon && <img className="heart" src={icon} alt="Icon" />}
      <h3 className='sub2'>{title}</h3>
      <h2 className='sub1'>{subtitle}</h2>
      <SvgButton color={'white'} svg={<SvgIcon component={ArrowForwardIosIcon} />} />
    </div>
  );
};

export default MyPageItem;