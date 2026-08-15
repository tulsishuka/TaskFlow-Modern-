
import { Routes, Route } from "react-router-dom";
import Navbar from "./layouts/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import DashboardLayoutMember from "./pages/Dashbord/DashboardLayoutMember";
import UserDashboard from "./pages/Dashbord/UserDashboard";
import MyBoard from "./pages/Dashbord/MyBoard";
import EditTask from "./pages/Dashbord/EditTask";


const App = () => {
  return (
    <>
      <Routes>

        <Route path="/" element={
            <>
              <Navbar />
              <Home />
              <About />
            </>
          }
        />

        <Route
          path="/about" element={
            <>
              <Navbar />
              <About />
            </>
          }
        />

        <Route path="/dashboard" element={<DashboardLayoutMember />}>
  <Route index element={<UserDashboard />} />
  <Route path="board" element={<MyBoard />} />
  <Route path="edit-task/:id" element={<EditTask />} />
</Route>

      </Routes>
    </>
  );
};

export default App;