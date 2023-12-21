import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Modal from "react-modal";
import "./index.css";

Modal.setAppElement("#root");

const root = document.getElementById("root");
const rootRender = ReactDOM.createRoot(root);

let bannerKey = 0;

const handleHomeClick = () => {
  bannerKey += 1;
  rootRender.render(
    <React.StrictMode>
      <Header onClickHome={handleHomeClick} />
      <Banner key={bannerKey} />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </React.StrictMode>
  );
}

rootRender.render(
  <React.StrictMode>
    <Header onClickHome={handleHomeClick} />
    <Banner key={bannerKey} />
    <Skills />
    <Portfolio />
    <Contact />
    <Footer />
  </React.StrictMode>
);
