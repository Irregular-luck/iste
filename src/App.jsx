import React, { useState, useEffect } from "react";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Team from "./pages/Team";
import Gallery from "./pages/Gallery";
import RouteLayout from "./Layout/RouteLayout";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Login from "./pages/Login";
import Loader from "./components/Loader";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RouteLayout />}>
      <Route index element={<Home />} />
      <Route path="Events" element={<Events />} />
      <Route path="Team" element={<Team />} />
      <Route path="Gallery" element={<Gallery />} />
      <Route path="login" element={<Login />} />
    </Route>
  )
);

const App = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return <RouterProvider router={router} />;
};

export default App;