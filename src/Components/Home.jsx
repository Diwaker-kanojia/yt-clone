import React from "react";
import { Sidebar } from "./Sidebar";
import { Video } from "./Video";
import { useAuth } from "../Context/Store";
import { ListItem } from "./ListItem";
import { Loader } from "../Loader/Loader";
const Home = () => {
  const { data, loading } = useAuth();

  return (
    <div className="flex mt-20">
      <Sidebar />
      <div className="h-[calc(100vh-6.25rem)] overflow-y-scroll overflow-x-hidden no-scrollbar">
        <ListItem />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 p-5">
          {data.map((item) => {
            if (item.type !== "video") return false;
            return <Video key={item.id} video={item?.video} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
