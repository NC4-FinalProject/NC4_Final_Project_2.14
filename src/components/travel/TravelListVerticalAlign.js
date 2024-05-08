import React, {useEffect, useRef, useState} from "react";
import Slider from "react-slick";
import '../../scss/components/Travel.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TravelItemVerticalAlign from "./TravelItemVerticalAlign";
import {debounce} from "lodash";

const TravelListVerticalAlign = ({list}) => {
    const [settings, setSettings] = useState({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
    });

    const sliderRef = useRef(null);

    useEffect(() => {
        const handleResize = debounce(() => {
            let slidesToShow = 3;

            if (window.innerWidth <= 500) {
                slidesToShow = Math.min(1, list.length);
            } else if (500 < window.innerWidth && window.innerWidth < 720) {
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
        }, 200);

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [list.length]);

    if (list.length === 1) {
        return <TravelItemVerticalAlign key={list[0].id} item={list[0]}/>;
    }

    return (
        <div className="TravelInfoListVerticalAlign slider-container"
             style={{marginBottom: list.length === 1 ? '36px' : '40px'}}>
            <Slider ref={sliderRef} {...settings}>
                {list.map((item) => (
                    <TravelItemVerticalAlign key={item.id} item={item}/>
                ))}
            </Slider>
        </div>
    );
}

export default TravelListVerticalAlign;
