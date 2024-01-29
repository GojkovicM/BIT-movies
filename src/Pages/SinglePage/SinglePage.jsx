import React, { useContext } from "react";
import "./single-page.scss";
import SingleMovie from "../../Components/SelectedMovie/SingleMovie";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

function SinglePage() {
  return (
    <div id="Singlepage">
      <Header />

      <SingleMovie />

      <Footer />
    </div>
  );
}

export default SinglePage;
