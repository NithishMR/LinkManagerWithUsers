import Search from "./Components/Search";
import SideBar from "./Components/SideBar";
import TableForManage from "./Components/TableForMange";
function ManagePage() {
  return (
    <>
      <div className="flex h-[100vh]">
        <div className="w-16 fixed top-0 left-0 h-full">
          <SideBar />
        </div>

        <div className="flex-1 ml-16 overflow-auto">
          <div className="w-[70%] m-auto ">
            <Search />
            <div className="pt-14">
              <TableForManage />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ManagePage;
