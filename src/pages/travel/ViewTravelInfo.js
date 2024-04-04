import '../../scss/review/ReviewList.scss';
import '../../scss/pages/travel/TravelInfo.scss';
import {useParams} from "react-router-dom";
import {useCallback, useEffect, useState} from "react";
import axios from "axios";
import TravelInfo from "../../components/travel/TravelInfo";
import TravelDetailInfo from "../../components/travel/TravelDetailInfo";
import ReviewListContentList from "../../components/review/ReviewListContentList";
import LoadFail from "../../components/LoadFail";
import {useDispatch} from "react-redux";

const setCookie = (name, value, days) => {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
};

const getCookie = (name) => {
    const cookieName = name + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(';');
    for (let i = 0; i < cookieArray.length; i++) {
        let cookie = cookieArray[i];
        while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(cookieName) === 0) {
            return cookie.substring(cookieName.length, cookie.length);
        }
    }
    return "";
};

const ViewTravelInfo = () => {
    const {id} = useParams();
    const [travel, setTravel] = useState(null);

    const dispatch = useDispatch();

    const checkPostView = (postId) => {
        const cookieValue = getCookie("postId");
        if (!cookieValue.includes(postId)) {

        }
    };

    const addPostView = (postId) => {
        const cookieValue = getCookie("postId");
        if (!cookieValue.includes(postId)) {
            // 쿠키에 해당 게시물 ID가 없는 경우, 추가
            const newValue = cookieValue ? cookieValue + "," + postId : postId;
            setCookie("postId", newValue, 1);
        }
    };


    const getTravel = useCallback(async () => {
        try {
            const response = await axios.get(
                `http://localhost:9090/travel/${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${sessionStorage.getItem("ACCESS_TOKEN")}`
                    }
                }
            );

            if (response.data.item === null) {
                document.querySelector('.LoadFail').style.display = 'flex';
            } else {
                setTravel(response.data.item);
                checkPostView(id);
            }
        } catch (e) {
            alert("에러발생.");
            console.log(e);
        }
    }, [id]);

    useEffect(() => {
        getTravel();
    }, []);

    return (
        <>
            {travel ? (
                <div className="ViewTravelInfo">
                    <TravelInfo item={travel}>
                        <TravelDetailInfo item={travel}/>
                        <div className='reviewList_container'>
                            <ReviewListContentList/>
                        </div>
                    </TravelInfo>
                </div>
            ) : (
                <LoadFail/>
            )}
        </>
    );
}

export default ViewTravelInfo; 