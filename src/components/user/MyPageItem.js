import React from 'react';
import SvgButton from "../../components/ui/button/SvgButton";
import { SvgIcon } from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import '../../scss/pages/user/User.scss';

const MyPageItem = ({title, icon, onClick }) => {
  return (
    <div className="comu" onClick={onClick}>
      {icon && <img className="icon" src={icon} alt="Icon" />}
      <p className="subtitle">{title}</p>
      <SvgButton color={'white'} svg={<SvgIcon component={ArrowForwardIosIcon} />} />
    </div>
  );
};

export default MyPageItem;