import React, { useState } from "react";
import "./App.css";

export default function ToDo() {
  const [searchBar, SetSearchBar] = useState("");
  const [toDoItems, setToDoItems] = useState([""]);

  function refreshSearchBar(event) {
    SetSearchBar(event.target.value);
  }

  function enterSearch(event) {
    event.preventDefault();
    let itemMemory = toDoItems.concat(searchBar);
    console.log(itemMemory);
    setToDoItems(itemMemory);
  }

  return (
    <div className="ToDo container">
      <div className="w-50 d-block m-auto">
        <form className="text-center mt-4 mb-2 d-flex">
          <input
            type="text"
            onChange={refreshSearchBar}
            className="btn border border-gray text-start w-75"
          />
          <input
            type="Submit"
            className="btn btn-primary w-25"
            onClick={enterSearch}
          />
        </form>
        <div className="border border-gray w-100 rounded p-3">
          <ul>
            {toDoItems.map(function (oneItem) {
              return <li>{oneItem}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
