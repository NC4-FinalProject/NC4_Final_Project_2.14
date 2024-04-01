import React, {useEffect, useState} from "react";
import Slider from "react-slick";
import '../../scss/components/Travel.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TraveltemVerticalAlign from "./TraveltemVerticalAlign";
import {debounce} from "lodash";

const TravelListVerticalAlign = ({list}) => {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    const [settings, setSettings] = useState({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
    });

    const handleResize = debounce(() => {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight
        });
    }, 1000);

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    useEffect(() => {
        if (windowSize.width <= 500) {
            setSettings({
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
            });
        } else if (500 < windowSize.width && windowSize.width < 720) {
            setSettings({
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows: false,
            });
        } else {
            setSettings({
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 3,
                slidesToScroll: 3,
                arrows: false,
            });
        }
    }, [windowSize]);

    return (
        <div className="TravelInfoListVerticalAlign slider-container">
            <Slider {...settings}>
                {list.map((item) => (
                    <TraveltemVerticalAlign key={item.id}
                                            item={item}/>
                ))}
            </Slider>
        </div>
    );
}

export default TravelListVerticalAlign;
