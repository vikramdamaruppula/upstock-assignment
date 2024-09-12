import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Homepage from './components/Homepage';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Stock from './components/Stock';

import './App.css';

function App() {
  const[isAuthenticated,setIsAuthenticated]  =useState(false)



  return (
    <Router>
      <Routes>
        <Route path='/' element={<SignUp />} />
        <Route path='/login' element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path='/home' element={isAuthenticated ? <Homepage setIsAuthenticated={setIsAuthenticated} /> : <Login /> } />
        <Route path='/stock' element={<Stock />} />
      </Routes>
    </Router>
    // <div className="App">
    //   <SignUp />
    //   {/* <Homepage /> */}
    // </div>
  );
}

export default App;
