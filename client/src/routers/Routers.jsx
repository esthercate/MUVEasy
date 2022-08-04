import React from 'react'
import { Routes, Route, Navigate} from 'react-router-dom'
import Home from '../pages/Home'
import MoverDashboard from '../pages/MoverDashboard'
import NotFound from '../pages/NotFound'
import Auth from '../pages/Auth'
import Login from '../components/UI/Login'
import Register from '../components/UI/Register'




const Routers = ({profiles, user, setUser}) => {
  return (
    <Routes>
      *<Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home profiles={profiles} />} />
      <Route
        path="/mydashboard"
        element={<MoverDashboard user={user} setUser={setUser} />}
      />
      <Route path="/auth" element={<Auth user={user} />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Routers