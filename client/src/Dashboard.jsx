import BarChart from "./Charts/BarChart";
import PieChart from "./Charts/PieChart";
import Card from "./Components/Card";
import SideBar from "./Components/SideBar";

function Dashboard() {
  return (
    <>
      <div className="flex h-[100vh]">
        <div className="w-16 fixed top-0 left-0 h-full">
          <SideBar />
        </div>

        <div className="flex-1 ml-16 overflow-auto">
          <div className="w-[70%] m-auto ">
            <div className="pt-14">
              <Card />
            </div>
            <div className="w-full pt-14">
              <div className="card bg-base-100 shadow-xl ">
                <div className="w-[60%] m-auto py-16">
                  <PieChart />
                </div>
              </div>
            </div>
            <div className="pt-14 pb-16">
              <div className="card bg-base-100 shadow-xl ">
                <div className="w-full m-auto px-10 py-16">
                  <BarChart />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
