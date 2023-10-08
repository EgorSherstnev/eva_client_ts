import React, { useState } from 'react';
import HHimage from '../images/herohome/hhimage.jpg'

function HeroHome() {

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        {/* Illustration behind hero content */}
        <div
          className="absolute left-0 bottom-0 -ml-20 hidden lg:block pointer-events-none "
          aria-hidden="true"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="max-w-full brightness-50 w-564 h-552" >
            <img className="mx-auto opacity-50" src={HHimage}  height="504" alt="Hero" />
          </div>
        </div>

        {/* Hero content */}
        <div className="relative pt-32 pb-10 md:pt-40 md:pb-16">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h1 mb-4 mt-10 text-gray-50 text-6xl" data-aos="fade-up">
               Плагин EVA 
            </h1>
            <p className="text-xl text-gray-400 mb-8" data-aos="fade-up" data-aos-delay="200">
            Плагин создан для эффективной работы в Revit проектировщиков раздела ЭОМ. <br/>Плагин автоматизирует процесс создания схем, расчеты нагрузок, оформление <br/>планов при использовании цепей.
            </p>
            
          </div>

          {/* Hero image */}
          
        </div>
      </div>
    </section>
  );
}

export default HeroHome;