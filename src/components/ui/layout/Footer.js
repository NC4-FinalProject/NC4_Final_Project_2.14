import React from 'react';
import '../../../scss/Footer.scss';
import {useNavigate} from 'react-router-dom';

const Footer = () => {
    const navi = useNavigate();
    return (
        <div className="Footer">
            <div className="container">
                <div className="icon-wrapper">
                    <div className='location'>
                        <img className="icon" src={process.env.PUBLIC_URL + '/assets/icons/location_gray.svg'}
                             alt='로고'/>
                    </div>
                    <div className='heart'>
                        <img className="icon" src={process.env.PUBLIC_URL + '/assets/icons/heart_gray.svg'} alt='로고'/>
                    </div>
                    <div className='home' onClick={() => navi('/')}>
                        <img className="icon" src={process.env.PUBLIC_URL + '/assets/icons/home_blue.svg'} alt='로고'/>
                    </div>
                    <div className='search' onClick={() => navi('/search')}>
                        <img className="icon" src={process.env.PUBLIC_URL + '/assets/icons/search_gray.svg'} alt='로고'/>
                    </div>
                    <div className='friend' onClick={() => navi('friend')}>
                        <img className="icon" src={process.env.PUBLIC_URL + '/assets/icons/friend_gray.svg'} alt='로고'/>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Footer;