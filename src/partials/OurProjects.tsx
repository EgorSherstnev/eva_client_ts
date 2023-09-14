import React from 'react';
import OurProject1 from '../images/OurProjects/OurProject1.jpg';
import OurProject2 from '../images/OurProjects/OurProject2.jpg';
import OurProject3 from '../images/OurProjects/OurProject3.jpg';
import PurpleLine from '../images/OurProjects/purpleline.svg';

function OurProjects() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4 text-4xl text-gray-200">НАШИ САМЫЕ БОЛЬШИЕ ПРОЕКТЫ</h2>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-1 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

            {/* 1st item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <img className=" mb-5" src={OurProject1} height="504" alt="OurProject1" />
              <img className=" mb-4 " src={PurpleLine}  alt="PurpleLine" />
              <h4 className="h4 mb-2 text-2xl text-gray-400">Газпром Арена</h4>
              <p className="text-lg text-gray-400 text-center">
                  Мы сделали самую красивую арену в Европе. Это открытие стало для нас прорывной точкой для развития на следующие десятилетия. Мы очень рады данному еву.
               </p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <img className=" mb-5" src={OurProject2} height="504" alt="OurProject1" />
              <img className=" mb-4 " src={PurpleLine}  alt="PurpleLine" />
              <h4 className="h4 mb-2 text-2xl text-gray-400">Газпром Арена</h4>
              <p className="text-lg text-gray-400 text-center">
                  Мы сделали самую красивую арену в Европе. Это открытие стало для нас прорывной точкой для разивтия на следующие десятилетия. Мы очень рады данному еву.
               </p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <img className=" mb-5" src={OurProject3} height="504" alt="OurProject1" />
              <img className=" mb-4 " src={PurpleLine}  alt="PurpleLine" />
              <h4 className="h4 mb-2 text-2xl text-gray-400">Газпром Арена</h4>
              <p className="text-lg text-gray-400 text-center">
                  Мы сделали самую красивую арену в Европе. Это открытие стало для нас прорывной точкой для разивтия на следующие десятилетия. Мы очень рады данному еву.
               </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurProjects;