import React from 'react';
import '../../../scss/Footer.scss';
import {useLocation, useNavigate} from 'react-router-dom';
import {SvgIcon} from '@mui/material';
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import SvgButton from '../button/SvgButton';
import BookmarkBorderRoundedIcon from "@mui/icons-material/BookmarkBorderRounded";

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
                    <div className='location' onClick={() => navigate('/area')}>
                        <img
                            className="icon"
                            src={process.env.PUBLIC_URL + `/assets/icons/location_${nowPath === 'area' ? iconColor.blue : iconColor.gray}.svg`}
                            alt=''
                        />
                    </div>
                    <div className='bookmark' onClick={() => navigate('/bookmark')}>
                        <SvgIcon className="icon" component={BookmarkBorderRoundedIcon}/>
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
                    <div className='friend' onClick={() => navigate('/mypage')}>
                        <img
                            className="icon"
                            src={process.env.PUBLIC_URL + `/assets/icons/friend_${nowPath === 'friend' ? iconColor.blue : iconColor.gray}.svg`}
                            alt=''
                        />
                    </div>
                </div>
                {['/my-community', 'review/my', '/recruitment/list', '/recruitment/my', '/review/list'].includes(location.pathname) && (
                    <SvgButton id={'SvgButton'} color={'blue'} svg={<SvgIcon component={AddRoundedIcon}/>}/>
                )}
            </div>
        </div>
    );
}

export default Footer;