import React from 'react'
import '../../scss/recruitment/RecruitmentReg.scss';
import Button from '../../components/ui/button/Button';
import Input from '../../components/ui/lnput/Input';

const RecruitmentReg = () => {
    return (
        <div className='recruitmentReg_container'>
            <form >
                <div hidden>
                    <Input name={'writer'} id={'writer'}></Input>
                </div>
                <div className='recruitmentReg_community_box'>
                    <div className="input-container">
                        <Input className={'title'} placeholder={"제주에서 롤체할 사람 (제 롤 사)"} label={"커뮤니티명"} labelClassName="label-name" readOnly></Input>
                    </div>
                    <div className="input-container">
                        <Input placeholder={"제목을 입력해주세요."} label={"제 목"} name={'title'} id={'title'} labelClassName="label-name" required></Input>
                    </div>
                </div>

                <div className='recruitmentReg_content_box'>
                    <textarea className='recruitmentReg_content' placeholder='내용을 입력해주세요.' name={'content'} id={'content'} required></textarea>
                    <Button type={'submit'} name={'Button'} color={'green'} text={'등록'} id={'Button'} />
                </div>
            </form>
        </div>
    );
}

export default RecruitmentReg;