import '../../scss/pages/travel/Area.scss';
import TravelLocation from "../../components/travel/TravelLocation";
import TravelListVerticalAlign from "../../components/travel/TravelListVerticalAlign";
import React, {useState} from "react";
import SelectBox from "../../components/ui/SelectBox";

const Area = () => {
    const areaCode = ['강남구', '서초구', '관지구'];
    const sigunguCode = ['서울시', '경기도', '강원도'];
    const sortList = ['가나다순', '조회순', '북마크순'];

    const [selectedValue, setSelectedValue] = useState('');

    const handleSelectChange = (selectedValue) => {
        setSelectedValue(selectedValue);
    };

    return (
        <div className="Area">
            <div className="selectBox-container">
                <SelectBox label={"지역"} options={sigunguCode} onSelectChange={handleSelectChange}></SelectBox>
                <SelectBox label={""} options={areaCode} onSelectChange={handleSelectChange}></SelectBox>
                <SelectBox label={"정렬"} options={sortList} onSelectChange={handleSelectChange}></SelectBox>
            </div>
            <TravelListVerticalAlign/>
            <TravelLocation/>
        </div>
    );
};

export default Area;