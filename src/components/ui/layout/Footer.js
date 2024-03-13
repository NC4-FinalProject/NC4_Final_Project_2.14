import React from 'react';
import '../../../scss/Footer.scss';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const navi = useNavigate();
    return (
        <div className="Footer">
            <div className="container">
                <div className="icon-wrapper">
                    <div className='location'>
                        <img className="icon" src={process.env.PUBLIC_URL + '/assets/icons/location.svg'} alt='로고'/>
                    </div>
                    <div className='heart'>
                        <img className="icon" src={process.env.PUBLIC_URL + '/assets/icons/heart.svg'} alt='로고'/>
                    </div>
                    <div className='home'>
                        <img className="icon" src={process.env.PUBLIC_URL + '/assets/icons/home.svg'} alt='로고'/>
                    </div>
                    <div className='search' onClick={() => navi('/search')}>
                        <img className="icon" src={process.env.PUBLIC_URL + '/assets/icons/search.svg'} alt='로고'/>
                    </div>
                    <div className='friend'>
                        <img className="icon" src={process.env.PUBLIC_URL + '/assets/icons/friend.svg'} alt='로고'/>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Footer;