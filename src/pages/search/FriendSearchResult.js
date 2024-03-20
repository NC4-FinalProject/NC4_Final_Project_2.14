import React from 'react';
import '../../scss/search/Search.scss';
import '../../scss/search/FriendSearchResult.scss';
import Tag from '../../components/ui/Tag';

const FriendSearchResult = ({friendSearchResults}) => {
    return (
        <div className='FreindSearchResult'>
            {friendSearchResults.map((result, index) => (
                <div className='grid-container' key={index}>
                    <div className='grid-name'>
                        {result.name}
                    </div>
                    <div className='grid-img'>
                        <img src={result.img} alt={result.name}></img>
                    </div>
                    <div className='grid-tag-container'>
                        {Array.isArray(result.tags) && result.tags.map((tag, tagIndex) => (
                            <div className='grid-tag' key={tagIndex}>
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