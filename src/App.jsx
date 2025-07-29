import './App.css';
import LoginPage from './LoginPage.jsx';
import RegisterPage from './RegisterPage.jsx';
import { Route, Routes, Navigate } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} /> {/* Default route to login */}
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} /> {/* Add route for RegisterPage */}
      </Routes>
    </div>
  );
}

export default App;
