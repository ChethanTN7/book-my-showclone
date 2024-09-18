import React, { useState } from "react";
import DefaultLayoutHOC from "../layouts/Default.layout";

// components
import HeroCarousel from "../components/HeroCarousel/HeroCarousel.component";
import EntertainmentCardSlider from "../components/Entertainment/EntertainmentCardComponent";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";

const HomePage = () => {
  const [recomendedMovies, setRecomendedMovies] = useState([]);
  const [premierMovies, setPremierMovies] = useState([]);
  const [onlineStreamEvents, setOnlineStreamEvents] = useState([]);

  return (
    <>
      <HeroCarousel />

      {/* Entertainment */}
      <div className="container mx-auto px-4 md:px-12 my-8">
        <h1 className="text-2xl font-bold text-gray-800 sm:ml-3 ml-0 my-3">
          The best of Entertainment
        </h1>
        <EntertainmentCardSlider />
      </div>

      {/*  */}
      <div className="container mx-auto px-4 md:px-12 my-8">
        <PosterSlider
          title="Recommended Movies"
          subtitle="List of rocommended movies"
          posters={recomendedMovies}
          isDark={false}
        />
      </div>

      <div className="bg-premier-800 py-12">
        <div className="container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3">
          <div className="hidden md:flex">
            <img
              // src="https://imgs.search.brave.com/LY6fm_tnUUdqhzf_KfDT7dRKEbsv_O1oeF9IpvEQmNs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi9kL2QxL1J1/UGF5LnN2Zy8yMjBw/eC1SdVBheS5zdmcu/cG5n"
              alt="Rupay"
              className="w-full h-full"
            />
          </div>
          <PosterSlider
            title="Premiers"
            subtitle="Brand new releases every Friday"
            posters={premierMovies}
            isDark={true}
          />
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3">
        <PosterSlider
          title="Online Streaming Events"
          subtitle="Online Stream Events"
          posters={onlineStreamEvents}
          isDark={false}
        />
      </div>
    </>
  );
};

export default DefaultLayoutHOC(HomePage);
