import React from "react";

export default function FilmList(props) {
  return (
    <div>
      <h1>Films</h1>
      {props.films.map((film, index) => (
        <div className="poster">
          <img src={film.Poster}></img>
        </div>
      ))}
    </div>
  );
}
