import React, { useEffect} from "react";
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

function App() {

   const location = useLocation();

   useEffect(() => {
      Aos.init({
            once: true,
            disable: 'phone',
            duration: 600,
            easing: 'ease-out-sine',
      });
   });

    useEffect(() => {
        document.querySelector('html').style.scrollBehavior = 'smooth' //плавное прокручивание
        window.scroll({ top: 0 })
        document.querySelector('html').style.scrollBehavior = ''
    }, [location.pathname]); //срабатывает при изменении маршрута

    return (
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/reset-password" element={<ResetPassword />} />
            </Routes>
    );   
}

export default App;