import './App.css';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Boats from './pages/Boats';
import Search from './pages/Search';
import MyBoatAds from './pages/MyBoatAds';
import FavBoats from './pages/FavBoats';
import Faq from './pages/FAQ';
import AddBoat from './pages/AddBoat';
import EditBoat from './pages/EditBoat';
import BoatDetails from './pages/BoatDetails';
import EditUserProfile from './pages/EditUserProfile';
import UserProfile from './pages/UserProfile';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/login" element={<Login />} />
        <Route path="/boats" element={<Boats />} />
        <Route path="/search" element={<Search />} />
        <Route path="/boats/ads" element={<MyBoatAds />} />
        <Route path="/boats/favourites" element={<FavBoats />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/newboat" element={<AddBoat />} />
        <Route path="/boats/edit/:id" element={<EditBoat />} />
        <Route path="/boats/:id" element={<BoatDetails />} />
        <Route path="/profile/:id" element={<UserProfile />} />
        <Route path="/profile/edit/:id" element={<EditUserProfile />} />
      </Routes>
    </div>
  );
}

export default App;
