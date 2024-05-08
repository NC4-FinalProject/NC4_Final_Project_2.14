import '../../scss/components/Travel.scss';
import BookmarkTravelItem from "./BookmarkTravelItem";
import React from "react";

const BookmarkTravelList = ({list}) => {
    return (
        <div className="BookmarkTravelList">
            {list.content.map((item) => (
                <BookmarkTravelItem key={item.travel.id} item={item.travel}/>
            ))}
        </div>
    );
}

export default BookmarkTravelList;