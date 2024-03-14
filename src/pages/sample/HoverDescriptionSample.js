import React from 'react';
import SvgButton from "../../components/ui/button/SvgButton";
import {SvgIcon} from "@mui/material";
import AddRoundedIcon from "@mui/icons-material/AddRounded";

import '../../scss/pages/Sample.scss';
import HoverDescription from "../../components/ui/HoverDescription";

const HoverDescriptionSample = () => {
    return (
        <div className="HoverDescriptionSample">
            <HoverDescription text={'말풍선 등장!'}
                              element={<SvgButton color={'blue'} svg={<SvgIcon component={AddRoundedIcon}/>}/>}/>
            <HoverDescription text={'반짝여 Shining yeah we\n' +
                'Glow glow glow glow glow'}
                              element={<img className="example-img"
                                            src={process.env.PUBLIC_URL + '/assets/icons/chat_icon.svg'}
                                            alt='채팅 아이콘'/>}/>
        </div>
    );
}

export default HoverDescriptionSample;