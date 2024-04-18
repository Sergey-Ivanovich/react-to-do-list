import React, { useState } from "react";
import "./App.css";

export default function ToDo() {
  const [searchBar, setSearchBar] = useState("");

  const [listItem, setListItem] = useState(["hello", "he", "hey"]);

  function updateSearchBar(searchData) {
    setSearchBar(searchData.target.value);
  }

  function updateListItems(event) {
    event.preventDefault();
    setListItem([listItem, searchBar]);
    console.log(listItem);
  }

  return (
    <div className="ToDo container">
      <div className="w-50 d-block m-auto">
        <form className="text-center mt-4 mb-2">
          <input
            onChange={updateSearchBar}
            type="text"
            className="btn border border-gray text-start w-75"
          />
          <input
            type="Submit"
            className="btn btn-primary w-25"
            onClick={updateListItems}
          />
        </form>
        <div className="border border-gray w-100 rounded p-3"></div>
      </div>
    </div>
  );
}
