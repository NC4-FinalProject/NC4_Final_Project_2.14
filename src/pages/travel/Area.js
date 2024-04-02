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
import SvgButton from "../../components/ui/button/SvgButton";
import {SvgIcon} from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";

const Area = () => {
    const dispatch = useDispatch();

    const sortList = {'random': '무작위', 'alphabetical': '가나다순', 'view': '조회순', 'bookmark': '북마크순'};

    const [sigunguCodeOptions, setSigunguCodeOptions] = useState({'': '\u200B'});

    const travels = useSelector(state => state.travel.travels);
    const areaCodes = useSelector(state => state.travel.areaCodes);
    const sigunguCodes = useSelector(state => state.travel.sigunguCodes);
    const searchArea = useSelector(state => state.travel.searchArea);
    const searchSigungu = useSelector(state => state.travel.searchSigungu);
    const searchKeyword = useSelector(state => state.travel.searchKeyword);
    const sort = useSelector(state => state.travel.sort);

    const areaCodeOptions = {'default': '전체'};
    areaCodes.forEach(area => {
        areaCodeOptions[area.code] = area.name;
    });

    useEffect(() => {
        console.log(travels);
    }, [travels]);

    useEffect(() => {
        dispatch(change_searchArea(''));
        dispatch(change_searchSigungu(''));
        dispatch(change_searchKeyword(''));
        dispatch(change_sort('random'));
        dispatch(getTravels({searchArea: '', searchSigungu: '', searchKeyword: '', sort: 'random'}));
        dispatch(getAreaCodes());
    }, [dispatch]);

    useEffect(() => {
        const updatedSigunguCodeOptions = {'': '전체'};
        sigunguCodes.forEach(sigungu => {
            updatedSigunguCodeOptions[sigungu.code] = sigungu.name;
        });

        setSigunguCodeOptions(updatedSigunguCodeOptions);
    }, [sigunguCodes]);

    const changeSearchArea = useCallback((e) => {
        dispatch(change_searchArea(e.key));
        dispatch(change_searchSigungu(''));
        dispatch(getSigunguCodes(e.key));
        dispatch(getTravels({
            searchArea: e.key,
            searchSigungu: '',
            searchKeyword: searchKeyword,
            sort: sort
        }));
    }, [dispatch, searchKeyword, sort]);

    const changeSearchSigungu = useCallback((e) => {
        dispatch(change_searchSigungu(e.key));
        dispatch(getTravels({
            searchArea: searchArea,
            searchSigungu: e.key,
            searchKeyword: searchKeyword,
            sort: sort
        }));
    }, [dispatch, searchArea, searchKeyword, sort]);

    const changeSearchKeyword = useCallback((e) => {
        dispatch(change_searchKeyword(e.target.value));
    }, [dispatch]);

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            dispatch(getTravels({
                searchArea: searchArea,
                searchSigungu: searchSigungu,
                searchKeyword: searchKeyword,
                sort: sort
            }));
        }
    };

    const changeSearchSort = useCallback((e) => {
        dispatch(change_sort(e.key));
        dispatch(getTravels({
            searchArea: searchArea,
            searchSigungu: searchSigungu,
            searchKeyword: searchKeyword,
            sort: e.key
        }));
    }, [dispatch, searchArea, searchSigungu, searchKeyword]);

    return (
        <div className="Area">
            <div className="search-container">
                <SvgButton
                    color={'white'}
                    svg={<SvgIcon component={RefreshIcon} onClick={() => {
                        changeSearchKeyword({target: {value: ''}});
                        dispatch(getTravels({
                            searchArea: searchArea,
                            searchSigungu: searchSigungu,
                            searchKeyword: '',
                            sort: sort
                        }));
                    }}/>}
                />
                <SearchIcon id={'SearchIcon'}/>
                <Input
                    id={'Input'}
                    color={'gray'}
                    placeholder={'검색'}
                    name={'searchKeyword'}
                    value={searchKeyword}
                    onChange={changeSearchKeyword}
                    onKeyPress={handleKeyPress}
                />
            </div>
            <div className="selectBox-container">
                <SelectBox label={"지역"} options={areaCodeOptions} onSelectChange={changeSearchArea}></SelectBox>
                <SelectBox label={""} options={sigunguCodeOptions} onSelectChange={changeSearchSigungu}></SelectBox>
                <SelectBox label={"정렬"} options={sortList} onSelectChange={changeSearchSort}></SelectBox>
            </div>
            {travels && travels.length === 0 && (
                <div className="noSearch-box">
                    검색 결과가 없습니다.
                </div>
            )}
            {travels && travels.length > 0 && <TravelListVerticalAlign list={travels}/>}
            <TravelLocation/>
        </div>
    );
};

export default Area;