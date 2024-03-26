import React from 'react'
import "../../scss/pages/community/MyCommunity.scss"
import CustomPagination from '../../components/ui/CustomPagination';
import MyCommunityContent from '../../components/community/MyCommunityContent';

const Mycommunity = () => {
    return (
        <div className='myCommunity_container'>
            <div>
                <h3>가입한 모임</h3>
            </div>
            <MyCommunityContent/>
            <MyCommunityContent/>
            <MyCommunityContent/>
            <MyCommunityContent/>
            <CustomPagination total={"10"}/>
        </div>
    );
}

export default Mycommunity;