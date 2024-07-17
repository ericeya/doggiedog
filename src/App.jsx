// import { useState } from 'react'
import './App.css'
import { NavbarDefault } from './components/Nav'
import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from './pages/Login';
import API from './utils/API';
import Cookies from 'js-cookie';
import Signup from './pages/Signup';
import Logout from './pages/Logout';
import Home from './pages/Home';

function App() {
  const [userId, setUserId] = useState(0);
  const [token, setToken] = useState("");
  
  useEffect(() => {
    const savedToken = Cookies.get("jwt");
    if (savedToken) {
      API.checkToken(savedToken).then((data) => {
        if (data.id) {
          setToken(savedToken);
          setUserId(data.id);
        } else {
          Cookies.remove("jwt");
        }
      });
    }
  }, []);

  const handleSignup = (obj) => {
    API.signup(obj).then((data) => {
      setToken(data.token);
      setUserId(data.user.id);
      localStorage.setItem("token", data.token);
    });
  };

  const handleLogin = (obj) => {
    API.login(obj).then((data) => {
      setToken(data.jwt);
      setUserId(data.id);
      Cookies.set("jwt", data.jwt);
    })
    
      
  };

  const logout = () => {
    setToken("");
    setUserId(0);
    Cookies.remove("jwt")
  }

  return (
    <>
    <Router>
      <NavbarDefault handleSubmit={logout} userId={userId}/>
        <Routes>
          <Route path="/" element={<Home userId={userId}/>}/>
          <Route path="/login" element={
            <Login
              type="Login"
              handleSubmit={handleLogin}
              userId={userId}
            />
          } />
          <Route
              path="/signup"
              element={
                <Signup
                  type="Signup"
                  handleSubmit={handleSignup}
                  userId={userId}
                />
              }
            />
            <Route
              path="/logout"
              element={<Logout handleSubmit={logout} userId={userId} />}
            />

        </Routes>
    </Router>
    </>
  )
}

export default App
