import React, { useState, useEffect } from "react";

import Card from "../UI/Card";
import "./Search.css";

const Search = React.memo((props) => {
  const [initialText, searchText] = useState("");
  useEffect(()=>{
    console.log(props,initialText);
    props.filter(initialText);
  },[initialText]);
  return (
    <section className="search">
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          <input
            type="text"
            value={initialText}
            onChange={(event) => {
              searchText(event.target.value);
            }}
          />
        </div>
      </Card>
    </section>
  );
});

export default Search;
