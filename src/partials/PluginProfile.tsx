import React from "react";
import building1 from '../images/pluginprofile/1.svg';
import building2 from '../images/pluginprofile/2.svg';
import building3 from '../images/pluginprofile/3.svg';
import building4 from '../images/pluginprofile/4.svg';
import building5 from '../images/pluginprofile/5.svg';
import building6 from '../images/pluginprofile/6.svg';

function PluginProfile() {
   return (
      <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4 text-4xl text-gray-50 uppercase">Для каких объектов подходит плагин?</h2>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

            {/* 1st item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <img className=" mb-5" src={building1} width="64" height="64"  alt="building1" />
              <h4 className="h4 mb-2  text-gray-50">
                  Проектирование
               </h4>
              <p className="text-lg text-gray-400 text-center">
                  жилых многоэтажных зданий
               </p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <img className=" mb-5" src={building2} width="64" height="64"  alt="building1" />
              <h4 className="h4 mb-2  text-gray-50">
                  Проектирование
               </h4>
              <p className="text-lg text-gray-400 text-center">
                  социальных объектов
               </p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <img className=" mb-5" src={building3} width="64" height="64"  alt="building1" />
              <h4 className="h4 mb-2  text-gray-50">
                  Проектирование
               </h4>
              <p className="text-lg text-gray-400 text-center">
                  офисных зданий
               </p>
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <img className=" mb-5" src={building4} width="64" height="64"  alt="building1" />
              <h4 className="h4 mb-2  text-gray-50">
                  Проектирование
               </h4>
              <p className="text-lg text-gray-400 text-center">
                  промышленных объектов
               </p>
            </div>

            {/* 5th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <img className=" mb-5" src={building5} width="64" height="64"  alt="building1" />
              <h4 className="h4 mb-2  text-gray-50">
                  Проектирование
               </h4>
              <p className="text-lg text-gray-400 text-center">
                  объектов транспортной инфраструктуры
               </p>
            </div>

            {/* 6th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <img className=" mb-5" src={building6} width="64" height="64"  alt="building1" />
              <h4 className="h4 mb-2  text-gray-50">
                  Проектирование
               </h4>
              <p className="text-lg text-gray-400 text-center">
                  гостиниц и коммерческих зданий
               </p>
            </div>

          </div>

        </div>
      </div>
    </section>
   );
};

export default PluginProfile;