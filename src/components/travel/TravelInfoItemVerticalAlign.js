import React from "react";
import '../../scss/components/Travel.scss';

const TravelInfoItemVerticalAlign = () => {
    return (
        <article className="TravelInfoItemVerticalAlign">
            <img
                src={process.env.PUBLIC_URL + '/assets/temp/travel_test_img_5.jpg'} alt='여행정보 이미지'/>
            <div>
                <h2>
                    이름
                </h2>
            </div>
        </article>
    );
}

export default TravelInfoItemVerticalAlign;