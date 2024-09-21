import SearchCategory from "./Components/SearchCategory";
import SideBar from "./Components/Sidebar";

function AddLinks() {
  return (
    <>
      <div className="">
        <div className="flex h-[100vh]">
          {/* Sidebar with fixed width */}
          <div className="w-16">
            <SideBar />
          </div>

          {/* Search section that takes the remaining space */}
          <div className="flex-1">
            <div className="w-[90%] m-auto ">
              <SearchCategory />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default AddLinks;
