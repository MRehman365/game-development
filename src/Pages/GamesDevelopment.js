import React, { useState } from "react";
import Slider from "react-slick";
import "../App.css";
import header from "../Assets/page-header-default.jpg";
import img1 from "../Assets/bdgclub1.webp";
import img2 from "../Assets/bdgclub2.webp";
import bdgthumb from "../Assets/bdgthumb.webp";
import img3 from "../Assets/dragon1.webp";
import img4 from "../Assets/dragon2.webp";
// import img5 from "../Assets/demo3.webp";
// import img6 from "../Assets/demo4.webp";
import img7 from "../Assets/firewin1.webp";
import img8 from "../Assets/firewin2.webp";
import img9 from "../Assets/firewin21.webp";
import img10 from "../Assets/firewin22.webp";
import img11 from "../Assets/amriclub1.webp";
import img12 from "../Assets/amriclub2.webp";
import img13 from "../Assets/Bettingbook1.webp";
import img14 from "../Assets/Bettingbook2.webp";
import img15 from "../Assets/Assesries1.webp";
import img16 from "../Assets/Assesries2.webp";
import img17 from "../Assets/watch1.webp";
import img18 from "../Assets/watch2.webp";
import img19 from "../Assets/wedding1.webp";
import img20 from "../Assets/wedding2.webp";
import img21 from "../Assets/bet1.webp";
import img22 from "../Assets/bet2.webp";
import img23 from "../Assets/jelwry1.webp";
import img24 from "../Assets/jelwry2.webp";
import img25 from "../Assets/rj1.webp";
import img26 from "../Assets/rj2.webp";
import img27 from "../Assets/rj3.webp";
import img28 from "../Assets/ring1.webp";
import img29 from "../Assets/ring2.webp";
import dragonthumb from "../Assets/dragonthumb.webp";
import fire1thumb from "../Assets/fire1thumb.webp";
import fire2thumb from "../Assets/fire2thumb.webp";
import amrithumb from "../Assets/amrithumb.webp";
import trova1thumb from "../Assets/trova1thumb.webp";
import trova2thumb from "../Assets/trova2thumb.webp";
import trova4thumb from "../Assets/trova4thumb.webp";
import trova5thumb from "../Assets/trova5thumb.webp";
import trova6thumb from "../Assets/trova6thumb.webp";
import trova7thumb from "../Assets/trova7thumb.webp";
import rjthumb from "../Assets/rjthumb.webp";
import Bettingbookthumb from "../Assets/Bettingbookthumb.webp";
import { MdOutlineWhatsapp, MdContentCopy } from "react-icons/md";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TbCategoryPlus } from "react-icons/tb";
import { FaSquare } from "react-icons/fa6";

const GamesDevelopment = () => {
  const games = [
    {
      id: 1,
      name: "BDG Win",
      images: [bdgthumb, img1, img2],
      category: "Hyip",
      demoLogin: {
        url: "http://jetwin.pro/",
        user: "1234567890",
        password: "123456",
      },
      adminLogin: {
        url: "http://jetwin.pro/",
        user: "1234567890",
        password: "123456",
      },
    },
    {
      id: 2,
      name: "DRAGON CLUBS",
      images: [dragonthumb, img3, img4],
      category: "Hyip",
      demoLogin: {
        url: "https://Vip91trade.com",
        user: "0987654321",
        password: "123456",
      },
      adminLogin: {
        url: "https://Vip91trade.com",
        user: "0987654321",
        password: "123456",
      },
    },
    {
      id: 4,
      name: "Fire Win 1",
      images: [fire1thumb, img7, img8],
      category: "Hyip",
      demoLogin: {
        url: "https://fiewin.codemax.site/",
        user: "1234567890",
        password: "123456",
      },
      adminLogin: {
        url: "https://fiewin.codemax.site/",
        user: "1234567890",
        password: "123456",
      },
    },
    {
      id: 5,
      name: "Fire Win 2",
      images: [fire2thumb, img9, img10],
      category: "Hyip",
      demoLogin: {
        url: "https://fiewin2.codemax.site/#/",
        user: "1234567890",
        password: "123456",
      },
      adminLogin: {
        url: "https://fiewin2.codemax.site/#/",
        user: "1234567890",
        password: "123456",
      },
    },
    {
      id: 6,
      name: "Amiri Club",
      images: [amrithumb, img11, img12],
      category: "MLM",
      demoLogin: {
        url: "https://amiriclub.com/home",
        user: "1234567890",
        password: "123456",
      },
      adminLogin: {
        url: "https://amiriclub.com/home",
        user: "1234567890",
        password: "123456",
      },
    },
    {
      id: 7,
      name: "Betting Book",
      images: [Bettingbookthumb, img13, img14],
      category: "PTC",
      demoLogin: {
        url: "https://battingbook.com",
        user: "1234567890",
        password: "123456",
      },
      adminLogin: {
        url: "https://battingbook.com",
        user: "1234567890",
        password: "123456",
      },
    },
    // E-Commerce Stores
    {
      id: 8,
      name: "Trova 2",
      images: [trova2thumb, img15, img16],
      category: "PTC",
      demoLogin: {
        url: "https://trova2.codemax.site",
        user: "1234567890",
        password: "12345",
      },
      adminLogin: {
        url: "https://trova2.codemax.site",
        user: "1234567890",
        password: "12345",
      },
    },
    {
      id: 9,
      name: "Trova 4",
      images: [trova4thumb, img18, img17],
      category: "PTC",
      demoLogin: {
        url: "https://trova4.codemax.site",
        user: "1234567890",
        password: "12345",
      },
      adminLogin: {
        url: "https://trova4.codemax.site",
        user: "1234567890",
        password: "12345",
      },
    },
    {
      id: 10,
      name: "Trova 5",
      images: [trova5thumb, img20, img19],
      category: "Color-Trade",
      demoLogin: {
        url: "https://trova5.codemax.site",
        user: "1234567890",
        password: "12345",
      },
      adminLogin: {
        url: "https://trova5.codemax.site",
        user: "1234567890",
        password: "12345",
      },
    },
    {
      id: 11,
      name: "Trova 6",
      images: [trova6thumb, img21, img22],
      category: "Color-Trade",
      demoLogin: {
        url: "https://trova6.codemax.site",
        user: "1234567890",
        password: "12345",
      },
      adminLogin: {
        url: "https://trova6.codemax.site",
        user: "1234567890",
        password: "12345",
      },
    },
    {
      id: 12,
      name: "Trova 7",
      images: [trova7thumb, img23, img24],
      category: "Color-Trade",
      demoLogin: {
        url: "https://trova7.codemax.site",
        user: "1234567890",
        password: "12345",
      },
      adminLogin: {
        url: "https://trova7.codemax.site",
        user: "1234567890",
        password: "12345",
      },
    },
    {
      id: 13,
      name: "E-Commerce Store",
      images: [rjthumb, img25, img26, img27],
      category: "Color-Trade",
      demoLogin: {
        url: "https://ecommerce.themaxify.co/",
        user: "rjsurya@gmail.com",
        password: "rjsurya",
      },
      adminLogin: {
        url: "https://ecommerce.themaxify.co/",
        user: "rjsurya@gmail.com",
        password: "rjsurya",
      },
    },
    {
      id: 14,
      name: "Ring Win",
      images: [trova1thumb, img28, img29],
      category: "MLM",
      demoLogin: {
        url: "https://ringwin.codemax.site",
        user: "1234567890",
        password: "12345",
      },
      adminLogin: {
        url: "https://ringwin.codemax.site",
        user: "1234567890",
        password: "12345",
      },
    },
  ];

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    appendDots: (dots) => (
      <ul className="slick-dots slick-thumb" style={{ marginbottom: "-50px" }}>
        {dots}
      </ul>
    ), // Add this line
  };
  const [selectedCategory, setSelectedCategory] = useState("All");
  const filteredGames = selectedCategory === "All" ? games : games.filter((game) => game.category === selectedCategory);

  const [showButtons, setShowButtons] = useState(false);

  const toggleButtons = () => {
    setShowButtons(!showButtons);
  };

  return (
    <div className="background-rays">
      <div className="header relative sm:min-h-[320px] md:min-h-[320px] flex justify-center items-center text-center">
        <img
          src={header}
          alt="Background"
          className="absolute w-full h-full object-cover object-center"
        />
        <div className="relative z-10">
          <h1 className="sm:text-4xl md:text-5xl font-bold text-white ">
            Game Demos
          </h1>
          <nav className="mt-4 sm:text-[1rem]">
            <span className="text-white">HOME</span>
            <span className="text-white mx-2">›</span>
            <span className="text-white">GAME DEMOS</span>
          </nav>
        </div>
      </div>

      {/* Game Cards */}
      <div className="h-auto bg-gray-100 py-10">
        <h1 className="text-3xl  font-bold text-center mb-10 underline">
          Game Demos
        </h1>
        <div className=" py-3 sm:px-5 md:px-16">
      <button onClick={toggleButtons} className="toggle-button flex gap-2 items-center py-1">
      <TbCategoryPlus size={22} className="text-[#276678]" />Show Categories
      </button>
      {showButtons && (
        <div className="category-buttons flex flex-col gap-2 mt- items-start w-[200px]">
          <button className="category-button flex items-center bg-[#276688] w-full py-1 px-2 rounded-sm text-white gap-1" onClick={() => setSelectedCategory("All")}><FaSquare size={8} />All</button>
          <button className="category-button flex items-center bg-[#134662] w-full py-1 px-2 rounded-sm text-white gap-1" onClick={() => setSelectedCategory("MLM")}><FaSquare size={8} />MLM</button>
          <button className="category-button flex items-center bg-[#276688] w-full py-1 px-2 rounded-sm text-white gap-1" onClick={() => setSelectedCategory("Hyip")}><FaSquare size={8} />Hyip</button>
          <button className="category-button flex items-center bg-[#134662] w-full py-1 px-2 rounded-sm text-white gap-1" onClick={() => setSelectedCategory("PTC")}><FaSquare size={8}/>PTC</button>
          <button className="category-button flex items-center bg-[#276688] w-full py-1 px-2 rounded-sm text-white gap-1" onClick={() => setSelectedCategory("Color-Trade")}><FaSquare size={8}  />Color Trade</button>
        </div>
      )}
    </div>
        <div className="flex flex-wrap justify-center sm:p-0 md:p-8">
          {filteredGames.map((game, index) => (
            <div
              key={game.id}
              className="w-full md:w-1/2 lg:w-1/3 p-4 game-card-container"
            >
              <div
                className={`game-card border border-[#276678] h-[630px] mt-5 p-3 relative mb-6 rounded-lg overflow-visible hover:shadow-xl transition-shadow duration-300 ${
                  index % 2 === 0
                    ? "bg-white"
                    : "bg-gradient-to-b from-white to-[#1688a793]"
                }`}
                style={{ marginTop: "10px", marginBottom: "20px" }}
              >
                <div className="relative top-[-40px] pb-10">
                  {" "}
                  {/* Add pb-10 for padding-bottom */}
                  <div className="game-card-inner relative   rounded-lg h-[250px]">
                    <Slider {...settings}>
                      {game.images.map((image, imgIndex) => (
                        <div
                          key={imgIndex}
                          className="relative sm:h-[250px] md:h-[250px] overflow-hidden border border-[#276678] game-card-face game-card-front rounded-lg"
                        >
                          <div className="w-full h-[30px] bg-[#276778] static top- text-center leading-[30px] text-white">
                            {game.name}
                          </div>
                          <img
                            src={image}
                            alt={`${game.name} ${imgIndex + 1}`}
                            className={`w-full h-full ${
                              imgIndex === 0 ? "object-fill" : "object-cover"
                            } object-top`}
                            style={{ transition: "6s" }}
                          />
                        </div>
                      ))}
                    </Slider>
                  </div>
                  <div className="p-4 mt-5">
                    <div
                      className={`mt-4 px-2 py-3 rounded-md border border-[#276678] single-ray-background transition transform hover:scale-105 ${
                        index % 2 === 0 ? "bg-[#2766781a]" : "bg-white"
                      }`}
                    >
                      <h3 className="text-md font-semibold">
                        Demo Login Details:
                      </h3>
                      <p className="text-[#276678]">
                        <span className="font-bold text-[14px]">URL: </span>
                        <a
                          href={game.demoLogin.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#276678] underline sm:text-[12px] md:text-[14px]"
                        >
                          {game.demoLogin.url}
                        </a>
                      </p>
                      <p className="text-[#276678] flex items-center">
                        <span className="font-bold text-[14px]">User: </span>{" "}
                        {game.demoLogin.user}
                        <button
                          onClick={() => copyToClipboard(game.demoLogin.user)}
                          className="ml-2"
                        >
                          <MdContentCopy size={16} />
                        </button>
                      </p>
                      <p className="text-[#276678] flex items-center">
                        <span className="font-bold text-[14px]">
                          Password:{" "}
                        </span>{" "}
                        {game.demoLogin.password}
                        <button
                          onClick={() =>
                            copyToClipboard(game.demoLogin.password)
                          }
                          className="ml-2"
                        >
                          <MdContentCopy size={16} />
                        </button>
                      </p>
                    </div>

                    <div
                      className={`mt-4 px-2 py-3 rounded-md border border-[#276678] single-ray-background transition transform hover:scale-105 ${
                        index % 2 === 0 ? "bg-[#2766781a]" : "bg-[#ffffff]"
                      }`}
                    >
                      <h3 className="text-md font-semibold">
                        Demo Admin Login:
                      </h3>
                      <p className="text-[#276678]">
                        <span className="font-bold text-[14px]">URL: </span>
                        <a
                          href={game.adminLogin.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#276678] sm:text-[12px] md:text-[14px] underline "
                        >
                          {game.adminLogin.url}
                        </a>
                      </p>
                      <p className="text-[#276678] flex items-center">
                        <span className="font-bold text-[14px]">User: </span>
                        {game.adminLogin.user}
                        <button
                          onClick={() => copyToClipboard(game.adminLogin.user)}
                          className="ml-2"
                        >
                          <MdContentCopy size={16} />
                        </button>
                      </p>
                      <p className="text-[#276678] flex items-center">
                        <span className="font-bold text-[14px]">
                          Password:{" "}
                        </span>
                        {game.adminLogin.password}
                        <button
                          onClick={() =>
                            copyToClipboard(game.adminLogin.password)
                          }
                          className="ml-2"
                        >
                          <MdContentCopy size={16} />
                        </button>
                      </p>
                    </div>
                  </div>
                  <button
                    className={`py-2 mb-[100px] ml-5 px-3 flex transition-all items-center gap-1 hover:border-[#276678] border animate-bounce focus:animate-none hover:animate-none text-md font-medium rounded-lg tracking-wide ${
                      index % 2 === 0
                        ? "bg-[#276678] text-white hover:bg-white hover:text-[#276678]"
                        : "bg-white text-[#276678] border border-[#276678] hover:text-white hover:bg-[#276678]"
                    }`}
                    style={{ borderRadius: "10px 0px 10px 0px" }}
                  >
                    <MdOutlineWhatsapp size={20} />
                    Whatsapp Us
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GamesDevelopment;
