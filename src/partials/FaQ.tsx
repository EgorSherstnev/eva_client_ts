import React from 'react';
import Accordion from '../utils/Accordion';


const accordionData = [
    {
        title:'Обучающие уроки',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, temporibu'
    },
    {
        title:'Внедрение плагина',
        content: 'Мы готовы настроить плагин под нужды вашей компании, а также внедрить новые функции под ваши требования '
    },
    {
        title:'Техническая поддержка',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, temporibu'
    },
    {
        title:'Где скачать плагин?',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, temporibu'
    }
]

function FaQ() {
    return (
        <section>
            <div className='max-w-6xl mx-auto px-4 sm:px-6'>
                <div className='py-12 md:py-20 border-t border-gray-800'>
                    {/* Section header */}
                    <div className='max-w-3xl mx-auto text-center pb-12 md:pb-20'>
                        <h2 className='h2 uppercase text-gray-200'>Ответы на вопросы</h2>
                    </div>
                    {/* Accordion */}
                    <div className='accordion'>
                       {accordionData.map(({title,content}) => (
                            <Accordion title={title} content={content} />
                       ))}
                    </div>

                </div>

            </div>
        </section>
    )
}

export default FaQ;
