import React from "react";
import {useNavigate} from "react-router-dom";
import {addInfoByTravelType} from "../../util/addInfoByTravelType";
import ForkRightRoundedIcon from '@mui/icons-material/ForkRightRounded';
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import {SvgIcon} from "@mui/material";
import Button from "../ui/button/Button";
import {useSelector} from "react-redux";

const TravelDetailInfo = ({item}) => {
    const navigate = useNavigate();

    const isLogin = useSelector(state => state.userSlice.isLogin);

    const additionalInfo = addInfoByTravelType.filter(info => info.type === item.contenttypeid);

    return (
        <div className="TravelDetailInfo">
            <div className="overview">
                {item.detail.overview}
            </div>
            <h2>
                상세정보
            </h2>
            <div className="info-wrapper">
                <div>
                    <SvgIcon component={ForkRightRoundedIcon}/> ({item.zipCode})&nbsp;{item.addr1}&nbsp;{item.addr2}
                </div>
                {item.tel && (
                    <div>
                        <SvgIcon component={CallRoundedIcon}/> {item.tel}
                    </div>
                )}
                {additionalInfo.map((info, idx) => {
                    const matchedItem = item.detail[info.code];
                    if (matchedItem) {
                        return (
                            <div key={idx}>
                                <SvgIcon component={info.mui_icon}/> {info.name}: {matchedItem}
                            </div>
                        );
                    }
                    return null;
                })}
            </div>
            <h2>
                후기 <a href={`/review/list?travelId=${item.id}`}><span>더보기</span></a>
                <Button color={"gray"} text={'등록'}
                        onClick={() => isLogin ? navigate(`/review/reg?travelId=${item.id}`) : navigate('/user/sign-in')}/>
            </h2>
        </div>
    );
}


export default TravelDetailInfo;
