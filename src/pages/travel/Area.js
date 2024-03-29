import '../../scss/pages/travel/Area.scss';
import TravelLocation from "../../components/travel/TravelLocation";
import TravelListVerticalAlign from "../../components/travel/TravelListVerticalAlign";
import React, {useCallback, useState} from "react";
import SelectBox from "../../components/ui/SelectBox";
import Input from "../../components/ui/lnput/Input";
import SearchIcon from "@mui/icons-material/Search";
import {change_searchKeyword} from "../../slices/ReviewSlice";
import {useDispatch, useSelector} from "react-redux";

const Area = () => {
    const dispatch = useDispatch();
    const searchKeyword = useSelector(state => state.review.searchKeyword);
    const changeSearchKeyword = useCallback((e) => {
        dispatch(change_searchKeyword(e.target.value));
    }, [dispatch]);
    
    const areaCode = ['강남구', '서초구', '관지구'];
    const sigunguCode = ['서울시', '경기도', '강원도'];
    const sortList = ['가나다순', '조회순', '북마크순'];

    const [selectedValue, setSelectedValue] = useState('');

    const handleSelectChange = (selectedValue) => {
        setSelectedValue(selectedValue);
    };

    return (
        <div className="Area">
            <div className="search-container">
                <SearchIcon id={'SearchIcon'}/>
                <Input
                    id={'Input'}
                    color={'gray'}
                    placeholder={'검색'}
                    name={'searchKeyword'}
                    value={searchKeyword}
                    onChange={changeSearchKeyword}
                />
            </div>
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