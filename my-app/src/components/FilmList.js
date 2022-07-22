import React from "react";

export default function FilmList(props) {
  return (
    <div>
      <h1>Films</h1>
      {props.films.map((film, index) => (
        <span className="poster col-6">
          <img src={film.Poster} alt="poster"></img>
        </span>
      ))}
    </div>
  );
}
