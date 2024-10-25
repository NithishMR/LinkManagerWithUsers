import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import MainPage from "./MainPage";
import AddLinks from "./AddLinks";
import AddCategory from "./AddCategory";
import Dashboard from "./Dashboard";
import ManagePage from "./ManagePage";
import Settings from "./Settings";
import HomePage from "./HomePage";
import SignUpForm from "./SignUpForm";
import SignInForm from "./SignInForm";
import PrivateRoute from "./Components/PrivateRoute"; // Import the PrivateRoute component
function App() {
  const [user, setUser] = useState(null); // Store user details here

  const handleUserLogin = (userDetails) => {
    setUser(userDetails); // Save user details when logging in
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage user={user} />} />
        <Route
          path="/search"
          element={
            <PrivateRoute
              element={<MainPage user={user} />}
              isAuthenticated={!!user}
            />
          }
        />
        <Route
          path="/add"
          element={
            <PrivateRoute
              element={<AddLinks user={user} />}
              isAuthenticated={!!user}
            />
          }
        />
        <Route
          path="/addCategory"
          element={
            <PrivateRoute
              element={<AddCategory user={user} />}
              isAuthenticated={!!user}
            />
          }
        />
        <Route
          path="/Dashboard"
          element={
            <PrivateRoute
              element={<Dashboard user={user} />}
              isAuthenticated={!!user}
            />
          }
        />
        <Route
          path="/Manage"
          element={
            <PrivateRoute
              element={<ManagePage user={user} />}
              isAuthenticated={!!user}
            />
          }
        />
        <Route
          path="/settings"
          element={
            <PrivateRoute element={<Settings />} isAuthenticated={!!user} />
          }
        />
        <Route path="/signup" element={<SignUpForm />} />
        <Route
          path="/signin"
          element={<SignInForm onUserLogin={handleUserLogin} />}
        />
      </Routes>
    </>
  );
}

export default App;
