import React, { useEffect } from 'react'
import Tag from '../ui/Tag';
import { Link } from 'react-router-dom';

const MyRecruitmentContentItem = ({ recruitments }) => {
  useEffect(() => {
  }, [recruitments]);

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
  const nowDate = detailDate(new Date(recruitments.regDate));

  return (
    <div className='myRecruitment_content_box'>
      <Link className='img2' to={`/recruitment/${recruitments.seq}`}>
        <img
          className='img2'
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhSkozbxrfkXMlzAUfgmUenBijb8uDW6FjUg&usqp=CAU'
        ></img>
      </Link>

      <div className='content_box'>
        <Link to={`/recruitment/${recruitments.seq}`}>
          <p className='content1'>
            {recruitments.title}
          </p>
        </Link>
        <span className='regdate'>{nowDate}</span>

        <p className='content2'>
          {recruitments.content}
        </p>
        <div className='tag_box'>
          <Tag id={'Tag'} text={'#롤체'} color={'blue'}></Tag>
          <Tag id={'Tag'} text={'#11시즌'} color={'blue'}></Tag>
          <Tag id={'Tag'} text={'#성인만'} color={'blue'}></Tag>
          <Tag id={'Tag'} text={'#목요일까지'} color={'blue'}></Tag>
          <Tag id={'Tag'} text={'#끝내야한다'} color={'blue'}></Tag>
          <p className='member'><img className="member_img" src={process.env.PUBLIC_URL + '/assets/icons/friend_gray.svg'} alt='' />12/300</p>
        </div>
      </div>
    </div>
  );
}

export default MyRecruitmentContentItem;