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
import SelectBoxSample from "./pages/sample/SelectBoxSample";
import RecruitmentList from './pages/recruitment/RecruitmentList';
import SelectBoxSample from "./pages/sample/SelectBoxSample";
import ToggleMenuSample from './pages/sample/ToggleMenuSample';
import Search from './pages/Search';
import Tag from "./pages/sample/TagSample";
import Area from "./pages/travel/Area";
import Search from './pages/Search';
import Tag from "./pages/sample/TagSample";
import SignUp from "./pages/sign/SignUp";


function App() {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    return (
        <>
            <Header/>
            <div className="content">
                <Routes>
                    <Route path="/sign-up" element={<SignUp/>}></Route>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/sample-Input" element={<InputSample/>}></Route>
                    <Route path="/sample-ordershadow" element={<CommonBorderShadow/>}></Route>
                    <Route path="/sample-button" element={<ButtonSample/>}></Route>
                    <Route path="/sample-pagination" element={<PaginationSample/>}></Route>
                    <Route path="/sample-hoverdesc" element={<HoverDescriptionSample/>}></Route>
                    <Route path="/recruitments-list" element={<RecruitmentList/>}></Route>
                    <Route path="/sample-selectbox" element={<SelectBoxSample/>}></Route>
                    <Route path="/sample-togglemenu" element={<ToggleMenuSample/>}></Route>
                    <Route path="/search" element={<Search></Search>}></Route>
                    <Route path="/sample-tag" element={<Tag></Tag>}></Route>
                    <Route path="/area" element={<Area/>}></Route>
                </Routes>
            </div>
            <Footer/>
            {isHomePage && <style>{`
                #root {
                  background: rgb(136, 174, 237);
                  background: linear-gradient(90deg, rgba(136, 174, 237, 1) 30%, rgba(190, 212, 242, 1) 100%);
                }
                
                .content {
                    width: 100%;
                    padding: 0;
                }
            `}</style>}
        </>
    );
}

export default App;
