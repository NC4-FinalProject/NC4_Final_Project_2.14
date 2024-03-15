import './App.css';
import {Route, Routes} from 'react-router-dom';
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

function App() {
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
                </Routes>
            </div>
            <Footer/>
        </>
    );
}

export default App;
