import { useState } from "react";
import TableForManage from "./Components/TableForMange";
import SearchForManagePage from "./Components/SearchForManagePage";
import SideBar from "./Components/SideBar";

function ManagePage({ user }) {
  // State to store the search query
  const [searchQuery, setSearchQuery] = useState("");
  // State to store the selected category
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <>
      <div className="flex h-[100vh]">
        <div className="w-16 fixed top-0 left-0 h-full">
          <SideBar />
        </div>

        <div className="flex-1 ml-16 overflow-auto">
          <div className="w-[90%] m-auto ">
            {/* Pass setSearchQuery and setSelectedCategory to Search component */}
            <SearchForManagePage
              setSearchQuery={setSearchQuery}
              setSelectedCategory={setSelectedCategory}
            />
            <div className="pt-14">
              {/* Pass searchQuery and selectedCategory to TableForManage */}
              <TableForManage
                searchQuery={searchQuery}
                selectedCategory={selectedCategory}
                user={user}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ManagePage;
