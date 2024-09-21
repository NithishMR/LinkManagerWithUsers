import { Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import AddLinks from "./AddLinks";
import AddCategory from "./AddCategory";
import Dashboard from "./Dashboard";
import ManagePage from "./ManagePage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/add" element={<AddLinks />} />
        <Route path="/addCategory" element={<AddCategory />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Manage" element={<ManagePage />} />
      </Routes>
    </>
  );
}
export default App;
