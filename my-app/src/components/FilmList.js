import React from "react";

export default function FilmList(props) {
  return (
    <div className="col">
      {props.films.map((film, index) => (
        <span className="poster" key={film.imdbID}>
          <img src={film.Poster} alt="poster"></img>
        </span>
      ))}
    </div>
  );
}
