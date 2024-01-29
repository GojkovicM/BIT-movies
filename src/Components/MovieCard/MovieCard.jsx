import React, { useContext } from "react";
import "./movie-card.scss";
import { MoviesContext } from "../../store/movie";
import { NavLink, } from "react-router-dom";

function MovieCard() {
  const {
    movies,
    selectedMovieHandler,
    fetchSeasonsHandler,
    fetchCastHandler,
  } = useContext(MoviesContext);

  
 


  return (
    <div id="MovieCard">
      {movies
        ?.sort((a, b) => b.rating.average - a.rating.average)
        .filter((e, i) => i < 30)
        .map((e) => (
          <NavLink
            style={{ textDecoration: "none" }}
            to={`/SinglePage/${e.id}`}
          >
            <div
              className="card"
              onClick={() => {
                selectedMovieHandler(e);
                fetchSeasonsHandler(e.id);
                fetchCastHandler(e.id);
              }}
            >
              <img src={e.image.medium} alt="" />
              <h3>{e.name}</h3>
            </div>
          </NavLink>
        ))}
    </div>
  );
}

export default MovieCard;
