import React from 'react';
import '../../../scss/Footer.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import { SvgIcon } from '@mui/material';
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import SvgButton from '../button/SvgButton';

const Footer = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const nowPath = location.pathname.split('/')[1];

    const iconColor = {
        blue: 'blue',
        gray: 'gray',
    };

    return (
        <div className="Footer">
            <div className="container">
                <div className="icon-wrapper">
                    <a href="/area">
                        <div className='location'>
                            <img
                                className="icon"
                                src={process.env.PUBLIC_URL + `/assets/icons/location_${nowPath === 'area' ? iconColor.blue : iconColor.gray}.svg`}
                                alt=''
                            />
                        </div>
                    </a>
                    <div className='heart'>
                        <img
                            className="icon"
                            src={process.env.PUBLIC_URL + `/assets/icons/heart_${nowPath === 'heart' ? iconColor.blue : iconColor.gray}.svg`}
                            alt=''
                        />
                    </div>
                    <div className='home' onClick={() => navigate('/')}>
                        <img
                            className="icon"
                            src={process.env.PUBLIC_URL + `/assets/icons/home_${nowPath === '' ? iconColor.blue : iconColor.gray}.svg`}
                            alt='홈'
                        />
                    </div>
                    <div className='search' onClick={() => navigate('/search')}>
                        <img
                            className="icon"
                            src={process.env.PUBLIC_URL + `/assets/icons/search_${nowPath === 'search' ? iconColor.blue : iconColor.gray}.svg`}
                            alt=''
                        />
                    </div>
                    <div className='friend' onClick={() => navigate('friend')}>
                        <img
                            className="icon"
                            src={process.env.PUBLIC_URL + `/assets/icons/friend_${nowPath === 'friend' ? iconColor.blue : iconColor.gray}.svg`}
                            alt=''
                        />
                    </div>
                </div>
                {['/my-community', '/my-review', '/recruitments-list', '/my-recruitments', '/review-list'].includes(location.pathname) && (
                    <SvgButton id={'SvgButton'} color={'blue'} svg={<SvgIcon component={AddRoundedIcon} />} />
                )}
            </div>
        </div>
    );
}

export default Footer;