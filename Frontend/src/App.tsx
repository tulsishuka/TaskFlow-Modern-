// import { Routes, Route } from "react-router-dom";

// import Navbar from "./layouts/Navbar";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Sidebar from "./layouts/Sidebar";


// const App = () => {
//   return (
//     <>
//       <Navbar />
// <Home />
// <About />
//       <Routes>
      
//         <Route path="/sidebar" element={<Sidebar />} />

//       </Routes>
//     </>
//   );
// };

// export default App;

import { Routes, Route } from "react-router-dom";

import Navbar from "./layouts/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import DashboardLayoutMember from "./pages/Dashbord/DashboardLayoutMember";
import UserDashboard from "./pages/Dashbord/UserDashboard";
import MyBoard from "./pages/Dashbord/MyBoard";



const App = () => {
  return (
    <>
      <Routes>

        {/* Public Website */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
              <About />
            </>
          }
        />

        <Route
          path="/about"
          element={
            <>
              <Navbar />
              <About />
            </>
          }
        />

        {/* Dashboard */}
        <Route path="/dashboard" element={<DashboardLayoutMember/>}>
          <Route index element={<UserDashboard/>} />
          <Route path="board" element={<MyBoard/>} />
        </Route>

      </Routes>
    </>
  );
};

export default App;