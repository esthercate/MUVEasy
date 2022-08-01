import React from 'react'
import { Routes, Route, Navigate} from 'react-router-dom'
import Home from '../pages/Home'
import MoverDetails from '../pages/MoverDetails'
import MoverDashboard from '../pages/MoverDashboard'
import ClientDashboard from '../pages/ClientDashboard'
import Auth from '../pages/Auth'
import NotFound from '../pages/NotFound'


const Routers = ({profiles}) => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home profiles={profiles} />} />
      <Route path="/moverdetails" element={<MoverDetails />} />
      <Route path="/moverdashboard" element={<MoverDashboard />} />
      <Route path="/clientrdashboard" element={<ClientDashboard />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Routers