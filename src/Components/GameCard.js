// src/Components/GameCard.js
import React from "react";
import { useInView } from "react-intersection-observer";
import { MdOutlineWhatsapp } from "react-icons/md";

const GameCard = ({ game }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      className={`w-full md:w-1/2 lg:w-1/3 p-4 ${inView ? "fall-in" : ""}`}
      ref={ref}
    >
      <div className="bg-white p-3 mb-6 rounded-lg shadow-md overflow-hidden hover:shadow-2xl transition-shadow duration-300">
        <div className="relative overflow-hidden h-48 ">
          <img
            src={game.image}
            alt={game.name}
            style={{ transition: "2s ease-in-out" }}
            className="w-full h-full object-cover object-top transform hover:object-bottom"
          />
        </div>

        <div className="p-4">
          <h2 className="text-lg font-semibold">{game.name}</h2>
          <div className="mt-4 bg-[#2766781a] px-2 py-3 rounded-md border border-[#276678] single-ray-background transition transform hover:scale-105">
            <h3 className="text-md font-semibold">Demo Login Details:</h3>
            <p className="text-[#276678]">
              <span className="font-bold text-[16px]">URL: </span>
              <a
                href={game.demoLogin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#276678] underline sm:text-[12px] md:text-[16px]"
              >
                {game.demoLogin.url}
              </a>
            </p>
            <p className="text-[#276678]">
              <span className="font-bold text-[16px]">User: </span> {game.demoLogin.user}
            </p>
            <p className="text-[#276678]">
              <span className="font-bold text-[16px]">Password: </span> {game.demoLogin.password}
            </p>
          </div>

          <div className="mt-4 bg-[#2766781a] px-2 py-3 rounded-md border border-[#276678] single-ray-background transition transform hover:scale-105">
            <h3 className="text-md font-semibold">Demo Admin Login:</h3>
            <p className="text-[#276678]">
              <span className="font-bold text-[16px]">URL: </span>
              <a
                href={game.adminLogin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#276678] sm:text-[12px] md:text-[16px] underline "
              >
                {game.adminLogin.url}
              </a>
            </p>
            <p className="text-[#276678]">
              <span className="font-bold text-[16px]">User: </span>
              {game.adminLogin.user}
            </p>
            <p className="text-[#276678]">
              <span className="font-bold text-[16px]">Password: </span>
              {game.adminLogin.password}
            </p>
          </div>
        </div>
        <button
          className="bg-[#276678] text-white py-2 ml-5 px-3 flex transition-all items-center gap-1 hover:bg-white hover:text-[#276678] hover:border-[#276678] border animate-bounce focus:animate-none hover:animate-none text-md font-medium rounded-lg tracking-wide"
          style={{ borderRadius: "10px 0px 10px 0px" }}
        >
          <MdOutlineWhatsapp size={20} />
          Whatsapp Us
        </button>
      </div>
    </div>
  );
};

export default GameCard;
