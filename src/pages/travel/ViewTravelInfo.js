import '../../scss/pages/travel/TravelInfo.scss';
import TravelInfo from "../../components/travel/TravelInfo";
import TravelDetailInfo from "../../components/travel/TravelDetailInfo";

const ViewTravelInfo = () => {
    const contentType = 12;
    return (
        <div className="ViewTravelInfo">
            <TravelInfo contentType={contentType}>
                <TravelDetailInfo contentType={contentType}/>
            </TravelInfo>
        </div>
    );
}

export default ViewTravelInfo; 