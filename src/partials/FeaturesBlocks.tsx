import React from 'react';

function FeaturesBlocks() {
  return (
    <section className='-mt-10 '>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 bg-current opacity-75">
        <div className="py-12 md:py-20">

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

            {/* 1st item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
               <h1 className="h1 mb-4  text-transparent bg-clip-text  bg-gradient-to-t from-sky-200 to-indigo-800 text-6xl" data-aos="fade-up">
                  5
               </h1>
              <h4 className="h4 mb-2 text-4xl text-gray-50">
                  ЛЕТ
               </h4>
              <p className="text-lg text-gray-400 text-center">
                  на рынке
               </p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
               <h1 className="h1 mb-4 text-transparent bg-clip-text  bg-gradient-to-t from-sky-200 to-indigo-800  text-6xl" data-aos="fade-up">
                  5
               </h1>
              <h4 className="h4 mb-2 text-4xl text-gray-50">
                  КОМПАНИЙ
               </h4>
              <p className="text-lg text-gray-400 text-center">
                  партнёров
               </p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
               <h1 className="h1 mb-4  text-transparent bg-clip-text  bg-gradient-to-t from-sky-200 to-indigo-800  text-6xl" data-aos="fade-up">
                  10
               </h1>
              <h4 className="h4 mb-2 text-4xl text-gray-50">
                  КОМПАНИЙ
               </h4>
              <p className="text-lg text-gray-400 text-center">
                  клиентов
               </p>
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
               <h1 className="h1 mb-4  text-transparent bg-clip-text  bg-gradient-to-t from-sky-200 to-indigo-800  text-6xl" data-aos="fade-up">
                  30
               </h1>
              <h4 className="h4 mb-2 text-4xl text-gray-50">
                  ПРОЕКТОВ
               </h4>
              <p className="text-lg text-gray-400 text-center">
                  реализовано
               </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default FeaturesBlocks;