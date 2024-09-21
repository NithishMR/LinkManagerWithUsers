import Search from "./Components/Search";
import SideBar from "./Components/SideBar";
import Table from "./Components/Table";

function MainPage() {
  return (
    <div className="flex">
      <div className="w-16 fixed h-full">
        <SideBar />
      </div>
      <div className="flex-1 ml-16">
        <div className="w-[70%] m-auto">
          <Search />
          <div className="pt-14">
            <Table />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
