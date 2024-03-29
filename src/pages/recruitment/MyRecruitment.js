import React from 'react'
import '../../scss/recruitment/MyRecruitment.scss';
import CustomPagination from '../../components/ui/CustomPagination';
import MyRecruitmentContentList from '../../components/recruitment/MyRecruitmentContentList';


const MyRecruitment = () => {
    return (
        <div className='myRecruitment_container'>
            <div>
                <h3>내 모집글</h3>
            </div>
            <MyRecruitmentContentList/>
            <CustomPagination total={"10"}/>
        </div>
    );
}

export default MyRecruitment;