import '../../scss/pages/Area.scss';
import TravelLocation from "../../components/travel/TravelLocation";
import TravelListVerticalAlign from "../../components/travel/TravelListVerticalAlign";
import React from "react";

const Area = () => {
    return (
        <div className="Area">
            <TravelListVerticalAlign/>
            <TravelLocation/>
        </div>
    );
};

export default Area;