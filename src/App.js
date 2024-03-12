import './App.css';
import {Route, Routes} from 'react-router-dom';
import Home from './components/home/Home';
import Header from "./components/ui/layout/Header";
import Footer from "./components/ui/layout/Footer";

function App() {
  return (
      <>
          <Header/>
          <div className="content">
              <Routes>
                  <Route path="/" element={<Home/>}></Route>
              </Routes>
          </div>
          <Footer/>
      </>
  );
}

export default App;
