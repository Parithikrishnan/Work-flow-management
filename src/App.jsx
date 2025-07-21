import './App.css';
import LoginPage from './LoginPage.jsx';
import bgImage from './assets/bg.jpg';
import { Route,Routes } from 'react-router-dom';


function App() {
  return (
    <div
      className='text-white h-[100vh] flex justify-center items-center bg-cover'
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <Routes>
        <Route path='login' element = {<LoginPage/>} />
      </Routes>
    </div>
  );
}

export default App;
