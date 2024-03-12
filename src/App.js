import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/ui/layout/Layout';
import Home from './components/home/Home';

function App() {
  return (
    <Routes>
      <Route element={<Layout></Layout>}>
        <Route index element={<Home></Home>}></Route>
      </Route>
    </Routes>
  );
}

export default App;
