import React from "react";

export default function FilmList(props) {
  return (
    <div>
      {props.films.map((film, index) => (
        <div>
          <img src={film.Poster}></img>
        </div>
      ))}
    </div>
  );
}
