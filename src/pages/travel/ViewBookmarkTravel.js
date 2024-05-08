import '../../scss/pages/travel/Bookmark.scss';
import React, {useCallback, useEffect} from "react";
import CustomPagination from "../../components/ui/CustomPagination";
import BookmarkTravelList from "../../components/travel/BookmarkTravelList";
import {useDispatch, useSelector} from "react-redux";
import {getBookmarks} from "../../apis/travelApi";

const ViewBookmarkTravel = () => {
    const dispatch = useDispatch();

    const travels = useSelector(state => state.travel.travels);
    const page = useSelector(state => state.travel.page);

    useEffect(() => {
        dispatch(getBookmarks({page: 0}));
    }, [dispatch]);

    const changePage = useCallback((e, v) => {
        dispatch(getBookmarks({
            page: parseInt(v) - 1
        }));
    }, [dispatch]);

    return (
        <div className="ViewBookmarkTravel">
            {travels.content && <BookmarkTravelList list={travels}/>}
            <CustomPagination count={travels.totalPages} page={page + 1} changePage={changePage}/>
        </div>
    );
}

export default ViewBookmarkTravel;