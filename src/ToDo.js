import React, { useState } from "react";
import "./ToDo.css";
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

  function removeListItem(index) {
    let activeItems = toDoItems;
    activeItems.splice(index, 1);
    setToDoItems(activeItems);
  }

  if (toDoItems === null) {
    return (
      <div className="ToDo container">
        <div className="w-50 d-block m-auto">
          <h1 className="text-center mt-5">React To-Do List</h1>
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
                function exportData() {
                  removeListItem(index);
                }

                return (
                  <li key={index}>
                    <button onClick={exportData}>{oneItem}</button>
                  </li>
                );
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
        <div className="border border-gray w-100 rounded p-1 pt-3">
          <h3 className="text-opacity-50">List Is Empty</h3>
        </div>
      </div>
    );
  }
}
