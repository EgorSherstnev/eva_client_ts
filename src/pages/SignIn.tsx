import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { connect, useDispatch } from 'react-redux';

import Header from '../partials/Header';
import PageIllustration from '../partials/PageIllustration';
import { loginUser } from '../actions';
import { AppState } from "../models/IAppState";
import { LOGIN_ERROR } from "../actions/types";

const SignIn = ({ authError }: { authError: string }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        try {
            console.log('User in form login: ', email, password);
            const response = await dispatch(loginUser({
                email: email,
                password: password,
            }));
            console.log('Login successful', response);
            // navigate("/")
        } catch (error:any) {
            console.error("Error in handleLogin:", error);
    
            if (error.response && error.response.status === 404) {
                // Обрабатываем ошибку 404 (пользователь не найден)
                alert('User not found');
            } else {
                // Обработка других ошибок
                throw error;
            }
        }
    };
    

    useEffect(() => {
            // Cleanup function on component unmount
        return () => {
            dispatch({ type: LOGIN_ERROR, payload: null });
        };
    }, [dispatch]);

    useEffect(() => {
        //console.log('Auth error from redux state:', authError);
        // if (authError) {
        //     console.log(authError);
        //     alert(authError);
        // }
    }, [authError]);
      
    

    return (
        <div className="flex flex-col min-h-screen overflow-hidden">
            {/* Site header */}
            <Header />

            {/* Page content */}
            <main className="grow">

                {/* Page illustration */}
                <div className="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
                    <PageIllustration />
                </div>


                <section className="relative">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6">
                        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

                            {/* Page header */}
                            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                                <h1 className="h1 text-gray-100">Добро пожаловать!</h1>
                            </div>

                            {/* Form */}
                            <div className="max-w-sm mx-auto">
                                <form>
                                    <div className="flex flex-wrap -mx-3">
                                        <div className="w-full px-3">
                                            <button className="btn px-0 text-white bg-red-600 hover:bg-red-700 w-full relative flex items-center">
                                                <svg className="w-4 h-4 fill-current text-white opacity-75 shrink-0 mx-4" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M7.9 7v2.4H12c-.2 1-1.2 3-4 3-2.4 0-4.3-2-4.3-4.4 0-2.4 2-4.4 4.3-4.4 1.4 0 2.3.6 2.8 1.1l1.9-1.8C11.5 1.7 9.9 1 8 1 4.1 1 1 4.1 1 8s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8 0-.5 0-.8-.1-1.2H7.9z" />
                                                </svg>
                                                <span className="h-6 flex items-center border-r border-white border-opacity-25 mr-4" aria-hidden="true"></span>
                                                <span className="flex-auto pl-16 pr-8 -ml-16">Войти с помощью Google</span>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                                <div className="flex items-center my-6">
                                    <div className="border-t border-gray-700 border-dotted grow mr-3" aria-hidden="true"></div>
                                    <div className="text-gray-400">Или войдите с помощью Вашего email</div>
                                    <div className="border-t border-gray-700 border-dotted grow ml-3" aria-hidden="true"></div>
                                </div>
                                <form>
                                    <div className="flex flex-wrap -mx-3 mb-4">
                                        <div className="w-full px-3">
                                            <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="email">Email</label>
                                            <input 
                                                id="email" 
                                                type="email" 
                                                className="form-input w-full text-gray-300" 
                                                placeholder="you@yourcompany.com" 
                                                value={email}
                                                onChange={e => setEmail(e.target.value)}
                                                required 
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap -mx-3 mb-4">
                                        <div className="w-full px-3">
                                            <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="password">Password</label>
                                            <input 
                                                id="password" 
                                                type="password" 
                                                className="form-input w-full text-gray-300" 
                                                placeholder="Пароль (не менее 10 символов)" 
                                                value={password}
                                                onChange={e => setPassword(e.target.value)}
                                                required 
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap -mx-3 mb-4">
                                        <div className="w-full px-3">
                                            <div className="flex justify-between">
                                                <label className="flex items-center">
                                                    <input type="checkbox" className="form-checkbox" />
                                                    <span className="text-gray-400 ml-2">Запомнить меня</span>
                                                </label>
                                                <Link to="/reset-password" aria-label="Сброс пароля" className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out">Забыли пароль?</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap -mx-3 mt-6">
                                        <div className="w-full px-3">
                                            <button 
                                                className="btn text-white bg-purple-600 hover:bg-purple-700 w-full"
                                                onClick={handleLogin}
                                            >
                                                Войти
                                            </button>
                                        </div>
                                    </div>
                                </form>
                                <div className="text-gray-400 text-center mt-6">
                                    Нет учётной записи? <Link to="/signup" className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out">Зарегистрируйтесь!</Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

            </main>


        </div>
    );
}

const mapStateToProps = (state: AppState) => ({
    authError: state.auth.error,
});

export default connect(mapStateToProps)(SignIn);
