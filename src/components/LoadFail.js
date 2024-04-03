import '../scss/components/LoadFail.scss';
import {Link} from "react-router-dom";
import SvgButton from "./ui/button/SvgButton";
import {SvgIcon} from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import React from "react";

const LoadFail = () => {
    return (
        <div className="LoadFail">
            <img src={process.env.PUBLIC_URL + '/assets/free-animated-icon-hot-11175793.gif'}/>
            <p className="fail-title">찾을 수 없는 페이지입니다.</p>
            <p className="fail-content">주소가 올바르지 않거나 알 수 없는 오류로 인해<br/>페이지를 찾을 수 없습니다.</p>
            <div className='btn_box'>
                <div className='btn1'>
                    <p className='btn1_content'>홈으로 가기</p>
                    <Link to={'/'}>
                        <SvgButton id={'SvgButton1'}
                                   color={'yellow'}
                                   svg={<SvgIcon component={ArrowForwardRoundedIcon}/>}/>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default LoadFail;