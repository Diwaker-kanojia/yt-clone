import React, { useEffect, useState } from "react";
import { AiOutlineBell, AiOutlineMenu } from "react-icons/ai";
import logo from "../assets/logo.png";
import { CiSearch } from "react-icons/ci";
import { IoIosSearch, IoMdMic } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { useUtils } from "../Context/UtilsContext";
import { IoArrowBack } from "react-icons/io5";
const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { isSlidebar, setIsSlidebar, mobileShow, setMobileShow } = useUtils();
  const [searchbar, setSearchbar] = useState(false);
  const navigate = useNavigate();
  const searchQueryHandler = (event) => {
    if (
      (event?.key === "Enter" || event === "searchButton") &&
      searchQuery?.length > 0
    ) {
      navigate(`/search/${searchQuery}`);
      setSearchQuery("");
    }
  };
  useEffect(() => {
    console.log(isSlidebar, mobileShow);
  }, [isSlidebar]);
  const handleSideBar = () => {
    if (window.innerWidth <= 1200) {
      setIsSlidebar(!isSlidebar);
      setMobileShow(!mobileShow);
    }
    setIsSlidebar(!isSlidebar);
  };
  if (searchbar) {
    return (
      <div className="flex justify-between px-3 py-2 fixed top-0 w-[100%] bg-white  items-center z-50">
        <IoArrowBack size={20} onClick={() => setSearchbar(!searchbar)} />
        <div className="flex flex-grow items-center mx-4">
          <div className="w-[100%] px-4 py-2 border border-gray-400 rounded-l-full">
            <input
              onChange={(e) => setSearchQuery(e.target.value)}
              value={searchQuery}
              onKeyUp={searchQueryHandler}
              type="text"
              placeholder="Search"
              className="outline-none "
            />
          </div>
          <button className="px-4 py-2 border border-gray-400 bg-gray-100 rounded-r-full ">
            <CiSearch
              size={"24px"}
              onClick={(e) => searchQueryHandler("searchButton")}
            />
          </button>
        </div>
        <IoMdMic
          size={"42px"}
          className="ml-3 border border-gray-600 rounded-full p-2 cursor-pointer bg-gray-100 hover:bg-gray-300 duration-200"
        />
      </div>
    );
  }
  return (
    <div className="flex justify-between px-3 py-2 fixed top-0 w-[100%] bg-white  z-50">
      <div className=" flex items-center gap-4 cursor-pointer">
        <AiOutlineMenu size={20} onClick={() => handleSideBar} />
        <img src={logo} alt="youtube-logo" className="w-28" />
      </div>
      <div className="hidden md:flex items-center w-[35%] ">
        <div className="w-[100%] px-4 py-2 border border-gray-400 rounded-l-full">
          <input
            onChange={(e) => setSearchQuery(e.target.value)}
            value={searchQuery}
            onKeyUp={searchQueryHandler}
            type="text"
            placeholder="Search"
            className="outline-none "
          />
        </div>
        <button className="px-4 py-2 border border-gray-400 bg-gray-100 rounded-r-full ">
          <CiSearch
            size={"24px"}
            onClick={(e) => searchQueryHandler("searchButton")}
          />
        </button>
        <IoMdMic
          size={"42px"}
          className="ml-3 border border-gray-600 rounded-full p-2 cursor-pointer bg-gray-100 hover:bg-gray-300 duration-200"
        />
      </div>
      <div className="flex items-center gap-3">
        <IoIosSearch
          size={20}
          className="xl:hidden"
          onClick={() => setSearchbar(!searchbar)}
        />
        <RiVideoAddLine size={20} className="cursor-pointer" />
        <AiOutlineBell size={20} className="cursor-pointer" />
        <img
          src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
          alt="user-info"
          className="w-7 rounded-full cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Navbar;
