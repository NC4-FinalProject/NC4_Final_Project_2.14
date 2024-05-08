import React, {useEffect, useState} from 'react';
import '../scss/pages/Home.scss';
import SvgButton from "../components/ui/button/SvgButton";
import {SvgIcon} from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {change_travels} from "../slices/travelSlice"
import {change_reviews} from "../slices/reviewSlice"
import {getRandReview} from "../apis/reviewApi";
import {getNearTravels, getViewCntTrevels} from "../apis/travelApi";
import TravelListVerticalAlign from "../components/travel/TravelListVerticalAlign";

const Home = () => {
    const navigate = useNavigate();

    const [currentIndex, setCurrentIndex] = useState(0);
    const [, setIntervalIds] = useState([]);
    const [userLocation, setUserLocation] = useState(null);

    const dispatch = useDispatch();

    const reviews = useSelector(state => state.review.reviews) || [];
    const travels = useSelector(state => state.travel.travels);
    const markers = useSelector(state => state.travel.markers);

    useEffect(() => {
        dispatch(change_travels([]));
        dispatch(change_reviews([]));
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setUserLocation({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    });
                },
                (error) => {
                    console.error("Error getting user location:", error);
                }
            );
        } else {
            console.error("Geolocation is not supported by this browser.");
        }
    }, []);

    useEffect(() => {
        dispatch(getRandReview());
        dispatch(getViewCntTrevels());
    }, [dispatch]);

    useEffect(() => {
        if (userLocation) {
            dispatch(getNearTravels({
                userMapx: userLocation.lng,
                userMapy: userLocation.lat
            }));
        }
    }, [userLocation]);

    useEffect(() => {
        const ids = reviews && Array.isArray(reviews) ? reviews.map((_, index) => {
            return setInterval(() => {
                nextSlide();
            }, 10000 * (index + 1));
        }) : [];
        setIntervalIds(ids);

        return () => {
            ids.forEach(id => clearInterval(id));
        };
    }, [reviews]);

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className='Home'>
            <section className='section-review'>
                <div className='img-wrapper'>
                    <img src={process.env.PUBLIC_URL + '/assets/boba-traveller-man-looking-at-map-near-signpost-1.gif'}
                         alt='여행자 이미지'/>
                </div>
                <div className='slider-review'>
                    <div className='slider-wrapper' style={{transform: `translateX(-${currentIndex * 100}%)`}}>
                        {reviews ? (
                            reviews.map((item, idx) => (
                                <div
                                    className={idx === currentIndex ? 'slider-review-content active' : 'slider-review-content'}
                                    key={item.seq}
                                >
                                    <article>
                                        {item.travel.firstimage ? (
                                            <img className='img2' src={item.travel.firstimage} alt='여행정보 이미지'/>
                                        ) : (
                                            <img className='img2'
                                                 src={process.env.PUBLIC_URL + '/assets/default_thumbnail.jpg'}
                                                 alt='여행정보 이미지'
                                            />
                                        )}
                                        <div>
                                            <div className='review'>
                                                <h2>{item.title}</h2>
                                                <span>{item.content}</span>
                                            </div>
                                            <SvgButton color={'yellow'}
                                                       svg={<SvgIcon component={ArrowForwardRoundedIcon}/>}
                                                       onClick={() => navigate(`/review/${item.seq}`)}
                                            />
                                        </div>
                                    </article>
                                </div>
                            ))
                        ) : (
                            <div style={{width: '436.8px', height: '264px'}}></div>
                        )}
                    </div>
                    <div className='slider-buttons'>
                        {reviews ? (
                            reviews.map((_, index) => (
                                <button key={index} className={index === currentIndex ? 'active' : ''}
                                        onClick={() => goToSlide(index)}>
                                    <img
                                        src={process.env.PUBLIC_URL + `/assets/icons/slider_item${index === currentIndex ? '_active' : ''}.png`}
                                        alt={`Slide ${index + 1}`}/>
                                </button>
                            ))
                        ) : (
                            <div style={{width: '48px', height: '38px'}}></div>
                        )}
                    </div>
                </div>
            </section>
            <div className="full-content-container">
                {/*<nav>*/}
                {/*    <a className="find-user" href="/">*/}
                {/*        <img*/}
                {/*            src={process.env.PUBLIC_URL + '/assets/icons/find_user.svg'} alt={'친구찾기 메뉴'}/>*/}
                {/*        친구찾기*/}
                {/*    </a>*/}
                {/*    <a className="community" href="/">*/}
                {/*        <img*/}
                {/*            src={process.env.PUBLIC_URL + '/assets/icons/community.svg'} alt={'커뮤니티 메뉴'}/>*/}
                {/*        커뮤니티*/}
                {/*    </a>*/}
                {/*    <a className="recruitment" href="/recruitment/list">*/}
                {/*        <img*/}
                {/*            src={process.env.PUBLIC_URL + '/assets/icons/recruitment.svg'} alt={'모집 메뉴'}/>*/}
                {/*        모집*/}
                {/*    </a>*/}
                {/*    <a className="review" href="/review/list">*/}
                {/*        <img*/}
                {/*            src={process.env.PUBLIC_URL + '/assets/icons/review.svg'} alt={'후기 메뉴'}/>*/}
                {/*        후기*/}
                {/*    </a>*/}
                {/*</nav>*/}
                <section className="section-travel">
                    <h2 className="section-title">
                        조회 많은 여행정보<a href="/area"><span>더보기</span></a>
                    </h2>
                    {travels && (
                        <TravelListVerticalAlign list={travels}/>
                    )}
                </section>
                <section className="section-travel">
                    <h2 className="section-title">
                        내 주변 여행정보<a href="/area"><span>더보기</span></a>
                    </h2>
                    {markers && (
                        <TravelListVerticalAlign list={markers}/>
                    )}
                </section>
            </div>
            <style>{`
                .content {
                    margin-bottom:100px;
                }
            `}</style>
        </div>
    );
}

export default Home;
