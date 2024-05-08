import '../../scss/components/Travel.scss';
import React, {useCallback, useEffect, useState} from "react";
import {SvgIcon} from "@mui/material";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderRoundedIcon from "@mui/icons-material/BookmarkBorderRounded";
import {travelType} from "../../util/travelType";
import SvgButton from "../ui/button/SvgButton";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {regBookmark} from "../../apis/travelApi";
import HoverDescription from "../ui/HoverDescription";
import PetsRoundedIcon from "@mui/icons-material/PetsRounded";
import {petTravelInfo} from "../../util/petTravelInfo";

const getContentTypeName = (contentType) => {
    const foundType = travelType.find(t => t.type === contentType);
    return foundType ? foundType.name : 'Unknown';
};

const TravelInfo = ({item, children}) => {
    const [isBookmark, setIsBookmark] = useState(item.bookmark);
    const [petTravelInfoText, setPetTravelInfoText] = useState('');
    const id = item.id;
    const contentTypeName = getContentTypeName(item.contenttypeid);

    const navi = useNavigate();

    const dispatch = useDispatch();

    const isLogin = useSelector(state => state.userSlice.isLogin);

    const handleReg = useCallback(() => {
        if (isLogin) {
            if (!isBookmark) {
                dispatch(regBookmark({id, isBookmark}));
                document.getElementById('bookmark').classList.remove('btn-color-white');
                document.getElementById('bookmark').classList.add('btn-color-red');
                document.querySelector('#bookmark svg').style.color = 'white';
                setIsBookmark(prevIsBookmark => !prevIsBookmark);
                //bookmark라는 className을 가진 span 태그 안의 span 태그의 숫자에서 -1
            } else {
                dispatch(regBookmark({id, isBookmark}));
                document.getElementById('bookmark').classList.remove('btn-color-red');
                document.getElementById('bookmark').classList.add('btn-color-white');
                document.querySelector('#bookmark svg').style.color = '#95989C';
                setIsBookmark(prevIsBookmark => !prevIsBookmark);
            }
        } else {
            alert("로그인 후 북마크를 등록해주세요");
            navi(`/user/sign-in`);
        }
    }, [dispatch, isLogin, id, navi, isBookmark]);

    useEffect(() => {
        if (item.bookmark) {
            document.getElementById('bookmark').classList.remove('btn-color-white');
            document.getElementById('bookmark').classList.add('btn-color-red');
            document.querySelector('#bookmark svg').style.color = 'white';
        }

        if (item.petTravel !== null) {
            const petTravelInfoArray = [];

            petTravelInfo.forEach(info => {
                if (item.petTravel[info.eng] !== "") {
                    petTravelInfoArray.push(`<span>${info.kor}</span></br>&nbsp;${item.petTravel[info.eng]}`);
                }
            });

            const text = petTravelInfoArray.join('<br/>');
            setPetTravelInfoText(text);
        }

    }, [item]);

    return (
        <div className="TravelInfo">
            <div className="img-wrapper">
                {item.firstimage ? (
                    <img src={item.firstimage} alt='여행정보 이미지'/>
                ) : (
                    <img src={process.env.PUBLIC_URL + '/assets/default_thumbnail.jpg'} alt='여행정보 이미지'/>
                )}
                <div className="btn-wrapper">
                    {item.petTravel && (
                        <HoverDescription text={petTravelInfoText}
                                          element={<SvgButton id={'pet'} color={'yellow'}
                                                              svg={<SvgIcon component={PetsRoundedIcon}/>}/>}/>
                    )}
                    <SvgButton id={'bookmark'} color={'white'} svg={<SvgIcon component={BookmarkIcon}/>}
                               onClick={handleReg}/>
                </div>
            </div>
            <div className="info">
                <div className="type">
                    {contentTypeName}
                </div>
                <h2 className="title">
                    <a href={`/travel/${item.id}`}>
                        {item.title}
                    </a>
                </h2>
                <div className="view-bookmark-wrapper">
                    <span className="area">
                        <SvgIcon
                            component={PlaceOutlinedIcon}/> {item.areaName}&nbsp;{item.sigunguName !== null && item.sigunguName}
                    </span>
                    <span className="view">
                        <SvgIcon component={VisibilityRoundedIcon}/> {item.viewCnt}
                    </span>

                    <span className="bookmark">
                        {item.bookmarkCnt === 0 ? (
                            <SvgIcon component={BookmarkBorderRoundedIcon}/>
                        ) : (
                            <SvgIcon component={BookmarkIcon}/>
                        )}
                        <span>{item.bookmarkCnt}</span>
                    </span>
                </div>
                {children}
            </div>
        </div>
    );
}

export default TravelInfo;