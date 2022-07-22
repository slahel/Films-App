import "./App.css";
import React, { useState, useEffect } from "react";
import FilmList from "./components/FilmList";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";

function App() {
  const [films, setFilms] = useState([]);

  const getMovieRequest = async () => {
    const url = "http://www.omdbapi.com/?s=star%20wars&apikey=46a55ace";

    const response = await fetch(url);
    const responseJson = await response.json();

    setFilms(responseJson.Search);
    console.log(responseJson);
  };

  useEffect(() => {
    getMovieRequest();
  }, []);

  return (
    <div className="container-fluid App">
      <div className="row">
        <Header />
      </div>

      <div className="row film-list">
        <FilmList films={films} />
      </div>
    </div>
  );
}

export default App;
