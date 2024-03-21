import React from 'react';
import '../../scss/pages/alarm/AlarmDetail.scss';
import Modal from '../../components/ui/Modal';
import {SvgIcon} from "@mui/material";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const AlarmDetail = () => {
  const alarmList = [
    {
      id : 1,
      type : 'newComment',
      source : 'community',
      sourceId : 1,
      hasRead : false
    },
    {
      id : 2,
      type : 'newComment',
      source : 'review',
      sourceId : 1,
      hasRead : true
    },
    {
      id : 3,
      type : 'newComment',
      source : 'travel',
      sourceId : 1,
      hasRead : false
    },
    {
      id : 4,
      type : 'newChat',
      source : 'chat',
      sourceId : 1,
      hasRead : false
    }
  ]

  // 메뉴창
  const menu = [
    {
      text: "읽음표시",
      onclick: () => {console.log('읽음표시')}
    },
    {
      text: "삭제하기",
      style: {color: '#ED3737'},
      onclick: () => {console.log('삭제')}
    }
  ]

  return (
    <div className='AlarmDetail'>
      <div className='AlarmDetailTitle'>
        읽지 않은 알림 총 {alarmList.filter(alarm => !alarm.hasRead).length}개
      </div>
      {alarmList.map(alarm => {
        return (
          <div className='AlarmDetailContentContainer' key={alarm.id}>
            <div className='AlarmDetailContentReadIcon'
                 style={{ backgroundImage: alarm.hasRead ? '' : `url(/assets/icons/red_dot.svg)`}}>
            </div>
            <div className='AlarmDetailContentType'>
              {alarm.type === 'newComment' ? '댓글' : '채팅'}
            </div>
            <div className='AlarmDetailContent'>
              {alarm.source}에 새로운 {alarm.type}이 달렸습니다.
            </div>
            <div className='AlarmDetailContentOption'>
            <Modal svg={<SvgIcon component={MoreHorizIcon}/>} item={menu}/>
            </div>
          </div>
        )
      }
      )}
    </div>
  );
}

export default AlarmDetail;