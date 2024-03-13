import React from 'react';
import SvgButton from "../../components/ui/button/SvgButton";
import {SvgIcon} from "@mui/material";
import AddRoundedIcon from "@mui/icons-material/AddRounded";

import '../../scss/pages/Sample.scss';
import HoverDescription from "../../components/ui/HoverDescription";

const HoverDescriptionSample = () => {
    return (
        <div className="ButtonSample">
            <SvgButton color={'blue'} svg={<SvgIcon component={AddRoundedIcon}/>}/>
            <HoverDescription/>
        </div>
    );
}

export default HoverDescriptionSample;