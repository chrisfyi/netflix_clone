import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from "./features/userSlice"
import ProfileScreen from './screens/ProfileScreen';

function App() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((userAuth) => {
        if (userAuth){
          console.log(userAuth)
          //logged in
          dispatch(
            login({
            uid: userAuth.uid,
            email: userAuth.email
          })
        );

         } else {
          dispatch(logout());
          //logged out
          }
        });

        return unsubscribe;
      }, []);

  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen /> 
          ) : (
          <Routes>
            <Route path="/" element={ <HomeScreen /> } />  
            <Route path="/profile" element={ <ProfileScreen /> } />   
          </Routes>
          )}
      </Router>
    </div>
  );
}
       
export default App;
