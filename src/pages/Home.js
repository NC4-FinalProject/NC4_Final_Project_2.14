import React, {useEffect, useState} from 'react';
import '../scss/pages/Home.scss';
import SvgButton from "../components/ui/button/SvgButton";
import {SvgIcon} from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import TravelListVerticalAlign from "../components/travel/TravelListVerticalAlign";

const dummyList = [
    {title: '제목1', desc: '설명1', img: '/assets/temp/travel_test_img_1.jpg', navi: 'navi1'},
    {title: '제목2', desc: '설명2', img: '/assets/temp/travel_test_img_2.jpg', navi: 'navi2'},
    {title: '제목3', desc: '설명3', img: '/assets/temp/travel_test_img_3.jpg', navi: 'navi3'},
    {title: '제목4', desc: '설명4', img: '/assets/temp/travel_test_img_4.jpg', navi: 'navi4'},
    {title: '제목5', desc: '설명5', img: '/assets/temp/travel_test_img_5.jpg', navi: 'navi5'}
];

const Home = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [, setIntervalIds] = useState([]);

    useEffect(() => {
        const ids = dummyList.map((_, index) => {
            return setInterval(() => {
                nextSlide();
            }, 10000 * (index + 1));
        });
        setIntervalIds(ids);

        return () => {
            ids.forEach(id => clearInterval(id));
        };
    }, []);

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === dummyList.length - 1 ? 0 : prevIndex + 1));
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
                        {dummyList.map((item, idx) => (
                            <div
                                className={idx === currentIndex ? 'slider-review-content active' : 'slider-review-content'}
                                key={item.navi}>
                                <article>
                                    <img src={process.env.PUBLIC_URL + item.img} alt={item.title}/>
                                    <div>
                                        <div className='review'>
                                            <h2>{item.title}</h2>
                                            <span>{item.desc}</span>
                                        </div>
                                        <SvgButton color={'yellow'}
                                                   svg={<SvgIcon component={ArrowForwardRoundedIcon}/>}/>
                                    </div>
                                </article>
                            </div>
                        ))}
                    </div>
                    <div className='slider-buttons'>
                        {dummyList.map((_, index) => (
                            <button key={index} className={index === currentIndex ? 'active' : ''}
                                    onClick={() => goToSlide(index)}>
                                <img
                                    src={process.env.PUBLIC_URL + `/assets/icons/slider_item${index === currentIndex ? '_active' : ''}.png`}
                                    alt={`Slide ${index + 1}`}/>
                            </button>
                        ))}
                    </div>
                </div>
            </section>
            <div className="full-content-container">
                <nav>
                    <a className="find-user" href="/">
                        <img
                            src={process.env.PUBLIC_URL + '/assets/icons/find_user.svg'} alt={'친구찾기 메뉴'}/>
                        친구찾기
                    </a>
                    <a className="community" href="/">
                        <img
                            src={process.env.PUBLIC_URL + '/assets/icons/community.svg'} alt={'커뮤니티 메뉴'}/>
                        커뮤니티
                    </a>
                    <a className="recruitment" href="/">
                        <img
                            src={process.env.PUBLIC_URL + '/assets/icons/recruitment.svg'} alt={'모집 메뉴'}/>
                        모집
                    </a>
                    <a className="review" href="/">
                        <img
                            src={process.env.PUBLIC_URL + '/assets/icons/review.svg'} alt={'후기 메뉴'}/>
                        후기
                    </a>
                </nav>
                <section className="section-travel">
                    <h2 className="section-title">
                        추천 여행정보<span>더보기</span>
                    </h2>
                    <TravelListVerticalAlign/>
                </section>
                <section className="section-travel">
                    <h2 className="section-title">
                        내 주변 여행정보<span>더보기</span>
                    </h2>
                    <TravelListVerticalAlign/>
                </section>
            </div>
            <style>{`
                .content {
                    margin-bottom:140px;
                }
            `}</style>
        </div>
    );
}

export default Home;
