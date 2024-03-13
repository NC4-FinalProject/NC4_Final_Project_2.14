import React from 'react';
import '../../../scss/Footer.scss';

const Footer = () => {
  return (
    <div className="Footer">
      <div className="container">
        <div className='location'>
          <img className="icon" src={process.env.PUBLIC_URL + '/assets/icons/location.svg'} alt='로고' />
        </div>
        <div className='heart'>
          <img className="icon" src={process.env.PUBLIC_URL + '/assets/icons/heart.svg'} alt='로고' />
        </div>
        <div className='home'>
          <img className="icon" src={process.env.PUBLIC_URL + '/assets/icons/home.svg'} alt='로고' />
        </div>
        <div className='search'>
          <img className="icon" src={process.env.PUBLIC_URL + '/assets/icons/search.svg'} alt='로고' />
        </div>
        <div className='friend'>
          <img className="icon" src={process.env.PUBLIC_URL + '/assets/icons/friend.svg'} alt='로고' />
        </div>
      </div>
        
    </div>
  );
}

export default Footer;