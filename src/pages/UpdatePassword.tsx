import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import Header from '../partials/Header';
import PageIllustration from '../partials/PageIllustration';
import { updatePassword } from "../http/userAPI";

const UpdatePassword = () => {
    const navigate = useNavigate();
    const {activationLink} = useParams();
    const [passwordRepeat, setPasswordRepeat] = useState('')
    const [password, setPassword] = useState('')

    const click = async(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        try {
            let data;
            if(activationLink) {
                (password == passwordRepeat) ? data = await updatePassword(password, activationLink) : alert ('Пароли в полях ввода не совпадают')
            }
            alert(data.message)
            setTimeout(() => navigate("/signin"), 2000)
            
        } catch (e: any) {
            alert(e.response?.data?.message || 'Ошибка смены пароля');
        }
    }

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
                                
                                <div className="flex items-center my-6">
                                    <div className="border-t border-gray-700 border-dotted grow mr-3" aria-hidden="true"></div>
                                    <div className="text-gray-400">Введите новый пароль для смены</div>
                                    <div className="border-t border-gray-700 border-dotted grow ml-3" aria-hidden="true"></div>
                                </div>
                                <form>
                                    <div className="flex flex-wrap -mx-3 mb-4">
                                        <div className="w-full px-3">
                                            <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="email">Password</label>
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
                                            <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="password">Password(repeat)</label>
                                            <input 
                                                id="password" 
                                                type="password" 
                                                className="form-input w-full text-gray-300" 
                                                placeholder="Пароль (не менее 10 символов)" 
                                                value={passwordRepeat}
                                                onChange={e => setPasswordRepeat(e.target.value)}
                                                required 
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap -mx-3 mt-6">
                                        <div className="w-full px-3">
                                            <button 
                                                className="btn text-white bg-purple-600 hover:bg-purple-700 w-full"
                                                onClick={click}
                                            >
                                                Обновить пароль
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </section>

            </main>


        </div>
    );
}

export default UpdatePassword