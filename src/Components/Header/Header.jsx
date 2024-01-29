import React, { useContext } from "react";
import "./header.scss";
import { BsCameraReelsFill } from "react-icons/bs";
import { IconContext } from "react-icons";
import { MoviesContext } from "../../store/movie";
import { NavLink } from "react-router-dom";

function Header() {
  const {
    filteredMovie,
    searchedMovie,
    fetchCastHandler,
    fetchSeasonsHandler,
    fetchByIdHandler,
    clearSearch,
  } = useContext(MoviesContext);

  return (
    <div id="Header">
    <NavLink to="/" style={{ textDecoration: "none" }}> <div className="logo">
        <IconContext.Provider value={{ className: "logoicon" }}>
          <BsCameraReelsFill />
        </IconContext.Provider>
        <h1>
          <span>B</span>it<span>M</span>ovies
        </h1>
      </div>
      </NavLink>
      <div className="search">
        <input
          type="text"
          placeholder="search"
          onChange={filteredMovie}
        ></input>
        <ul>
          {searchedMovie?.data
            ?.filter((e, i) => i < 5)
            .map((e) => (
              <NavLink to={`/SinglePage/${e.show.id}`}>
                {" "}
                <li
                  className="drop"
                  onClick={() => {
                    fetchCastHandler(e.show.id);
                    fetchSeasonsHandler(e.show.id);
                    fetchByIdHandler(e.show.id);
                    clearSearch("");
                  }}
                >
                  {e.show.name}
                </li>
              </NavLink>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default Header;
