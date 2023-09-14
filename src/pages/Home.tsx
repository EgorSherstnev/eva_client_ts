import React from "react";
import FeaturesBlocks from "../partials/FeaturesBlocks";
import Header from "../partials/Header";
import HeroHome from "../partials/HeroHome";
import OurProjects from "../partials/OurProjects";
import PluginProfile from "../partials/PluginProfile";
import WriteEmail from "../partials/WriteEmail";
import FaQ from "../partials/FaQ";
import OurPartners from "../partials/OurPartners";
import ReviewsAboutUs from "../partials/ReviewsAboutUs";
import DownloadPlugin from "../partials/DownloadPlugin";
import Footer from "../partials/Footer";


function Home() {
    return (
        <div className="flex flex-col min-h-screen overflow-hidden">
            {/*  Site header */}
           <Header />

           {/*  Page content */}
            <main className="grow">
                {/*  Page sections */}
                <HeroHome />
                <FeaturesBlocks />
                <OurProjects />
                <WriteEmail />
                <PluginProfile />
                <FaQ />
                <OurPartners />
                <ReviewsAboutUs />
                <DownloadPlugin />
            </main>
             {/*  Site footer */}
            <Footer />
        </div>
    );
}

export default Home;