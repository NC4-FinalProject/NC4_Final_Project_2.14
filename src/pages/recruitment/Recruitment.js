import React, { useCallback, useEffect, useState } from 'react'
import '../../scss/recruitment/Recruitment.scss';
import SvgButton from '../../components/ui/button/SvgButton';
import Button from '../../components/ui/button/Button';
import Tag from '../../components/ui/Tag';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { removeRecruitment } from '../../apis/recruitmentApi';

const Recruitment = () => {
  const [recruitment, setRecruitment] = useState(`''`);
  const { seq } = useParams();
  const loginNickname = useSelector(state => state.userSlice.loginUserName);

  const dispatch = useDispatch();
  const navi = useNavigate();

  const detailDate = (a) => {
    const milliSeconds = new Date() - a;
    const seconds = milliSeconds / 1000;
    if (seconds < 60) return `방금 전`;
    const minutes = seconds / 60;
    if (minutes < 60) return `${Math.floor(minutes)}분 전`;
    const hours = minutes / 60;
    if (hours < 24) return `${Math.floor(hours)}시간 전`;
    const days = hours / 24;
    if (days < 7) return `${Math.floor(days)}일 전`;
    const weeks = days / 7;
    if (weeks < 5) return `${Math.floor(weeks)}주 전`;
    const months = days / 30;
    if (months < 12) return `${Math.floor(months)}개월 전`;
    const years = days / 365;
    return `${Math.floor(years)}년 전`;
  };
  const nowDate = detailDate(new Date(recruitment.regDate));

  const getRecruitment = useCallback(async () => {
    try {
      const response = await axios.get(
        `/recruitment/${seq}`,
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("ACCESS_TOKEN")}`
          }
        }
      );
      setRecruitment(response.data.item);
    } catch (e) {
      alert('리뷰를 불러오는데 실패했습니다.');
      console.log(e);
    }
  }, [seq]);

  useEffect(() => {
    getRecruitment();
  }, []);

  const textFieldChange = useCallback((e) => {
    setRecruitment({
      ...recruitment,
      [e.target.name]: e.target.value
    });
  }, [recruitment]);

  const modify = useCallback(async (recruitmentData) => {
    try {
      const response = await axios.put(
        `/recruitment/modify`,
        JSON.stringify(recruitmentData),
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${sessionStorage.getItem("ACCESS_TOKEN")}`,
          },
        }
      );

      if (response.data && response.data.item) {
        alert('리뷰가 수정되었습니다.');
        navi(`/recruitment/list`);
      }
    } catch (e) {
      alert('리뷰 수정에 실패했습니다.');
      console.log(e);
    }
  }, [navi]);

  const handleModify = useCallback((e) => {
    e.preventDefault();

    if (loginNickname !== recruitment.writer) {
      alert('작성자만 수정할 수 있습니다.');
      return;
    }

    const recruitmentData = {
      ...recruitment,
      title: e.target.title.value,
      content: e.target.content.value
    };

    modify(recruitmentData);
  }, [recruitment, loginNickname, modify]);

  const remove = useCallback((seq) => {
    dispatch(removeRecruitment(seq));
  }, [dispatch, navi]);
  return (
    <div className='recruitment_container'>
      <form onSubmit={handleModify}>
        <div className="upload_container">
          <img className="image_upload_icon" src={process.env.PUBLIC_URL + '/assets/icons/image_upload.svg'}
            alt='' />
          <label htmlFor="imageInput" id="uploadButton"></label>
        </div>
        <div className="title_container">
          <input
            className='title_text'
            type='text'
            name='title'
            id='title'
            value={recruitment.title}
            aria-readonly={recruitment != null && loginNickname != recruitment.writer ? 'true' : 'false'}
            onChange={textFieldChange}
          />
          <div className='report_box'>
            <SvgButton id={'report'} color={'red'} svg={<img src={`${process.env.PUBLIC_URL}/assets/icons/report.svg`} style={{ width: '21px', height: '21px' }} />} />
          </div>
        </div>
        <div className='content_box'>
          <div className='content_text'>
            <textarea
              className='content_input'
              name='content'
              id='content'
              value={recruitment.content}
              aria-readonly={recruitment != null && loginNickname != recruitment.writer ? 'true' : 'false'}
              onChange={textFieldChange}
            />
          </div>
          <div className='content_regdate'>
            <p name='regDate' id='regDate'>
              {nowDate}
            </p>
          </div>
          <div className='content_writer'>
            <p className='writer_text'
              name='writer'
              id='writer'
            >닉네임: {recruitment.writer}
            </p>
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
        <div className='btn_box'style={
                    recruitment != null && loginNickname === recruitment.writer
                        ? { display: 'block' }
                        : { display: 'none' }
                }>
          <Button id='delete_btn' color={'red'} text={'삭제하기'} type='button' variant='contained' onClick={() => remove(recruitment.seq)} />
          <Button id='modify_btn' color={'green'} text={'수정하기'} type='submit' variant='contained'/>
        </div>
        <div className='btn_box1'style={
                    recruitment != null && loginNickname !== recruitment.writer
                        ? { display: 'block' }
                        : { display: 'none' }
                
        }>
        <Button id='join_btn' color={'green'} text={'가입하기'} />
        </div>
      </form>
    </div>
  );
}

export default Recruitment;