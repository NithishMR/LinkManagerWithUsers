import AddCat from "./Components/AddCat";
import SideBar from "./Components/SideBar";
import TableForCategory from "./Components/TableForCategory";

function AddCategory({ user }) {
  return (
    <div className="flex">
      <div className="w-16 fixed h-full">
        <SideBar />
      </div>

      <div className="flex-1 ml-16">
        <div className="w-[70%] m-auto">
          <AddCat />
          <div className="pt-14">
            <TableForCategory user={user} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddCategory;
