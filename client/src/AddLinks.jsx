import SearchCategory from "./Components/SearchCategory";
import SideBar from "./Components/SideBar";

function AddLinks() {
  return (
    <div className="flex">
      <div className="w-16 fixed h-full">
        <SideBar />
      </div>
      <div className="flex-1 ml-16">
        <div className="w-[90%] m-auto">
          <SearchCategory />
        </div>
      </div>
    </div>
  );
}

export default AddLinks;
