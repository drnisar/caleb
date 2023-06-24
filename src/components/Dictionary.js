import React from "react";
import { useState, useEffect } from "react";

const Dictionary = () => {
  const [word, setWord] = useState("");
  useEffect(() => {
    console.log("state updated ", word);
  });
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setWord(e.target.value);
        }}
      />
      <h1>Lets search the meaning of {word}</h1>
    </div>
  );
};

export default Dictionary;
