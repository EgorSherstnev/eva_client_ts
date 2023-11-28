import React from "react";
import DownloadIcon from "../images/downloadplugin/downloadicon.svg";
import { IDownloadCardProps } from "../models/IDownloadCard";

const UIDownloadCard: React.FC<IDownloadCardProps>= ({ fileName, routeName, textCard, handleDownloadEva }) => {

   return (
      <form className="max-w-xs lg:w-1/2 m-1">
         <a
         onClick={() => handleDownloadEva(fileName, routeName)
         }
         className="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md lg:max-w-none"
         href="#0"
         >
            <div className="btn text-purple-600 bg-purple-100 hover:bg-white shadow">
               <img
                  className=" mx-2 "
                  src={DownloadIcon}
                  width="32"
                  height="32"
                  alt="DownloadIcon"
               />
               {textCard}
            </div>
         </a>
         {/* Success message */}
         {/* <p className="text-center lg:text-left lg:absolute mt-2 opacity-75 text-sm">Thanks for subscribing!</p> */}
      </form>
   )
};

export default UIDownloadCard