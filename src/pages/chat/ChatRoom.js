import React, {useCallback, useEffect, useRef, useState} from 'react';
import '../../scss/pages/chat/ChatRoom.scss';
import Modal from '../../components/ui/Modal';
import {Button, SvgIcon} from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Input from '../../components/ui/lnput/Input';
import { useNavigate, useParams } from 'react-router-dom';
import ChatByPartner from './ChatByPartner';
import ChatByOwn from './ChatByOwn';
import {connect, useDispatch, useSelector} from 'react-redux';
import {CompatClient, Stomp, StompJS} from '@stomp/stompjs';
import SockJs from 'sockjs-client';
import {deleteChatRoom, getMessages} from "../../apis/chatRoomApi";
import Menu from "@mui/material/Menu";
import {Anchor} from "@mui/icons-material";
import MenuItem from "@mui/material/MenuItem";

const ChatRoom = () => {
    const navi = useNavigate();
    const dispatch = useDispatch();

    const messagesEndRef = useRef(null);
    const [isPartnerOnline, setIsPartnerOnline] = useState(false);
    const [unReadMessageCnt, setUnReadMessageCnt] = useState(0);
    const [lastMessageTime, setLastMessageTime] = useState(null);
    const isAlive = useRef(true);

    const { chatRoomId } = useParams();
    const messageList = useSelector(state => state.chatRoomSlice.messages);
    const currentUserId = useSelector(state => state.userSlice.loginUserId);
    const [selectedFile, setSelectedFile] = useState(null);
    const token = sessionStorage.getItem("ACCESS_TOKEN");

    // 소켓 연결
    var client = Stomp.over(() => {
       return new SockJs('http://localhost:9090/chatting');
    });

    const clientRef = useRef(null);
    useEffect(() => {
        if (clientRef.current == null) {
            clientRef.current = Stomp.over(() => new SockJs('http://localhost:9090/chatting'));
        }

        const client = clientRef.current;

        client.connect({}, () => {
            client.subscribe('/sub/'+ chatRoomId, (message) => {
                dispatch(getMessages(chatRoomId));
            });
        });

        // 소켓 연결 해제
        return () => {
            if (client) {
                client.disconnect();
            }
        };

    }, [chatRoomId, dispatch]);

    // 입력한 채팅 내용
    const [message, setMessage] = useState('');

    // 채팅 내용 전송
    const handleSendMessage = (e) => {
        e.preventDefault();
        if (message === '' ) {
            return;
        } else if (!clientRef.current.connected){
            alert('서버와 연결이 끊겼습니다. 새로고침 후 다시 시도해주세요.');
            return;
        }

        // 메세지 전송 제한
        const now = Date.now();
        if (lastMessageTime && now - lastMessageTime < 500) {
            alert('메시지 전송은 1초에 한 번만 가능합니다.');
            return;
        }

        clientRef.current.send(
            `/pub/send-message`,
            {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            JSON.stringify({
                chatRoomId: chatRoomId,
                sender: currentUserId,
                message: message,
                img: selectedFile,
                sendDate : new Date().toISOString()
            })
        );
        setMessage('');
        setLastMessageTime(now);
        dispatch(getMessages(chatRoomId));
    };
    
    // 뒤로가기 버튼 메소드
    const handleBack = () => {
        navi('/chat');
    };

    // 파일 삽입 메서드
    const handleFileInput = (e) => {
        setSelectedFile(e.target.files[0]);
        console.log("==========" + selectedFile);
    };

    // 초기 렌더링 시 content 영역 style 변경
    useEffect(() => {
        const contentElement = document.querySelector('.content');

        contentElement.style.padding = '0';
        contentElement.style.marginBottom = '0';
        contentElement.style.width = '100%';
        dispatch(getMessages(chatRoomId));
        return () => {
            contentElement.style.padding = '';
        };
    }, []);

    // dispatch 될 때 자동으로 스크롤을 내려줌
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    });
    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    }

    // 채팅방 삭제
    const handleExit = (e) => {
        dispatch(deleteChatRoom(chatRoomId));
        isAlive.current = false;
    }

    // // 채팅방 삭제 후 이전 페이지로 이동
    // useEffect(() => {
    //     alert('채팅방이 삭제되었습니다.');
    //     navi('/chat');
    // }, [isAlive]);
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
                <MoreHorizIcon
                    id="menu-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                </MoreHorizIcon>
                <Menu
                    id="basic-menu"
                    open={open}
                    anchorEl={anchorEl}
                    onClose={() => setAnchorEl(null)}
                    MenuListProps={{
                        'aria-labelledby': 'menu-button',
                    }}
                >
                    <MenuItem onClick={handleExit}>채팅방 삭제</MenuItem>
                </Menu>

                {/*<Modal svg={<SvgIcon component={MoreHorizIcon}/>}/>*/}
            </div>
        </div>
        <div className='chat-room-chat-area'>
            {/* messageList에 채팅들 담아와서 내꺼 상대꺼 구분해서 출력 */}
            {messageList && messageList.map((message, idx) => {
                if (message && message.message) {
                    if (message.sender === currentUserId) {
                        return <ChatByOwn key={idx} message={message.message}></ChatByOwn>
                    } else {
                        return <ChatByPartner key={idx} message={message.message}></ChatByPartner>
                    }
                }
            })}
            <div ref={messagesEndRef}></div>
        </div>     



        <div className='chat-room-input-container'>
            <div className='chat-room-input-file'>
                <label htmlFor={'fileInput'}>
                    <img src={process.env.PUBLIC_URL + '/assets/icons/clip.svg'} alt="" />
                </label>
                <input id={'fileInput'} type={"file"} style={{display: 'none'}} onChange={handleFileInput} />
            </div>
            <form className='chat-room-input-text' onSubmit={handleSendMessage}>
                <Input
                    type='text'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                ></Input>
            </form>
            <div className='chat-room-input-send' onClick={handleSendMessage}>
                <img src={process.env.PUBLIC_URL + '/assets/icons/send_out.svg'} alt="" />
            </div>
        </div>
    </div>
  );
}

export default ChatRoom;