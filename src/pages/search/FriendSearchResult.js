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

    // 해당 친구 정보 모달창 열기
    const handleFreiendDetailModal = (result) => {
        return () => {
            setUserInfo(result);    // userinfo에 해당 유저 정보 저장
            openModal();
        }
    }

    return (
        <>
            {/* 유저 상세 모달창 */}
            <FriendDetailModal userInfo={userInfo} isOpen={isModalOpen} close={closeModal} />
            {/* 결과 표출 */}
            <div className='FreindSearchResult'>
                {friendSearchResults.map((result, index) => (
                    <div className='GridContainer' key={index}>
                        <div className='GridName'>
                            <p onClick={handleFreiendDetailModal(result)}>{result.searchResultName}</p>
                        </div>
                        <div className='GridImg'>
                            <img src={result.searchResultImg} onClick={handleFreiendDetailModal(result)}></img>
                        </div>
                        <div className='GridTagContainer'>
                            {Array.isArray(result.userTags) && result.userTags.map((tag, tagIndex) => (
                                // <div className='GridTag' key={tagIndex}>
                                    <Tag text={tag} color={'blue'} key={tagIndex}></Tag>
                                // </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default FriendSearchResult;