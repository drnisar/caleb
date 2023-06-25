import React from "react";
import { useState, useEffect } from "react";

const Dictionary = () => {
  const [word, setWord] = useState("");
  const [word2, setWord2] = useState("");
  useEffect(() => {
    console.log("state updated ", word);
  }, [word]);
  useEffect(() => {
    console.log("state updated ", word2);
  }, [word2]);
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setWord(e.target.value);
        }}
      />
      <h2>Lets search the meaning of {word}</h2>

      <input
        type="text"
        onChange={(e) => {
          setWord2(e.target.value);
        }}
      />
      <h2>Lets search the meaning of {word2}</h2>
    </div>
  );
};

export default Dictionary;
