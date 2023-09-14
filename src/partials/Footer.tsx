import React from 'react';
import {Link} from 'react-router-dom';
import LogoIcon from '../images/Logo.svg';
import LogoTelegram from '../images/footer/icons8-telegram.svg';
import LogoYouTube from '../images/footer/icons8-youtube-play.svg';

function Footer() {
    return (
        <footer>
            <div className='py-12 md:py-16'>
                <div className='max-w-6xl mx-auto px-4 sm:px-6'>
                    {/* Top area: Blocks */}
                    <div className='grid md:grid-cols-12 gap-8 lg:gap-20 mb-8 md:mb-12'>

                        {/* 1st block */}
                        <div className='md:col-span-4 lg:col-span-5'>
                            <div className='mb-2'>
                                {/* Logo */}
                                <Link to="/" className='inline-block' aria-lable="EVA">
                                <img src={LogoIcon} width="150" height="150" alt="Logo Icon" />
                                </Link>
                            </div>
                        </div>

                        {/* 2nd, 3rd blocks */}
                        <div className='md:col-span-8 lg:col-span-7 grid sm:grid-cols-3 gap-8'>

                            {/* 2nd block */}
                            <nav className='text-sm'>
                                <h6 className='text-gray-200 font-medium mb-1'>Навигация</h6>
                                <ul>
                                    <li className="mb-1">
                                        <Link to="/features" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Features</Link>
                                    </li>
                                    <li className='mb-1'>
                                        <Link to="/navitem" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">О нас</Link>
                                    </li>
                                    <li className='mb-1'>
                                        <Link to="/faq" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">FAQ</Link>
                                    </li>
                                    <li className='mb-1'>
                                    <Link to="/navitem" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Техническая поддержка</Link>
                                    </li>
                                </ul>
                            </nav>
                            {/* 3rd block */}
                            <div className='text-sm'>
                                <h6 className='text-gray-200 font-medium mb-1'>Контакты</h6>
                                <ul>
                                    <li className='mb-1 text-gray-600'>Наш адрес</li>
                                    <li className='mb-1 text-gray-400'>г.Москва...</li>
                                    <li className='mb-1 text-gray-600'>Режим работы</li>
                                    <li className='mb-1 text-gray-400'>ПН-ПТ: 09:00-18:00</li>
                                </ul>
                            </div>

                            {/* 4th block */}
                            <div className='text-sm'>
                            <ul>
                                <li className='text-gray-200 font-medium mb-1'>
                                    <a href="tel:+79180000000">+79180000000</a>
                                </li>
                                <li className='text-gray-200 font-medium mb-1'>
                                    <a href="tel:+79180000000">+79180000000</a>
                                </li>
                                <li className='mb-1 text-gray-600'>Мы в соцсетях</li>
                            </ul>
                             {/* Social links */}
                             <ul className='flex mb-4 md:order-1 md:ml-0 md:mb-0'>
                                <li className='pr-2'>
                                    <Link to='#' className='flex justify-center items-center' aria-label='YouTube'>
                                        <img  src={LogoYouTube}/>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='#' className='flex justify-center items-center' aria-label='Telegram'>
                                        <img  src={LogoTelegram}/>
                                    </Link>
                                </li>

                             </ul>
                            
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </footer>
    )
}

export default Footer;