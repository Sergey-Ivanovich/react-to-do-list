import React, { useState } from "react";
import "./App.css";

export default function ToDo() {
  const [searchBar, SetSearchBar] = useState("");
  const [toDoItems, setToDoItems] = useState(["hello"]);

  function refreshSearchBar(event) {
    SetSearchBar(event.target.value);
  }

  function enterSearch(event) {
    event.preventDefault();
    if (searchBar.length !== 0) {
      let itemMemory = toDoItems.concat(searchBar);
      console.log(itemMemory);
      setToDoItems(itemMemory);
    }
  }

  if (toDoItems !== null) {
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
          <div className="border border-gray w-100 rounded p-1 pt-3">
            <ul>
              {toDoItems.map(function (oneItem, index) {
                return <li key={index}>{oneItem}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
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
        </div>
      </div>
    );
  }
}
