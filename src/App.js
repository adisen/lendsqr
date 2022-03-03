import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import Login from './pages/login';
import UserDetails from './pages/user-details';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/user-details' element={<UserDetails />} />
      </Routes>
    </div>
  );
}

export default App;
