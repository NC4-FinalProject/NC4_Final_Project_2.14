import React from 'react';
import '../../scss/pages/search/PopularSearchResult.scss';

const PopularSearchResult = ({popularSearchList}) => {
    return (
        <div className='section-search-result-popular'>
            {(popularSearchList).map((result, index) => {
                return (
                    <div className='result-list' key={index}>
                        {index + 1}. {result}
                    </div>
                );
            })}
        </div>
    );
}

export default PopularSearchResult;