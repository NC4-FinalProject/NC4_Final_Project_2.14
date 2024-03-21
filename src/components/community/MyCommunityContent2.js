import React from 'react'
import "../../scss/pages/community/MyCommunity.scss"
import SvgButton from '../../components/ui/button/SvgButton.js';
import { SvgIcon } from '@mui/material';
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";


const MyCommunityContent2 = () => {
    return (
        <div className='myCommunity2_container'>
            <h3>
                가입된 커뮤니티가 없습니다.
                <br />
                새로운 커뮤니티를 시작해보세요.
            </h3>

            <div className='btn_box'>
                <div className='btn1'>
                    <p className='btn1_content'>커뮤니티 가입</p>
                    <SvgButton  id={'SvgButton1'}
                                color={'yellow'}
                                svg={<SvgIcon component={ArrowForwardRoundedIcon}/>}/>
                </div>
                <div className='btn2'>
                    <p className='btn2_content'>커뮤니티 생성</p>
                    <SvgButton id={'SvgButton2'} color={'blue'} svg={<SvgIcon component={AddRoundedIcon}/>}/>
                </div>
            </div>
        </div>
    );
}

export default MyCommunityContent2;