import '../../scss/review/ReviewList.scss';
import '../../scss/pages/travel/TravelInfo.scss';
import TravelInfo from "../../components/travel/TravelInfo";
import TravelDetailInfo from "../../components/travel/TravelDetailInfo";
import ReviewListContentList from "../../components/review/ReviewListContentList";

const ViewTravelInfo = () => {
    const contentType = 12;
    return (
        <div className="ViewTravelInfo">
            <TravelInfo contentType={contentType}>
                <TravelDetailInfo contentType={contentType}/>
                <div className='reviewList_container'>
                    <ReviewListContentList/>
                </div>
            </TravelInfo>
        </div>
    );
}

export default ViewTravelInfo; 