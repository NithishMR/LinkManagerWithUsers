import Search from "./Components/Search";
import SideBar from "./Components/SideBar";

import Table from "./Components/Table";
function MainPage() {
  return (
    <>
      <div className="flex h-[100vh]">
        {/* Sidebar with fixed width */}
        <div className="w-16">
          <SideBar />
        </div>

        {/* Search section that takes the remaining space */}
        <div className="flex-1">
          <div className="w-[70%] m-auto ">
            <Search />
            <div className="pt-14">
              <Table />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainPage;
