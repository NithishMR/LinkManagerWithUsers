import SearchCategory from "./Components/SearchCategory";
import SideBar from "./Components/SideBar";

function AddLinks({ user }) {
  return (
    <div className="flex">
      <div className="w-16 fixed h-full">
        <SideBar />
      </div>
      <div className="flex-1 ml-16">
        <div className="w-[90%] m-auto">
          <SearchCategory user={user} />
        </div>
      </div>
    </div>
  );
}

export default AddLinks;
