import './App.css';
import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Header from "./components/ui/layout/Header";
import Footer from "./components/ui/layout/Footer";
import ButtonSample from "./pages/sample/ButtonSample";
import InputSample from "./pages/sample/InputSample";
function App() {
  return (
      <>
            <Header/>
            <div className="content">
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/sample-button" element={<ButtonSample/>}></Route>
                    <Route path="/sample-Input" element={<InputSample/>}></Route>
                </Routes>
            </div>
            <Footer/>
      </>
  );
}

export default App;
