import React from 'react'
import '../../scss/recruitment/RecruitmentReg.scss';
import Button from '../../components/ui/button/Button';

const RecruitmentReg = () => {
    return (
        <div className='recruitmentReg_container'>
            <div className='recruitmentReg_community_box'>
                <div className='recruitmentReg_community_name'>
                    <h3>커뮤니티 명</h3>
                </div>
                <div className='recruitmentReg_community_nameInput'>
                    <h3 className='text1'>제주에서 롤체할 사람 (제 롤 사)</h3>
                </div>
            </div>

            <div className='recruitmentReg_community_box'>
                <div className='recruitmentReg_community_name'>
                    <h3>제 목</h3>
                </div>
                <input className='recruitmentReg_community_nameInput'></input>
            </div>
            <div className='recruitmentReg_content_box'>
                <textarea className='recruitmentReg_content'></textarea>
                <Button color={'green'} text={'등록'} id={'Button'} />
            </div>
        </div>
    );
}

export default RecruitmentReg;