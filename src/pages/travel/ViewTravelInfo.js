import '../../scss/pages/travel/TravelInfo.scss';
import TravelInfo from "../../components/travel/TravelInfo";
import TravelDetailInfo from "../../components/travel/TravelDetailInfo";
import ReviewListContentList from "../../components/review/ReviewListContentList";
import '../../scss/review/ReviewList.scss';

const ViewTravelInfo = () => {
    const contentType = 12;
    return (
        <div className="ViewTravelInfo">
            <TravelInfo contentType={contentType}>
                <TravelDetailInfo contentType={contentType}/>
            </TravelInfo>
            <div className='reviewList_container'>
                <ReviewListContentList/>
            </div>
        </div>
    );
}

export default ViewTravelInfo; 