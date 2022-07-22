import "./App.css";
import React, { useState, useEffect } from "react";
import FilmList from "./components/FilmList";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import "bootstrap/dist/css/bootstrap.min.css";
//import * as bootstrap from "bootstrap";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";

function App() {
  const [films, setFilms] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=46a55ace`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setFilms(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  return (
    <div className="container-fluid App">
      <div className="row ">
        <Header />
        <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className="row film-list">
        <div className="col-12">
          <FilmList films={films} />
        </div>
      </div>
    </div>
  );
}

export default App;
