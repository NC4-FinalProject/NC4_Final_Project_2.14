import '../../scss/review/ReviewList.scss';
import '../../scss/pages/travel/TravelInfo.scss';
import {useParams} from "react-router-dom";
import {useCallback, useEffect, useState} from "react";
import axios from "axios";
import TravelInfo from "../../components/travel/TravelInfo";
import TravelDetailInfo from "../../components/travel/TravelDetailInfo";
import ReviewListContentList from "../../components/review/ReviewListContentList";
import LoadFail from "../../components/LoadFail";

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

const checkAndAddPostView = (postId) => {
    const cookieValue = getCookie("postId");
    if (cookieValue) {
        const postIdArray = cookieValue.split(",");
        if (!postIdArray.includes(postId)) {
            const newValue = cookieValue + "," + postId;
            setCookie("postId", newValue, 1);
            return true;
        }
    } else {
        setCookie("postId", postId, 1);
        return true;
    }
    return false;
};


const ViewTravelInfo = () => {
    const {id} = useParams();
    const [travel, setTravel] = useState(null);

    const getTravel = useCallback(async () => {
        const test = checkAndAddPostView(id);
        try {
            const response = await axios.get(
                `http://localhost:9090/travel/${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${sessionStorage.getItem("ACCESS_TOKEN")}`
                    },
                    params: {
                        isIncreaseViewCnt: test
                    }
                }
            );

            if (response.data.item === null) {
                document.querySelector('.LoadFail').style.display = 'flex';
            } else {
                setTravel(response.data.item);
            }
        } catch (e) {
            alert("에러발생.");
            console.log(e);
        }
    }, [id]);

    useEffect(() => {
        const currentUrl = new URL(window.location.href);
        if (currentUrl.pathname.split('/')[1] === 'review') {
            ['#bookmark', '#pet'].forEach(selector => {
                const element = document.querySelector(selector);
                if (element) element.style.display = 'none';
            });
        }
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