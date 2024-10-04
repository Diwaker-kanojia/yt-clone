import React from "react";
import Navbar from "./Components/Navbar";
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Home from "./Components/Home";
import Search from "./Components/Search";
import SinglePage from "./Components/SinglePage";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "/search/:searchQuery",
//     element: <Search />,
//   },
//   {
//     path: "/video/:id",
//     element: <SinglePage />,
//   },
// ]);
const App = () => {
  return (
    <div>
      <Navbar />
      {/* <RouterProvider router={router} /> */}
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/search/:searchQuery" element={<Search />} />
        <Route path="/video/:id" element={<SinglePage />} />
      </Routes>
    </div>
  );
};

export default App;
