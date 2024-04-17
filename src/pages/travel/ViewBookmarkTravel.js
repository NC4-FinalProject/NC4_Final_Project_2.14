import '../../scss/pages/travel/Bookmark.scss';
import SelectBox from "../../components/ui/SelectBox";
import React, {useCallback, useEffect, useState} from "react";
import CustomPagination from "../../components/ui/CustomPagination";
import BookmarkTravelList from "../../components/travel/BookmarkTravelList";
import {useDispatch, useSelector} from "react-redux";
import {change_searchArea, change_searchSigungu, change_sort} from "../../slices/travelSlice";
import {getAreaCodes, getBookmarks, getSigunguCodes, getTravels} from "../../apis/travelApi";

const ViewBookmarkTravel = () => {
    const dispatch = useDispatch();

    const sortList = {'random': '무작위', 'alphabetical': '가나다순', 'view': '조회순', 'bookmark': '북마크순'};

    const [sigunguCodeOptions, setSigunguCodeOptions] = useState({'': '\u200B'});

    const travels = useSelector(state => state.travel.travels);
    const areaCodes = useSelector(state => state.travel.areaCodes);
    const sigunguCodes = useSelector(state => state.travel.sigunguCodes);
    const searchArea = useSelector(state => state.travel.searchArea);
    const searchSigungu = useSelector(state => state.travel.searchSigungu);
    const sort = useSelector(state => state.travel.sort);

    const areaCodeOptions = {'default': '전체'};
    areaCodes.forEach(area => {
        areaCodeOptions[area.code] = area.name;
    });

    useEffect(() => {
        dispatch(change_searchArea(''));
        dispatch(change_searchSigungu(''));
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
        dispatch(getBookmarks({
            searchArea: e.key,
            searchSigungu: '',
            sort: sort
        }));
    }, [dispatch, sort]);

    const changeSearchSigungu = useCallback((e) => {
        dispatch(change_searchSigungu(e.key));
        dispatch(getBookmarks({
            searchArea: searchArea,
            searchSigungu: e.key,
            sort: sort
        }));
    }, [dispatch, searchArea, sort]);

    const changeSearchSort = useCallback((e) => {
        dispatch(change_sort(e.key));
        dispatch(getBookmarks({
            searchArea: searchArea,
            searchSigungu: searchSigungu,
            sort: e.key
        }));
    }, [dispatch, searchArea, searchSigungu]);

    return (
        <div className="ViewBookmarkTravel">
            <div className="selectBox-container">
                <SelectBox label={"지역"} options={areaCodeOptions} onSelectChange={changeSearchArea}></SelectBox>
                <SelectBox label={""} options={sigunguCodeOptions} onSelectChange={changeSearchSigungu}></SelectBox>
                <SelectBox label={"정렬"} options={sortList} onSelectChange={changeSearchSort}></SelectBox>
            </div>
            {travels && travels.length > 0 && <BookmarkTravelList list={travels}/>}
            <CustomPagination total={"10"}/>
        </div>
    );
}

export default ViewBookmarkTravel;