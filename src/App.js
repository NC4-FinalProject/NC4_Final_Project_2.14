import './App.css';
import {Route, Routes, useLocation} from 'react-router-dom';
import Home from './pages/Home';
import Header from "./components/ui/layout/Header";
import Footer from "./components/ui/layout/Footer";
import ButtonSample from "./pages/sample/ButtonSample";
import CommonBorderShadow from "./pages/sample/CommonBorderShadow";
import InputSample from "./pages/sample/InputSample";
import PaginationSample from "./pages/sample/PaginationSample";
import HoverDescriptionSample from "./pages/sample/HoverDescriptionSample";
import RecruitmentList from './pages/recruitment/RecruitmentList';
import SelectBoxSample from "./pages/sample/SelectBoxSample";
import ToggleMenuSample from './pages/sample/ToggleMenuSample';
import TagSample from './pages/sample/TagSample';
import ModalSample from "./pages/sample/ModalSample";
import Area from "./pages/travel/Area";
import RecruitmentReg from './pages/recruitment/RecruitmentReg';
import Recruitment from './pages/recruitment/Recruitment';
import MyRecruitment from './pages/recruitment/MyRecruitment';
import ReviewList from './pages/review/ReviewList';
import Search from './pages/search/Search';
import SignUp from "./pages/sign/SignUp";
import SignIn from "./pages/sign/SignIn";
import MyPage from "./pages/user/MyPage";
import UserModify from './pages/user/UserModify';
import Review from './pages/review/Review';
import ReviewReg from './pages/review/ReviewReg';
import MyReview from './pages/review/MyReview';
import NewToggleMenuSample from './pages/sample/NewToggleMenuSample';
import ViewTravelInfo from "./pages/travel/ViewTravelInfo";
import ViewBookmarkTravel from "./pages/travel/ViewBookmarkTravel";
import AlarmDetail from './pages/alarm/AlarmDetail';
import Chat from './pages/chat/Chat';
import MyCommunity from './pages/community/MyCommunity';
import MyCommunityContent2 from './components/community/MyCommunityContent2';
import UserDetail from './pages/user/UserDetail';
import CreareCommunity from './pages/community/CreateCommunity';
import CommunityRename from './pages/community/CommunityRename';
import Community from './pages/community/Community';
import ChatRoom from './pages/chat/ChatRoom';
import Tag from './components/ui/Tag';
import Modal from './components/ui/Modal';
import {Provider} from 'react-redux';
import {store} from './store/store';
import Report from './pages/user/Report';
import CommunityWriteModalSample from './pages/community/CommunityWriteModalSample';
import CommunityFeedComment from './components/community/CommunityFeedComment';
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';


export let persiststore = persistStore(store);

function App() {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    return (
        <>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persiststore}>
                    {/* <Header/> */}
                    {/*{location.pathname !== '/chat-room' && <Header/>}*/}
                    {!/^\/chat\/\d+$/.test(location.pathname) && <Header/>}
                    <div className="content">
                        <Routes>
                            {/* Sample */}
                            <Route path="/sample-Input" element={<InputSample/>}></Route>
                            <Route path="/sample-ordershadow" element={<CommonBorderShadow/>}></Route>
                            <Route path="/sample-button" element={<ButtonSample/>}></Route>
                            <Route path="/sample-pagination" element={<PaginationSample/>}></Route>
                            <Route path="/sample-hoverdesc" element={<HoverDescriptionSample/>}></Route>
                            <Route path="/sample-selectbox" element={<SelectBoxSample/>}></Route>
                            <Route path="/sample-togglemenu" element={<ToggleMenuSample/>}></Route>
                            <Route path="/sample-tag" element={<Tag></Tag>}></Route>
                            <Route path="/sample-modal" element={<Modal></Modal>}></Route>
                            <Route path="/sample-new-togglemenu" element={<NewToggleMenuSample/>}></Route>
                            <Route path="/sample-community-feed-comment" element={<CommunityFeedComment/>}></Route>
                            <Route path="/sample-tag" element={<TagSample></TagSample>}></Route>
                            <Route path="/sample-modal" element={<ModalSample></ModalSample>}></Route>
                            {/* page */}
                            <Route path="/" element={<Home/>}></Route>
                            <Route path="/report" element={<Report/>}></Route>
                            <Route path="/user-detail" element={<UserDetail/>}></Route>
                            <Route path="/user-modify" element={<UserModify/>}></Route>
                            <Route path="/mypage" element={<MyPage/>}></Route>
                            <Route path="/user/sign-up" element={<SignUp/>}></Route>
                            <Route path="/user/sign-in" element={<SignIn/>}></Route>
                            <Route path="/recruitment/list" element={<RecruitmentList/>}></Route>
                            <Route path="/search" element={<Search></Search>}></Route>
                            <Route path="/area" element={<Area/>}></Route>
                            <Route path="/travel/:id" element={<ViewTravelInfo/>}></Route>
                            <Route path="/bookmark" element={<ViewBookmarkTravel/>}></Route>
                            <Route path="/recruitment/reg" element={<RecruitmentReg/>}></Route>
                            <Route path="/recruitment" element={<Recruitment/>}></Route>
                            <Route path="/recruitment/my" element={<MyRecruitment/>}></Route>
                            <Route path="/review/list" element={<ReviewList/>}></Route>
                            <Route path="/review/:seq" element={<Review/>}></Route>
                            <Route path="/review/reg" element={<ReviewReg/>}></Route>
                            <Route path="/review/my" element={<MyReview/>}></Route>
                            <Route path="/alarm-detail" element={<AlarmDetail/>}></Route>
                            <Route path="/chat" element={<Chat/>}></Route>
                            <Route path="/my-community" element={<MyCommunity/>}></Route>
                            <Route path="/my-community-content" element={<MyCommunityContent2/>}></Route>
                            <Route path="/community-create" element={<CreareCommunity/>}></Route>
                            <Route path="/community-rename" element={<CommunityRename/>}></Route>
                            <Route path="/community" element={<Community/>}></Route>
                            <Route path="/chat/:chatRoomId" element={<ChatRoom/>}></Route>
                            <Route path="/community-feed-comment-sample" element={<CommunityFeedComment/>}></Route>
                            <Route path="/community-write" element={<CommunityWriteModalSample/>}></Route>
                        </Routes>
                        {/*{location.pathname !== '/chat-room' && <Footer/>}*/}
                        {!/^\/chat\/\d+$/.test(location.pathname) && <Footer/>}
                    </div>
                    {/* <Footer/> */}
                    {isHomePage && <style>{`
                #root {
                  background: linear-gradient(90deg, rgba(136, 174, 237, 1) 30%, rgba(190, 212, 242, 1) 100%);
                }
                
                .content {
                    width: 100%;
                    padding: 0;
                }
            `}</style>}
                </PersistGate>
            </Provider>
        </>
    );
}

export default App;
