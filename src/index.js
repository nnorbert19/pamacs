import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ContentfulProvider } from "./ContentfulContext";
import ScrollToTop from "./components/ScrollToTop";
import Layout from "./pages/Layout.js";
import Home from "./pages/Home.js";
import AboutUs from "./pages/AboutUs";
import OurDogs from "./pages/OurDogs";
import News from "./pages/News";
import PlannedLitter from "./pages/PlannedLitter";
import AvailablePuppies from "./pages/AvailablePuppies";
import Litters from "./pages/Litters";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import ShowNews from "./pages/News/ShowNews";

export default function App() {
  return (
    <ContentfulProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="rolunk" element={<AboutUs />} />
            <Route path="kutyaink" element={<OurDogs />} />
            <Route path="hirek">
              <Route index element={<News />} />
              <Route path=":id" element={<ShowNews />} />
            </Route>
            <Route path="tervezett-alom" element={<PlannedLitter />} />
            <Route path="elerheto-kolykok" element={<AvailablePuppies />} />
            <Route path="almok" element={<Litters />} />
            <Route path="galeria" element={<Gallery />} />
            <Route path="kapcsolat" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ContentfulProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
