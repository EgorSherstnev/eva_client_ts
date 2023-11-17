import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Header from '../partials/Header';
import PageIllustration from '../partials/PageIllustration';
import Banner from '../partials/Banner';
import { resetPassword } from '../http/userAPI';

function ResetPassword() {
  const [email, setEmail] = useState('')

  const formResetPassword = async(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    try {
      let data = await resetPassword(email)
      alert(data.message)
    } catch (e: any) {
      alert(e.response?.data?.message || 'Ошибка сброса пароля');
    }
  }

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">

        {/*  Page illustration */}
        <div className="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
          <PageIllustration />
        </div>

        <section className="relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">

              {/* Page header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                <h1 className="h1 mb-4 mt-10 text-gray-200">Забыли пароль?</h1>
                <p className="text-xl text-gray-400">Введите электронную почту от учетной записи, на которую вам будет выслана ссылка для восстановления пароля</p>
              </div>

              {/* Form */}
              <div className="max-w-sm mx-auto">
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
                  <div className="flex flex-wrap -mx-3 mt-6">
                    <div className="w-full px-3">
                      <button 
                        className="btn text-white bg-purple-600 hover:bg-purple-700 w-full"
                        onClick={formResetPassword}
                      >
                        Сбросить пароль
                      </button>
                    </div>
                  </div>
                </form>
                <div className="text-gray-400 text-center mt-6">
                  <Link to="/signin" className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out">Отмена</Link>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>

    </div>
  );
}

export default ResetPassword;