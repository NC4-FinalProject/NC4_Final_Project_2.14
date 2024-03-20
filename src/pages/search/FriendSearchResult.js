import React from 'react';
import '../../scss/pages/search/Search.scss';
import '../../scss/pages/search/FriendSearchResult.scss';
import Tag from '../../components/ui/Tag';

const FriendSearchResult = ({friendSearchResults}) => {
    const handleSearchResultClick = (e) => {
        console.log(e.target.value);
    }

    return (
        <div className='FreindSearchResult'>
            {friendSearchResults.map((result, index) => (
                <div className='GridContainer' key={index} onClick={handleSearchResultClick}>
                    <div className='GridName'>
                        {result.name}
                    </div>
                    <div className='GridImg'>
                        <img src={result.img} alt={result.name}></img>
                    </div>
                    <div className='GridTagContainer'>
                        {Array.isArray(result.tags) && result.tags.map((tag, tagIndex) => (
                            <div className='GridTag' key={tagIndex}>
                                <Tag text={tag} color={'blue'}></Tag>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default FriendSearchResult;