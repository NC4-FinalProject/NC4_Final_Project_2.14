import React from 'react'
import '../../scss/recruitment/Recruitment.scss';
import SvgButton from '../../components/ui/button/SvgButton';
import Button from '../../components/ui/button/Button';

const Recruitment = () => {
  return (
    <div className='recruitment_container'>
      <div className='recruitment_community_box'>
        <img className='img1' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhSkozbxrfkXMlzAUfgmUenBijb8uDW6FjUg&usqp=CAU'></img>

        <h2>제주에서 롤체할 사람 (제 롤 사)</h2>
      </div>

      <div className='title_box'>
        <div className='title'>오늘 오후6시에 제주에서 롤체할 사람~ 찾습니다 ~~ ㅎㅎㅎ !!</div>
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
      </div>
      <div className='btn_box'>
        <Button id='join_btn' color={'green'} text={'가입하기'} />
        <Button id='delete_btn' color={'red'} text={'삭제하기'}/>
        <Button id='modify_btn' color={'green'} text={'수정하기'}/>
      </div>
    </div>
  );
}

export default Recruitment;