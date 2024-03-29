import '../../scss/pages/travel/Area.scss';
import TravelLocation from "../../components/travel/TravelLocation";
import TravelListVerticalAlign from "../../components/travel/TravelListVerticalAlign";
import React, {useCallback, useEffect, useState} from "react";
import SelectBox from "../../components/ui/SelectBox";
import Input from "../../components/ui/lnput/Input";
import SearchIcon from "@mui/icons-material/Search";
import {useDispatch, useSelector} from "react-redux";
import {getAreaCodes, getSigunguCodes, getTravels} from "../../apis/travelApi";
import {change_searchArea, change_searchKeyword, change_searchSigungu, change_sort} from "../../slices/travelSlice";

const Area = () => {
    const dispatch = useDispatch();
    const sortList = {'alphabetical': '가나다순', '1': '조회순', '2': '북마크순'};
    const [sigunguCodeOptions, setSigunguCodeOptions] = useState({'default': '\u200B'});

    const areaCodes = useSelector(state => state.travel.areaCodes);
    const sigunguCodes = useSelector(state => state.travel.sigunguCodes); // sigunguCodes를 useSelector로 가져옴
    const searchKeyword = useSelector(state => state.travel.searchKeyword);

    const areaCodeOptions = {'default': '전체'};
    areaCodes.forEach(area => {
        areaCodeOptions[area.code] = area.name;
    });

    useEffect(() => {
        dispatch(getTravels({searchArea: '', searchSigungu: '', searchKeyword: '', sort: 'alphabetical'}));
        dispatch(getAreaCodes());
    }, [dispatch]);

    useEffect(() => {
        const updatedSigunguCodeOptions = {'default': '전체'};
        sigunguCodes.forEach(sigungu => {
            updatedSigunguCodeOptions[sigungu.code] = sigungu.name;
        });

        setSigunguCodeOptions(updatedSigunguCodeOptions);
    }, [sigunguCodes]);

    const changeSearchArea = useCallback((e) => {
        dispatch(change_searchArea(e.key));
        dispatch(getSigunguCodes(e.key));
    }, [dispatch]);

    const changeSearchSigungu = useCallback((e) => {
        dispatch(change_searchSigungu(e.key));
    }, [dispatch]);

    const changeSearchSort = useCallback((e) => {
        dispatch(change_sort(e.key));
    }, [dispatch]);

    const changeSearchKeyword = useCallback((e) => {
        dispatch(change_searchKeyword(e.target.value));
    }, [dispatch]);


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
                    onChange={changeSearchKeyword}/>
            </div>
            <div className="selectBox-container">
                <SelectBox label={"지역"} options={areaCodeOptions} onSelectChange={changeSearchArea}></SelectBox>
                <SelectBox label={""} options={sigunguCodeOptions} onSelectChange={changeSearchSigungu}></SelectBox>
                <SelectBox label={"정렬"} options={sortList} onSelectChange={changeSearchSort}></SelectBox>
            </div>
            <TravelListVerticalAlign/>
            <TravelLocation/>
        </div>
    );
};

export default Area;