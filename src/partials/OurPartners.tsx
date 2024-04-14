import React from "react";
// import Partner1 from "../images/ourpartners/1.jpg";
// import Partner2 from "../images/ourpartners/2.jpg";
// import Partner3 from "../images/ourpartners/3.jpg";
// import Partner4 from "../images/ourpartners/4.jpg";
// import Partner5 from "../images/ourpartners/5.jpg";
import LogoIEK from "../images/ourpartners/IEK-Logo.jpeg";

function OurPartners() {
   return (
      <section>
         <div className="max-w-6xl mx-auto px-4 sm:px-6 border-t border-gray-800">

         {/* CTA box */}
         <div className="relative py-5 px-2 md:py-16 md:px-12" data-aos="fade-up">

            

            <div className="lg:flex-row justify-between items-center">

               {/* CTA content */}
               <div className="mb-2 lg:mr-16 lg:mb-0 text-center ">
                  <h2 className="h2 text-gray-200 uppercase mb-6 ">Наши партнеры</h2>
                  {/* Items */}
                  <div className="max-w-sm mx-auto grid gap-x-2 gap-y-2 md:grid-cols-2 lg:grid-cols-5 lg:gap-10 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

                     {/* 1st item */}
                     <div className="relative items-center w-32" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
                        <a href="https://www.iek.ru/">
                           <img className=" mb-2"  src={LogoIEK} alt="Partner1" />
                        </a>
                     </div>

                     {/* 2st item */}
                     <div className="relative items-center w-32" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
                        <a href="https://www.iek.ru/">
                           <img className=" mb-2" src={LogoIEK} alt="Partner2" />
                        </a>
                     </div>

                     {/* 3st item */}
                     <div className="relative items-center w-32" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
                        <a href="https://www.iek.ru/">
                           <img className=" mb-2" src={LogoIEK} alt="Partner3" />
                        </a>
                     </div>

                     {/* 4st item */}
                     <div className="relative items-center w-32" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
                        <a href="https://www.iek.ru/">
                           <img className=" mb-2" src={LogoIEK} alt="Partner4" />
                        </a>
                     </div>

                     {/* 5st item */}
                     <div className="relative items-center w-32" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
                        <a href="https://www.iek.ru/">
                           <img className=" mb-2" src={LogoIEK} alt="Partner5" />
                        </a>
                     </div>

                  </div>

               </div>



            </div>

         </div>

         </div>
    </section>
   );
};

export default OurPartners;