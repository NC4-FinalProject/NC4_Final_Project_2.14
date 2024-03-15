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
import SelectboxSample from "./pages/sample/SelectboxSample";

import Search from './pages/Search';
import Tag from "./pages/sample/TagSample";


function App() {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    return (
        <>
            <Header/>
            <div className="content">
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/sample-Input" element={<InputSample/>}></Route>
                    <Route path="/sample-ordershadow" element={<CommonBorderShadow/>}></Route>
                    <Route path="/sample-button" element={<ButtonSample/>}></Route>
                    <Route path="/sample-pagination" element={<PaginationSample/>}></Route>
                    <Route path="/sample-hoverdesc" element={<HoverDescriptionSample/>}></Route>
                    <Route path="/sample-selectbox" element={<SelectboxSample/>}></Route>
                    <Route path="/search" element={<Search></Search>}></Route>
                    <Route path="/sample-tag" element={<Tag></Tag>}></Route>
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
