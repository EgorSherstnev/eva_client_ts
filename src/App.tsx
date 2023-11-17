import React, { useContext, useEffect} from "react";
import { 
   Routes,
   Route,
   useLocation,
} from "react-router-dom";

import 'aos/dist/aos.css';
import './css/style.css';

import Aos from "aos";

import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ResetPassword from "./pages/ResetPassword";
import { useDispatch } from "react-redux";
import { checkAuthUser } from "./actions";
import UpdatePassword from "./pages/UpdatePassword";

function App() {

   const location = useLocation();

   const dispatch = useDispatch()

   useEffect(() => {
    const checkUserAuth = async () => {
        if (localStorage.getItem('token')) {
            await dispatch(checkAuthUser())
        }
    }

    checkUserAuth();

   }, [])

   useEffect(() => {
      Aos.init({
            once: true,
            disable: 'phone',
            duration: 600,
            easing: 'ease-out-sine',
      });
   });

    useEffect(() => {
        const htmlElement = document.querySelector('html');
        if(htmlElement) {
            htmlElement.style.scrollBehavior = 'smooth' //плавное прокручивание
            window.scroll({ top: 0 })
            htmlElement.style.scrollBehavior = ''
        }
    }, [location.pathname]); //срабатывает при изменении маршрута

    return (
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/reset-password" element={<ResetPassword />} />
                <Route path="/update-password/:activationLink" element={< UpdatePassword />}/>
            </Routes>
    );   
}

export default App;