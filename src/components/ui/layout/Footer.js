import React from 'react';
import '../../../scss/Footer.scss';
import {useLocation, useNavigate} from 'react-router-dom';

const Footer = () => {
    const location = useLocation();
    const navi = useNavigate();
    const nowPath = location.pathname.split('/')[1];
    return (
        <div className="Footer">
            <div className="container">
                <div className="icon-wrapper">
                    <div className='location'>
                        {nowPath === 'location' ?
                        <img className="icon" src={process.env.PUBLIC_URL + '/assets/icons/location_blue.svg'} alt=''/>
                        :
                        <img className="icon" src={process.env.PUBLIC_URL + '/assets/icons/location_gray.svg'} alt=''/>
                        }
                    </div>
                    <div className='heart'>
                        {nowPath === 'heart' ?
                        <img className="icon" src={process.env.PUBLIC_URL + '/assets/icons/heart_blue.svg'} alt=''/>
                        :
                        <img className="icon" src={process.env.PUBLIC_URL + '/assets/icons/heart_gray.svg'} alt=''/>
                        }
                    </div>
                    <div className='home' onClick={() => navi('/')}>
                        {nowPath === '' ?
                        <img className="icon" src={process.env.PUBLIC_URL + '/assets/icons/home_blue.svg'} alt='홈'/>
                        :
                        <img className="icon" src={process.env.PUBLIC_URL + '/assets/icons/home_gray.svg'} alt='홈'/>
                        }
                    </div>
                    <div className='search' onClick={() => navi('/search')}>
                        {nowPath === 'search' ?
                        <img className="icon" src={process.env.PUBLIC_URL + '/assets/icons/search_blue.svg'} alt=''/>
                        :
                        <img className="icon" src={process.env.PUBLIC_URL + '/assets/icons/search_gray.svg'} alt=''/>
                        }
                    </div>
                    <div className='friend' onClick={() => navi('friend')}>
                        {nowPath === 'friend' ?
                        <img className="icon" src={process.env.PUBLIC_URL + '/assets/icons/friend_blue.svg'} alt=''/>
                        :
                        <img className="icon" src={process.env.PUBLIC_URL + '/assets/icons/friend_gray.svg'} alt=''/>
                        }
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Footer;