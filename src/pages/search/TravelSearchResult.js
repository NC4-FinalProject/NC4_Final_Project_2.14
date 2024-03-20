import React from 'react';
import '../../scss/search/TravelSearchResult.scss';

const TravelSearchResult = ({ travelSearchResults }) => {
  return (
    <>{travelSearchResults.map((travelSearchResult, index) => (
      <div className='TravelSearchResult'>
        <div className='ImgContainer'>
          <img src={travelSearchResult.img} alt='travel'></img>
        </div>
        <div className='ContentContainer'>
          <div className='Content'>
            <div className='Title'>
              {travelSearchResult.title}
            </div>
            <div className='DetailAddr'>
              {travelSearchResult.detailAddr}
            </div>
            <div className='Tel'>
              {travelSearchResult.tel}
            </div>
            <div className='LocationAndLikeContainer'>
              <div className='LocationContainer'>
                <div className='LocationIcon'></div>
                <div className='Location'>
                  {travelSearchResult.location}
                </div>
              </div>
              <div className='LikeContainer'>
                <div className='LikeIcon'></div>
                <div className='Like'>
                  {travelSearchResult.like}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ))}
    </>
  );
}

export default TravelSearchResult;