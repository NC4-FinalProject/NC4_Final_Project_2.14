import React, { useState } from 'react';
import '../../scss/pages/search/Search.scss';
import '../../scss/pages/search/FriendSearchResult.scss';
import Tag from '../../components/ui/Tag';
import FriendDetailModal from '../chat/FriendDetailModal';

const FriendSearchResult = ({friendSearchResults}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [userInfo, setUserInfo] = useState({});

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const handleFreiendDetailModal = (result) => {
        return () => {
            setUserInfo(result);
            openModal();
        }
    }

    return (
        <>
            <FriendDetailModal userInfo={userInfo} isOpen={isModalOpen} close={closeModal} />
            <div className='FreindSearchResult'>
                {friendSearchResults.map((result, index) => (
                    <div className='GridContainer' key={index}>
                        <div className='GridName'>
                            <p onClick={handleFreiendDetailModal(result)}>{result.name}</p>
                        </div>
                        <div className='GridImg'>
                            <img src={result.img} alt={result.name} onClick={handleFreiendDetailModal(result)}></img>
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
        </>
    );
}

export default FriendSearchResult;