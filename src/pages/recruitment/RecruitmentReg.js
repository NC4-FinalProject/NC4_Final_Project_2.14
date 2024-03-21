import React from 'react'
import '../../scss/recruitment/RecruitmentReg.scss';
import Button from '../../components/ui/button/Button';
import Input from '../../components/ui/lnput/Input';

const RecruitmentReg = () => {
    return (
        <div className='recruitmentReg_container'>
            <div className='recruitmentReg_community_box'>
                <div className="input-container">
                    <Input placeholder={"제주에서 롤체할 사람 (제 롤 사)"} label={"커뮤니티명"} labelClassName="label-name" readOnly></Input>
                </div>
                <div className="input-container">
                    <Input placeholder={"제목을 입력해주세요."} label={"제 목"} labelClassName="label-name"></Input>
                </div>
            </div>


            <div className='recruitmentReg_content_box'>
                <textarea className='recruitmentReg_content' placeholder='내용을 입력해주세요.'></textarea>
                <Button color={'green'} text={'등록'} id={'Button'} />
            </div>
        </div>
    );
}

export default RecruitmentReg;