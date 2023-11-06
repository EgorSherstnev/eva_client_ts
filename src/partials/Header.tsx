import React, { useState, useRef, useEffect }  from "react";
import { Link } from 'react-router-dom';
import Dropdown from '../utils/Dropdown';

import { AppState } from '../models/IAppState';

import LogoIcon from '../images/Logo.svg';
import { connect, useSelector } from "react-redux";
import { RootState } from "../store";

function Header (props: any) {
    const { user, isAuth } = props;
    //const isAuth = useSelector((state: RootState) => state.auth.isAuth);
    //const userAuth = useSelector((state: RootState) => state.auth.user.email)
    const [mobileNavOpen, setMobileNavOpen] = useState(false);

    const mobileNav = useRef<HTMLDivElement | null>(null);
    const trigger = useRef<HTMLButtonElement | null>(null);
    

  // закрыть мобильное меню при нажатии снаружи
  useEffect(() => {
    const clickHandler = ({ target }: any) => {
      if (!mobileNav.current || !trigger.current) return;
      if (!mobileNavOpen || mobileNav.current.contains(target) || trigger.current.contains(target)) return;
      setMobileNavOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // закрыть мобильное меню, если нажата клавиша esc
  useEffect(() => {
    const keyHandler = ({ keyCode }: any) => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });


return (
    <header className="absolute w-full z-30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="flex items-center justify-between h-48"> 

                {/* Site branding */}
                <div className="shrink-0 mr-4">
                    {/* Logo */}
                    <Link to="/" className="block " aria-label="EVA" >
                        <img src={LogoIcon} width="150" height="150" alt="Logo Icon"/>
                    </Link>
                </div>

                {/* Desktop navigation */}
                <nav className="hidden md:flex md:grow">

                    {/* Desktop menu links */}
                    <ul className="flex grow justify-end flex-wrap items-center">
                        <li>
                            <Link to="/features" className="text-gray-300 hover:text-gray-200 px-4 py-2 flex items-center transition duration-150 ease-in-out" >
                                Features
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="text-gray-300 hover:text-gray-200 px-4 py-2 flex items-center transition duration-150 ease-in-out" >
                                NavItem
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="text-gray-300 hover:text-gray-200 px-4 py-2 flex items-center transition duration-150 ease-in-out" >
                                NavItem
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="text-gray-300 hover:text-gray-200 px-4 py-2 flex items-center transition duration-150 ease-in-out">
                                NavItem
                            </Link>
                        </li>
                        <Dropdown title="Support">
                        {/* 2nd level: hover */}
                        <li>
                            <Link to="/contact" className="font-medium text-sm text-gray-400 hover:text-purple-600 hover:bg-gray-700 flex py-2 px-4 leading-tight">Contact us</Link>
                        </li>
                        <li>
                            <Link to="/help" className="font-medium text-sm text-gray-400 hover:text-purple-600 flex py-2 px-4 leading-tight hover:bg-gray-700 ">Help center</Link>
                        </li>
                        <li>
                            <Link to="/404" className="font-medium text-sm text-gray-400 hover:text-purple-600 flex py-2 px-4 leading-tight hover:bg-gray-700 ">404</Link>
                        </li>
                         </Dropdown>

                    </ul>

                   {/* Desktop sign in links */}
                   <ul className="flex grow justify-end flex-wrap items-center">
                        <li className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out">
                            {isAuth ? `Пользователь авторизован ${user.email}` : 'Авторизуйтесь'}
                        </li>
                        <li>
                            <Link to="/signin" className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out">
                                Войти
                            </Link>
                        </li>
                        <li>
                            <Link to="/signup" className="btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3" >
                                Зарегистрироваться
                            </Link>
                        </li>
                   </ul>

                </nav>

                {/* Mobile menu */}
                <div className="md:hidden">

                    {/* Hamburger button */}
                    <button ref={trigger} className={`hamburger ${mobileNavOpen && 'active'}`} aria-controls="mobile-nav" aria-expanded={mobileNavOpen} onClick={() => setMobileNavOpen(!mobileNavOpen)}>
                        <span className="sr-only">Menu</span>
                        <svg className="w-6 h-6 fill-current text-gray-300 transition duration-150 ease-in-out" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <rect y="4" width="24" height="2" rx="1" />
                            <rect y="11" width="24" height="2" rx="1" />
                            <rect y="18" width="24" height="2" rx="1" />
                        </svg>
                    </button>


                {/*Mobile navigation */}
                <nav 
                    id="mobile-nav" 
                    ref={mobileNav} 
                    className="absolute top-full z-20 left-0 w-full px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out" 
                    style={mobileNavOpen ? {maxHeight: mobileNav.current ? mobileNav.current.scrollHeight : 0, opacity: 1} : {maxHeight: 0, opacity: .8}}
                >
                    <ul className="bg-gray-800 px-4 py-2">
                        <li>
                            <Link to="/features" className="flex text-gray-300 hover:text-gray-200 py-2">Features</Link>
                        </li>
                        <li>
                            <Link to="/navitem" className="flex text-gray-300 hover:text-gray-200 py-2">NavItem</Link>
                        </li>
                        <li>
                            <Link to="/navitem" className="flex text-gray-300 hover:text-gray-200 py-2">NavItem</Link>
                        </li>
                        <li>
                            <Link to="/navitem" className="flex text-gray-300 hover:text-gray-200 py-2">NavItem</Link>
                        </li>
                        <li className="py-2 my-2 border-t border-b border-gray-700">
                            <span className="flex text-gray-300 py-2">Support</span>
                            <ul className="pl-4">
                                <li>
                                    <Link to="/contact" className="text-sm flex font-medium text-gray-400 hover:text-gray-200 py-2">Contact us</Link>
                                </li>
                                <li>
                                    <Link to="/help" className="text-sm flex font-medium text-gray-400 hover:text-gray-200 py-2">Help center</Link>
                                </li>
                                <li>
                                    <Link to="/404" className="text-sm flex font-medium text-gray-400 hover:text-gray-200 py-2">404</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/signin" className="flex font-medium w-full text-purple-600 hover:text-gray-200 py-2 justify-center">Войти</Link>
                        </li>
                        <li>
                            <Link to="/signup" className="font-medium w-full inline-flex items-center justify-center border border-transparent px-4 py-2 my-2 rounded-sm text-white bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out">Зарегистрироваться</Link>
                        </li>
                    </ul>
                </nav>

            </div>

        </div>

      </div>
    </header>
);
}

const mapStateToProps = (state: AppState) => ({
    user: state.auth.user,
    isAuth: state.auth.isAuth,
  });
  

export default connect(mapStateToProps)(Header);
