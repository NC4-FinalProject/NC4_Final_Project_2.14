// import React, { useEffect, useState } from 'react';
// import '../../scss/pages/chat/ChatRoom.scss';
// import Modal from '../../components/ui/Modal';
// import { SvgIcon } from '@mui/material';
// import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
// import Input from '../../components/ui/lnput/Input';
// import { useNavigate, useParams } from 'react-router-dom';
// import ChatByPartner from './ChatByPartner';
// import ChatByOwn from './ChatByOwn';
// import { useSelector } from 'react-redux';
// // import * as StompJs from '@stomp/stompjs';

// const ChatRoom = ( ) => {
//     // // 소켓 프록시 설정
//     // const { createProxyMiddleware } = require('http-proxy-middleware');

//     // module.exports = (app) => {
//     //     resolve: {
//     //         fallback: {
//     //             "http": require.resolve("stream-http")
//     //         }
//     //     }

//     //     app.use(
//     //         "/ws",
//     //         createProxyMiddleware({ target: "http://localhost:3000", ws: true })
//     //     );
//     // };

//     // 테스트용 코드
//     const navi = useNavigate();
//     const param = useParams();
//     const chatRoomId = param.chatRoomId;
//     const token = JSON.stringify(localStorage.getItem('token'));

//     const [client, changeClient] = useState(null);
//     const [chat, setChat] = useState("");
//     const [chatList, setChatList] = useState([]);

//     const userId = useSelector((state) => {
//         return state.userSlice.loginid;
//     });

//     const connect = () => {
//         // 소켓 연결
//         try {
//             const clientdata = new StompJs.Client({
//                 brokerURL: 'ws://localhost:3000/chat-room',
//                 connectHeaders: {
//                     Authorization: token
//                 },
//                 debug: function (str) {
//                     console.log(str);
//                 },
//                 reconnectDelay: 5000,
//                 heartbeatIncoming: 4000,
//                 heartbeatOutgoing: 4000,
//             });
//             clientdata.onConnect = function () {
//                 clientdata.subscribe('/sub/channels/' + chatRoomId, callback);
//             };
//             clientdata.activate();
//             changeClient(clientdata);
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     const disConnect = () => {
//         if (client == null) {
//             return;
//         }
//         client.deactivate();
//     };

//     const callback = (message) => {
//         if (message.body) {
//             let msg = JSON.parse(message.body);
//             setChatList((chats) => [...chats, msg]);
//         }
//     };

//     const sendChat = () => {
//         if(chat === "") {
//             return;
//         }
//         client.publish({
//             destination: '/pub/chat/' + chatRoomId,
//             body: JSON.stringify({
//                 type: "",
//                 sender: userId,
//                 channelId : "1",
//                 data : chat,
//             }),
//         });
//         setChat("");
//     };

//     useEffect(() => {
//         connect();

//         return () => disConnect();
//     }, []);

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setChat(e.target.value);
//     }

//     const handleBack = () => {
//         navi(-1);
//     }

    
//     const menu = [
//         {
//             text: "나가기",
//             onclick: () => {console.log('나가기')}
//         },
//         {
//             text: "신고하기",
//             style: {color: '#ED3737'},
//             onclick: () => {console.log('신고하기')}
//         }
//     ];
    
//     const userInfo = {
//         name: '김태현',
//         img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7MnOcQUfqtgTKRpCld7E-_P2JCyF-QMlesD887gUZ6A&s',
//         tag1: '태그1',
//         tag2: '태그2',
//         tag3: '태그3'
//     }

//     // 초기 렌더링 시 content 영역 style 변경
//     useEffect(() => {
//         const contentElement = document.querySelector('.content');

//         contentElement.style.padding = '0';
//         contentElement.style.marginBottom = '0';
//         contentElement.style.width = '100%';

//         return () => {
//             contentElement.style.padding = '';
//         };
//     }, []);

//   return (
//     <div className='ChatRoom'>
//         <div className='chat-room-title-container'>
//             <div className='chat-room-title-backbutton'>
//                 <img src={process.env.PUBLIC_URL + '/assets/icons/back_btn.svg'} alt="" onClick={handleBack}/>
//             </div>
//             <div className='chat-room-title-name'>
//                 <h1>{userInfo.name}</h1>
//             </div>
//             <div className='chat-room-title-option'>
//                 <Modal svg={<SvgIcon component={MoreHorizIcon}/>} item={menu}/>
//             </div>
//         </div>
//         <div className='chat-room-chat-area'>
//             {chatList.map((chat, idx) => {
//                 if (chat.sender === userId) {
//                     return <ChatByOwn key={idx} chat={chat}></ChatByOwn>
//                 } else {
//                     return <ChatByPartner key={idx} chat={chat}></ChatByPartner>
//                 }
//             })}
//         </div>     



//         <div className='chat-room-input-container'>
//             <div className='chat-room-input-file'>
//                 <img src={process.env.PUBLIC_URL + '/assets/icons/clip.svg'} alt="" />
//             </div>
//             <form className='chat-room-input-text' onSubmit={handleSubmit}>
//                 <Input></Input>
//             </form>
//             <div className='chat-room-input-send'>
//                 <img src={process.env.PUBLIC_URL + '/assets/icons/send_out.svg'} alt="" />
//             </div>
//         </div>
//     </div>
//   );
// }

// export default ChatRoom;