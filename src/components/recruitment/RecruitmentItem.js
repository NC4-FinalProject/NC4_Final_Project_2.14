import React, { useEffect } from 'react'
import '../../scss/recruitment/RecruitmentList.scss';
import Tag from '../ui/Tag';
import { Link } from 'react-router-dom';

const RecruitmentItem = ({ recruitment }) => {
  useEffect(() => {
  }, [recruitment]);

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
  return (

    <div className='recruitment_box1'>
      <Link to={`/recruitment/${recruitment.seq}`}>
        <img className='img2' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhSkozbxrfkXMlzAUfgmUenBijb8uDW6FjUg&usqp=CAU'></img>
      </Link>

      <div className='recruitment_content_box'>
        <Link to={`/recruitment/${recruitment.seq}`}>
          <p className='recruitment_content1'>
            {recruitment.title}
            <span className='recruitment_regdate'>{nowDate}</span>
          </p>
        </Link>
        <p className='recruitment_content2'>
          {recruitment.content}
        </p>
        <div className='tag_box'>
          <Tag className='Tag' text={'#롤체'} color={'blue'}></Tag>
          <Tag className='Tag' text={'#11시즌'} color={'blue'}></Tag>
          <Tag className='Tag' text={'#성인만'} color={'blue'}></Tag>
          <Tag className='Tag' text={'#목요일까지'} color={'blue'}></Tag>
          <div className='member_box'>
            <p className='member'><img className="member_img" src={process.env.PUBLIC_URL + '/assets/icons/friend_gray.svg'} alt='' />12/300</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecruitmentItem;