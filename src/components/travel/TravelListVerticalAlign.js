import React, {useEffect, useRef, useState} from "react";
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

    const sliderRef = useRef(null);

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
        let slidesToShow = 3;

        if (windowSize.width <= 500) {
            slidesToShow = Math.min(1, list.length);
        } else if (500 < windowSize.width && windowSize.width < 720) {
            slidesToShow = Math.min(2, list.length);
        } else {
            slidesToShow = Math.min(3, list.length);
        }

        if (list.length === 1) {
            slidesToShow = 1;
        }

        setSettings(prevSettings => ({
            ...prevSettings,
            slidesToShow: slidesToShow,
            slidesToScroll: slidesToShow,
        }));
    }, [windowSize, list.length]);

    return (
        <div className="TravelInfoListVerticalAlign slider-container"
             style={{marginBottom: list.length === 1 ? '36px' : '40px'}}>
            {list.length === 1 ? (
                <TraveltemVerticalAlign key={list[0].id} item={list[0]}/>
            ) : (
                <Slider ref={sliderRef} {...settings}>
                    {list.map((item) => (
                        <TraveltemVerticalAlign key={item.id} item={item}/>
                    ))}
                </Slider>
            )}
        </div>
    );
}

export default TravelListVerticalAlign;
