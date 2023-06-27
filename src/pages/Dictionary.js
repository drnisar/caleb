import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dictionary = () => {
  const [word, setWord] = useState("");
  const navigate = useNavigate();
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setWord(e.target.value);
        }}
      />
      <button
        onClick={() => {
          navigate("/definition/" + word);
        }}
      >
        Search
      </button>
    </div>
  );
};

export default Dictionary;
