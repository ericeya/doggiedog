// import { useState } from 'react'
import './App.css'
import { NavbarDefault } from './components/Nav'
import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes, useNavigate } from "react-router-dom";
import Login from './pages/Login';
import API from './utils/API';
import Cookies from 'js-cookie';
import Signup from './pages/Signup';
import Logout from './pages/Logout';
import Home from './pages/Home';
import Feed from './pages/Feed';

function App() {
  const [userId, setUserId] = useState(0);
  const [token, setToken] = useState("");
  const [loginErrorMessage, setLoginErrorMessage] = useState('')
  const [signUpErrorMessage, setSignUpErrorMessage] = useState('')
  
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
      if (data.jwt) {  
        setToken(data.jwt);
        setUserId(data.id);
        Cookies.set("jwt", data.jwt);
        setSignUpErrorMessage('')
      } 
    }).catch((err) => {
      console.log(err.response.data.detail)
      setSignUpErrorMessage(err.response.data.detail)
    })
  };

  const handleLogin = (obj) => {
    API.login(obj).then((data) => {
      setToken(data.jwt);
      setUserId(data.id);
      Cookies.set("jwt", data.jwt);
      setLoginErrorMessage('')
    }).catch((err) => {
      console.log(err.response.data.detail)
      setLoginErrorMessage(err.response.data.detail)
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
              message={loginErrorMessage}
            />
          } />
          <Route
              path="/signup"
              element={
                <Signup
                  type="Signup"
                  handleSubmit={handleSignup}
                  userId={userId}
                  message={signUpErrorMessage}
                />
              }
            />
            <Route
              path="/logout"
              element={<Logout handleSubmit={logout} userId={userId} />}
            />
          <Route path="/feed" element={<Feed userId={userId}/>}/>
        </Routes>
    </Router>
    </>
  )
}

export default App
