import * as React from "react";
import { Link } from "react-router-dom";
function SideBar() {
  return (
    <>
      <div className="h-[100vh] w-14">
        <div className="flex flex-col justify-between items-center h-full pt-4">
          {/* Top section with three icons */}
          <div className="flex flex-col gap-4">
            <Link to="/">
              <div className="tooltip tooltip-right" data-tip="Home">
                <div className="p-2 hover:bg-gray-400 rounded-lg">
                  <img src="/images/Home.svg" alt="home" />
                </div>
              </div>
            </Link>
            <Link to={"/Dashboard"}>
              <div className="tooltip tooltip-right" data-tip="Dashboard">
                <div className="p-2 hover:bg-gray-400 rounded-lg">
                  <img src="/images/dashboard.svg" alt="dashboard" />
                </div>
              </div>
            </Link>
            <Link to={"/add"}>
              <div className="tooltip tooltip-right" data-tip="Add">
                <div className="p-2 hover:bg-gray-400 rounded-lg">
                  <img src="../images/add.svg" alt="addLinks" />
                </div>
              </div>
            </Link>
            <div className="tooltip tooltip-right" data-tip="Manage">
              <div className="p-2 hover:bg-gray-400 rounded-lg">
                <img src="../images/manage.svg" alt="Manage" />
              </div>
            </div>
            <Link to={"/addCategory"}>
              <div className="tooltip tooltip-right" data-tip=" Categories">
                <div className="p-2 hover:bg-gray-400 rounded-lg">
                  <img src="../images/LibraryAdd.svg" alt="Category" />
                </div>
              </div>
            </Link>
          </div>
          <div className="">
            <div className="tooltip tooltip-right" data-tip="Settings">
              <div className="px-2 pt-2 hover:bg-gray-400 rounded-lg">
                <div className="pb-2">
                  <img src="../images/settings.svg" alt="Settings" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SideBar;
