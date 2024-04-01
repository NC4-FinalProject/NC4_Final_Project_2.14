import '../../scss/review/ReviewList.scss';
import '../../scss/pages/travel/TravelInfo.scss';
import {useParams} from "react-router-dom";
import {useCallback, useEffect, useState} from "react";
import axios from "axios";
import TravelInfo from "../../components/travel/TravelInfo";
import TravelDetailInfo from "../../components/travel/TravelDetailInfo";
import ReviewListContentList from "../../components/review/ReviewListContentList";

const ViewTravelInfo = () => {
    const {id} = useParams();
    const [travel, setTravel] = useState(null);

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

            setTravel(response.data.item);
        } catch (e) {
            alert("에러발생.");
            console.log(e);
        }
    }, [id]);

    useEffect(() => {
        getTravel();
    }, []);
    return (
        <div className="ViewTravelInfo">
            {travel && (<TravelInfo item={travel}>
                <TravelDetailInfo item={travel}/>
                <div className='reviewList_container'>
                    <ReviewListContentList/>
                </div>
            </TravelInfo>)}
        </div>
    );
}

export default ViewTravelInfo; 