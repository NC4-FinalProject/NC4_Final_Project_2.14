import React from 'react';
import '../../../scss/Footer.scss';
import {useLocation, useNavigate} from 'react-router-dom';
import {SvgIcon} from '@mui/material';
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import SvgButton from '../button/SvgButton';
import BookmarkBorderRoundedIcon from "@mui/icons-material/BookmarkBorderRounded";
import {useSelector} from "react-redux";

const Footer = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const nowPath = location.pathname.split('/')[1];

    const isLogin = useSelector(state => state.userSlice.isLogin);

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
                    <div className='bookmark'
                         onClick={() => isLogin ? navigate('/bookmark') : navigate('/user/sign-in')}>
                        <SvgIcon className="icon" component={BookmarkBorderRoundedIcon}/>
                    </div>
                    <div className='home' onClick={() => navigate('/')}>
                        <img
                            className="icon"
                            src={process.env.PUBLIC_URL + `/assets/icons/home_${nowPath === '' ? iconColor.blue : iconColor.gray}.svg`}
                            alt='홈'
                        />
                    </div>
                    <div className='search' onClick={() => navigate('/review/list')}>
                        <img
                            className="icon"
                            src={process.env.PUBLIC_URL + `/assets/icons/review_${nowPath === 'review' ? iconColor.blue : iconColor.gray}.svg`}
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
                {['review/my', '/review/list'].includes(location.pathname) && (
                    <SvgButton id={'SvgButton'} color={'blue'} svg={<SvgIcon component={AddRoundedIcon}/>}
                               onClick={() => navigate('/area')}/>
                )}
                {/*{['/my-community', 'review/my', '/recruitment/list', '/recruitment/my', '/review/list'].includes(location.pathname) && (*/}
                {/*    <SvgButton id={'SvgButton'} color={'blue'} svg={<SvgIcon component={AddRoundedIcon}/>}/>*/}
                {/*)}*/}
            </div>
        </div>
    );
}

export default Footer;