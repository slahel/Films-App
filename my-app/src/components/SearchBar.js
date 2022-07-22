import React from "react";

export default function SearchBar(props) {
  return (
    <div className="col col-3">
      <input
        className="form-control"
        value={props.value}
        onChange={(event) => props.setSearchValue(event.target.value)}
        placeholder="Search..."
      ></input>
    </div>
  );
}
