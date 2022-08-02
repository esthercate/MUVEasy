import React from 'react'
import { Routes, Route, Navigate} from 'react-router-dom'
import Home from '../pages/Home'
import MoverDetails from '../pages/MoverDetails'
import MoverDashboard from '../pages/MoverDashboard'
import ClientDashboard from '../pages/ClientDashboard'
import NotFound from '../pages/NotFound'
import Login from '../components/UI/Login'
import Register from '../components/UI/Register'


const Routers = ({profiles}) => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home profiles={profiles} />} />
      <Route path="/moverdetails" element={<MoverDetails />} />
      <Route path="/moverdashboard" element={<MoverDashboard />} />
      <Route path="/clientrdashboard" element={<ClientDashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Routers