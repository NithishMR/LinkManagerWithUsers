import { Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import AddLinks from "./AddLinks";
import AddCategory from "./AddCategory";
import Dashboard from "./Dashboard";
import ManagePage from "./ManagePage";
import Settings from "./Settings";
import HomePage from "./HomePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<MainPage />} />
        <Route path="/add" element={<AddLinks />} />
        <Route path="/addCategory" element={<AddCategory />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Manage" element={<ManagePage />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </>
  );
}
export default App;
