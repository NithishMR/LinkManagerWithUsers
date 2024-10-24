import { useState } from "react";
import SearchForMainPage from "./Components/SearchForMainPage";
import SideBar from "./Components/SideBar";
import Table from "./Components/Table";

function MainPage({ user }) {
  // State to store the search query
  const [searchQuery, setSearchQuery] = useState("");
  // State to store the selected category
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <div className="flex">
      <div className="w-16 fixed h-full">
        <SideBar />
      </div>
      <div className="flex-1 ml-16">
        <div className="w-[90%] m-auto">
          {/* Pass the setSearchQuery and setSelectedCategory functions */}
          <SearchForMainPage
            setSearchQuery={setSearchQuery}
            setSelectedCategory={setSelectedCategory}
          />
          <div className="pt-14">
            {/* Pass the searchQuery and selectedCategory to Table component */}
            <Table
              searchQuery={searchQuery}
              selectedCategory={selectedCategory}
              user={user}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
