import React from 'react';
import Dashboard from './components/dashboard/Dashboard'
import Index from './components/home/onepirate/Home'
import './App.css';
import { Route, Routes } from 'react-router-dom';
import SignInSide from './components/sign-in-side/SignInSide';
import SignUp from './components/sign-up/SignUp';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Index/>} />
      <Route path='/*'element={<Dashboard/>} />
      <Route path='/signin' element={<SignInSide/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      </Routes>
    </div>
  );
}

export default App;
