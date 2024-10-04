import React from "react";
import { GoHome } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import {
  MdOutlineSubscriptions,
  MdHistory,
  MdOutlineOutlinedFlag,
  MdOutlineFeedback,
} from "react-icons/md";
import { PiUserSquareThin } from "react-icons/pi";
import { IoGameControllerOutline } from "react-icons/io5";
import { AiOutlineLike } from "react-icons/ai";
import { FaChevronRight } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { SiYoutubestudio } from "react-icons/si";
import { SiYoutubekids } from "react-icons/si";
import { MdOutlineWatchLater } from "react-icons/md";
import { SiYoutubemusic } from "react-icons/si";
import { SiTrendmicro } from "react-icons/si";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { PiFilmSlateLight } from "react-icons/pi";
import { CgMediaLive } from "react-icons/cg";
import { SiYoutubegaming } from "react-icons/si";
import { FaRegNewspaper } from "react-icons/fa";
import { TfiCup } from "react-icons/tfi";
import { PiLightbulbLight } from "react-icons/pi";
import { SiStylelint } from "react-icons/si";
import { MdPodcasts } from "react-icons/md";
import { BiVideo } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";
import { GiLinkedRings } from "react-icons/gi";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { useUtils } from "../Context/UtilsContext";
export const Sidebar = () => {
  const { isSlidebar, mobileShow, setMobileShow } = useUtils();

  const sidebarItems = [
    {
      groupName: "",
      groupItem: [
        {
          id: 1,
          name: "Home",
          icon: <GoHome />,
        },
        {
          id: 2,
          name: "Shorts",
          icon: <SiYoutubeshorts />,
        },
        {
          id: 3,
          name: "Subscriptions",
          icon: <MdOutlineSubscriptions />,
        },
      ],
    },
    {
      groupName: "You",
      groupItem: [
        {
          id: 1,
          name: "Your Channel",
          icon: <PiUserSquareThin />,
        },
        {
          id: 2,
          name: "History",
          icon: <MdHistory />,
        },
        {
          id: 3,
          name: "Playlists",
          icon: <MdOutlineSubscriptions />,
        },
        {
          id: 4,
          name: "Your Videos",
          icon: <BiVideo />,
        },
        {
          id: 5,
          name: "Watch later",
          icon: <MdOutlineWatchLater />,
        },
        {
          id: 6,
          name: "Liked videos",
          icon: <AiOutlineLike />,
        },
      ],
    },
    {
      groupName: "Explore",
      groupItem: [
        {
          id: 1,
          name: "Trending",
          icon: <SiTrendmicro />,
        },
        {
          id: 2,
          name: "Shopping",
          icon: <HiOutlineShoppingBag />,
        },
        {
          id: 3,
          name: "Music",
          icon: <SiYoutubemusic />,
        },
        {
          id: 4,
          name: "Films",
          icon: <PiFilmSlateLight />,
        },
        {
          id: 5,
          name: "Live",
          icon: <CgMediaLive />,
        },
        {
          id: 6,
          name: "Gaming",
          icon: <IoGameControllerOutline />,
        },
        {
          id: 7,
          name: "News",
          icon: <FaRegNewspaper />,
        },
        {
          id: 8,
          name: "Sport",
          icon: <TfiCup />,
        },
        {
          id: 9,
          name: "Courses",
          icon: <SiStylelint />,
        },
        {
          id: 10,
          name: "Fashion & beauty",
          icon: <PiLightbulbLight />,
        },
        {
          id: 11,
          name: "Padcasts",
          icon: <MdPodcasts />,
        },
      ],
    },
    {
      groupName: "More From Youtube",
      groupItem: [
        {
          id: 1,
          name: "Youtube Premium",
          icon: <FaYoutube className="text-[#FF0000]" />,
        },
        {
          id: 2,
          name: "Youtube Studio",
          icon: <SiYoutubestudio className="text-[#FF0000]" />,
        },
        {
          id: 3,
          name: "Youtube Music",
          icon: <SiYoutubemusic className="text-[#FF0000]" />,
        },
        {
          id: 4,
          name: "Youtube Kids",
          icon: <SiYoutubekids className="text-[#FF0000]" />,
        },
      ],
    },
    {
      groupName: "",
      groupItem: [
        {
          id: 1,
          name: "Settings",
          icon: <IoSettingsOutline />,
        },
        {
          id: 2,
          name: "Report history",
          icon: <MdOutlineOutlinedFlag />,
        },
        {
          id: 3,
          name: "Help",
          icon: <IoMdHelpCircleOutline />,
        },
        {
          id: 4,
          name: "Send feedback",
          icon: <MdOutlineFeedback />,
        },
      ],
    },
  ];

  const ModerOverlay = () => {
    return (
      <div
        className="flex fixed top-0 right-0 bottom-0 left-0 bg-black/50 z-[10000]"
        onClick={() => setMobileShow(!mobileShow)}
      ></div>
    );
  };
  return (
    <>
      {" "}
      <div
        className={`${
          mobileShow
            ? "fixed top-0 bottom-0 left-0 transition-all duration-300 bg-white z-40 h-screen w-[70%] sm:w-[30%]"
            : "hidden h-[calc(100vh-6.625rem)] w-[19%]"
        } xl:static xl:block px-2 lg:px-6 overflow-y-scroll overflow-x-hidden no-scrollbar`}
      >
        {/* Home */}
        <div className="space-y-3 items-center">
          {sidebarItems.map((group, index) => (
            <div className="mb-5">
              <h1 className="font-bold">{group.groupName}</h1>
              {group.groupItem.map((item) => (
                <div
                  key={item.id}
                  className="flex item-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl pl-1 my-2"
                >
                  <div className="text-sm cursor-pointer">{item.icon}</div>
                  <span className="text-sm cursor-pointer ">{item.name}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
        <br />
        <hr />
        <br />
        <div className="space-y-3 items-center mt-4 px-2">
          <span className="block font-semibold text-gray-500">
            About Press Copyright Contact us Creators Advertise Developers
          </span>
          <span className="block font-semibold text-gray-500">
            Terms Privacy Policy & Safety How YouTube works Test new features
          </span>
          <span className="block text-sm font-semibold text-gray-700">
            © 2024 Diwaker LLC
          </span>
        </div>
      </div>
      {mobileShow ? <ModerOverlay /> : null}
    </>
  );
};
