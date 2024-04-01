import React from "react";
import {additionalInfoByTravelType} from "../../util/additionalInfoByTravelType";
import ForkRightRoundedIcon from '@mui/icons-material/ForkRightRounded';
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import {SvgIcon} from "@mui/material";
import Button from "../ui/button/Button";

const TravelDetailInfo = ({item}) => {
    const additionalInfo = additionalInfoByTravelType.filter(info => info.type === item.contenttypeid);
    console.log(additionalInfo);
    return (
        <div className="TravelDetailInfo">
            <div className="overview">
                {item.detail.overview}
            </div>
            <h2>
                상세정보
            </h2>
            <div className="info-wrapper">
                <span>
                    <SvgIcon component={ForkRightRoundedIcon}/> ({item.zipCode})&nbsp;{item.addr1}&nbsp;{item.addr2}
                </span>
                {item.tel && (
                    <span>
                    <SvgIcon component={CallRoundedIcon}/> {item.tel}
                </span>
                )}
                {additionalInfo.map((info, idx) => {
                    const matchedItem = item.detail[info.code];
                    if (matchedItem) {
                        return (
                            <span key={idx}>
                                <SvgIcon component={info.mui_icon}/> {info.name}: {matchedItem}
                            </span>
                        );
                    }
                    return null;
                })}
            </div>
            <h2>
                후기<span>더보기</span>
                <Button color={"gray"} text={'등록'}/>
            </h2>
        </div>
    );
}


export default TravelDetailInfo;
