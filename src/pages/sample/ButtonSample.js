import React from 'react';
import Button from "../../components/ui/button/Button";
import SvgButton from "../../components/ui/button/SvgButton";
import {SvgIcon} from "@mui/material";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import FullWidthButton from "../../components/ui/button/FullWidthButton";

import '../../scss/pages/Sample.scss';
import ReportButton from '../../components/ui/button/ReportButton';

const ButtonSample = () => {
    return (
        <div className="ButtonSample">
            <Button color={'red'} text={'등록'}/>
            <Button color={'green'} text={'수정'}/>
            <Button type={'submit'} text={'수정'}/>
            <SvgButton color={'blue'} svg={<SvgIcon component={AddRoundedIcon}/>}/>
            <SvgButton color={'blue'} svg={<SvgIcon component={ArrowBackIosRoundedIcon}/>}/>
            <SvgButton id={'btn-move-review'} color={'yellow'} svg={<SvgIcon component={ArrowForwardRoundedIcon}/>}/>
            <FullWidthButton color={'green'} text={'수정'}/>
            <ReportButton/>
        </div>
    );
}

export default ButtonSample;