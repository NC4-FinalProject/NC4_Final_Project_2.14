import React, { useEffect, useRef, useState } from 'react';
import '../../scss/pages/chat/ChatRoom.scss';
import Modal from '../../components/ui/Modal';
import { SvgIcon, appBarClasses } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Input from '../../components/ui/lnput/Input';
import { useNavigate, useParams } from 'react-router-dom';
import ChatByPartner from './ChatByPartner';
import ChatByOwn from './ChatByOwn';
import { useSelector } from 'react-redux';
import SockJS from 'sockjs-client';
import * as StompJs from '@stomp/stompjs';

const ChatRoom = ({ chatRoomId }) => {
    const client = useRef({});

    const connect = () => {
        client.current = new StompJs.Client({
            brokerURL: 'ws://localhost:9090/chatting',
            onConnect: () => {
                console.log('connected');
                subscribe();
            },
        });
        client.current.activate();
    };
    // message : 컨트롤러에 보내줄 메세지
    const publish = (message) => {
        if (!client.current.connected) return;

        client.current.publish({
            destination: '/pub/chat',
            body: JSON.stringify({
                chatRoomId: chatRoomId,
                message: message,
            }),
        });

        setMessage('');
    };

    const subscribe = () => {
        client.current.subscribe('/topic/' + chatRoomId, (body) => {
            const json_body = JSON.parse(body.body);
            setMessages((messages) => [...messages, json_body]);
        });
    };

    const disconnect = () => {
        client.current.deactivate();
    };


    // 입력한 채팅 내용
    const [message, setMessage] = useState('');
    // 채팅 내용 리스트
    const [messages, setMessages] = useState([]);

    // 채팅 내용 전송
    const handleSubmit = (e) => {
        e.preventDefault();
        if (message === '') return;
        publish({ chatRoomId, sender: userId, message: message });
    };

    // 기본 dom 선언
    const navi = useNavigate();
    
    // 뒤로가기 버튼 메소드
    const handleBack = () => {
        navi(-1);
    }

    // 유저 아이디
    const userId = useSelector((state) => {
        return state.userSlice.loginid;
    });
    
    // modal 메뉴
    const menu = [
        {
            text: "나가기",
            onclick: () => {console.log('나가기')}
        },
        {
            text: "신고하기",
            style: {color: '#ED3737'},
            onclick: () => {console.log('신고하기')}
        }
    ];
    

    // 초기 렌더링 시 content 영역 style 변경
    useEffect(() => {
        const contentElement = document.querySelector('.content');

        contentElement.style.padding = '0';
        contentElement.style.marginBottom = '0';
        contentElement.style.width = '100%';

        return () => {
            contentElement.style.padding = '';
        };
    }, []);

    useEffect(() => {
        connect();

        return () => {
            disconnect();
        };
    }, []);



  return (
    <div className='ChatRoom'>
        <div className='chat-room-title-container'>
            <div className='chat-room-title-backbutton'>
                <img src={process.env.PUBLIC_URL + '/assets/icons/back_btn.svg'} alt="" onClick={handleBack}/>
            </div>
            <div className='chat-room-title-name'>
                {/* todo : 상대방 이름 구현해야함 */}
                <h1>{}</h1>
            </div>
            <div className='chat-room-title-option'>
                <Modal svg={<SvgIcon component={MoreHorizIcon}/>} item={menu}/>
            </div>
        </div>
        <div className='chat-room-chat-area'>
            {/* chatList에 채팅들 담아와서 내꺼 상대꺼 구분해서 출력 */}
            {/* {chatList.map((chat, idx) => {
                if (chat.sender === userId) {
                    return <ChatByOwn key={idx} chat={chat}></ChatByOwn>
                } else {
                    return <ChatByPartner key={idx} chat={chat}></ChatByPartner>
                }
            })} */}
        </div>     



        <div className='chat-room-input-container'>
            <div className='chat-room-input-file'>
                <img src={process.env.PUBLIC_URL + '/assets/icons/clip.svg'} alt="" />
            </div>
            <form className='chat-room-input-text' onSubmit={handleSubmit}>
                <Input></Input>
            </form>
            <div className='chat-room-input-send'>
                <img src={process.env.PUBLIC_URL + '/assets/icons/send_out.svg'} alt="" />
            </div>
        </div>
    </div>
  );
}

export default ChatRoom;