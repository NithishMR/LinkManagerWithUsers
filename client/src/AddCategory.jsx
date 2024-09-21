import AddCat from "./Components/AddCat";
import SideBar from "./Components/SideBar";
import TableForCategory from "./Components/TableForCategory";

function AddCategory() {
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
            <AddCat />
            <div className="pt-14">
              <TableForCategory />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default AddCategory;
