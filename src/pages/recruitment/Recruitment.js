import React from 'react'
import '../../scss/recruitment/Recruitment.scss';
import SvgButton from '../../components/ui/button/SvgButton';
import Button from '../../components/ui/button/Button';
import Tag from '../../components/ui/Tag';

const Recruitment = () => {
  return (
    <div className='recruitment_container'>
      <div className="upload_container">
        <img className="image_upload_icon" src={process.env.PUBLIC_URL + '/assets/icons/image_upload.svg'}
          alt='' />
        <label for="imageInput" id="uploadButton"></label>
      </div>
      <div className="title_container">
        <p> 오늘 오후 6시에 제주에서 롤체할 사람~ 찾습니다 ~~~ </p>
        <div className='report_box'>
          <SvgButton id={'report'} color={'red'} svg={<img src={`${process.env.PUBLIC_URL}/assets/icons/report.svg`} style={{ width: '21px', height: '21px' }} />} />
        </div>
      </div>
      <div className='content_box'>
        <div className='content_text'>
          플레티넘 이상만 구합니다. 오늘 오후 6시에 칼퇴하고 바로 내전 하실분 찾아요 ㅎㅎㅎㅎ 제주도 서귀포시 짱PC방에서 모입니다.
        </div>
        <div className='content_regdate'>
          오후 4 : 30
        </div>
        <div className='content_writer'>
          작성자 : aaaaaa
        </div>
        <div className='content_member_box'>
          <p className='member'>
            <img className="member_img" src={process.env.PUBLIC_URL + '/assets/icons/friend_gray.svg'} alt='' />12/300</p>
        </div>
        <div className='content_tag'>
          <Tag id={'Tag'} text={'#롤체'} color={'blue'}></Tag>
          <Tag id={'Tag'} text={'#11시즌'} color={'blue'}></Tag>
          <Tag id={'Tag'} text={'#성인만'} color={'blue'}></Tag>
          <Tag id={'Tag'} text={'#목요일까지'} color={'blue'}></Tag>
          <Tag id={'Tag'} text={'#끝내야한다'} color={'blue'}></Tag>
        </div>
      </div>
      <div className='btn_box'>
        <Button id='join_btn' color={'green'} text={'가입하기'} />
        <Button id='delete_btn' color={'red'} text={'삭제하기'} />
        <Button id='modify_btn' color={'green'} text={'수정하기'} />
      </div>
    </div>
  );
}

export default Recruitment;