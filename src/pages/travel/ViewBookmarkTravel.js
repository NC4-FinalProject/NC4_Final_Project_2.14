import '../../scss/pages/travel/Bookmark.scss';
import SelectBox from "../../components/ui/SelectBox";
import React, {useState} from "react";
import CustomPagination from "../../components/ui/CustomPagination";
import BookmarkTravelList from "../../components/travel/BookmarkTravelList";

const ViewBookmarkTravel = () => {
    const areaCode = ['강남구', '서초구', '관지구'];
    const sigunguCode = ['서울시', '경기도', '강원도'];
    const sortList = ['가나다순', '조회순', '북마크순'];

    const [selectedValue, setSelectedValue] = useState('');

    const handleSelectChange = (selectedValue) => {
        setSelectedValue(selectedValue);
    };

    return (
        <div className="ViewBookmarkTravel">
            <div className="selectBox-container">
                <SelectBox label={"지역"} options={sigunguCode} onSelectChange={handleSelectChange}></SelectBox>
                <SelectBox label={""} options={areaCode} onSelectChange={handleSelectChange}></SelectBox>
                <SelectBox label={"정렬"} options={sortList} onSelectChange={handleSelectChange}></SelectBox>
            </div>
            <BookmarkTravelList/>
            <CustomPagination total={"10"}/>
        </div>
    );
}

export default ViewBookmarkTravel;