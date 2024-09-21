import Card from "./Components/Card";
import SideBar from "./Components/SideBar";

function Dashboard() {
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
            <div className="w-[70%] m-auto ">
              <div className="pt-14">
                <Card />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Dashboard;
