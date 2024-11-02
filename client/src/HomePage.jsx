import React from "react";
import SideBar from "./Components/SideBar";

const HomePage = ({ user }) => {
  console.log(user);

  return (
    <div className="flex h-[100vh]">
      <div className="w-16 fixed top-0 left-0 h-full">
        <SideBar />
      </div>

      <div className="flex-1 ml-16 overflow-auto flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-9xl bg-gradient-to-r from-violet-500 via-purple-500 to-blue-500 bg-clip-text text-transparent welcomeMessage animate-message">
            Hello {user ? user.usrname : "Guest"}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
