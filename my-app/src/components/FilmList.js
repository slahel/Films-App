import React from "react";

export default function FilmList(props) {
  return (
    <div>
      {props.films.map((film, index) => (
        <span className="poster col-6" key={film.imdbID}>
          <img src={film.Poster} alt="poster"></img>
        </span>
      ))}
    </div>
  );
}
