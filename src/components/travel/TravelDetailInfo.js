import React from "react";
import {additionalInfoByTravelType} from "../../util/additionalInfoByTravelType";
import ForkRightRoundedIcon from '@mui/icons-material/ForkRightRounded';
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import {SvgIcon} from "@mui/material";
import Button from "../ui/button/Button";

const TravelDetailInfo = ({contentType}) => {
    const additionalInfo = additionalInfoByTravelType.filter(item => item.type === contentType);

    return (
        <div className="TravelDetailInfo">
            <div className="overview">
                더현대 크리스마스 행사
            </div>
            <h2>
                상세정보
            </h2>
            <div className="info-wrapper">
                <span>
                    <SvgIcon component={ForkRightRoundedIcon}/> (우편번호) 상세주소
                </span>
                <span>
                    <SvgIcon component={CallRoundedIcon}/> 전화번호
                </span>
                {additionalInfo.map((item, idx) => (
                    <span key={idx}>
                        <SvgIcon component={item.mui_icon}/> {item.name} :
                    </span>
                ))}
            </div>
            <h2>
                후기<span>더보기</span>
                <Button color={"gray"} text={'등록'}/>
            </h2>
        </div>
    );
}

export default TravelDetailInfo;
