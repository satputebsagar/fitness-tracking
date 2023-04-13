import React from 'react'
import {Routes,Route} from 'react-router-dom'
import { Box,CssBaseline } from '@mui/material';
import "./App.css";
import AuthContext from "./context/AuthContext";
import Header from './layout/Header';
import Sidebar from "./layout/Sidebar";
import Summary from "./pages/Summary";
import Login from './pages/Login';
import WeightTraining from './pages/WeightTraining';
import Cardio from './pages/Cardio';
import Supplements from './pages/Supplements';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';

// import SidebarCard from './components/SidebarCard';
const App = () => {
  return (
    <>
    <Box>
    <CssBaseline/>
    <Header/>
    <Box className={`$styles['main-container]`}>
      <Sidebar/>
      <Routes>
          <Route exact path='/' element={<Login />} />
          <Route  path='/signup' element={<SignUp />} />
          <Route  path='/summary' element={<Summary />} />
          <Route  path='/weights' element={<WeightTraining />} />
          <Route  path='/cardio' element={<Cardio />} />
          <Route  path='/supplements' element={<Supplements />} />
          <Route  path='/profile' element={<Profile />} />
        </Routes>
    </Box>
    </Box>
    
    </>
  )
}

export default App