import { useEffect, useState } from "react";

export default function Definition() {
  const [word, setWord] = useState();

  useEffect(() => {
    fetch("https://api.dictionaryapi.dev/api/v2/entries/en/helicopter")
      .then((response) => response.json())
      .then((data) => {
        setWord(data[0].meanings);
        console.log(word[0]);
      });
  }, []);
  return (
    <>
      <h1>Here is the definition</h1>
      {word.map((meaning) => {
        return <p>{meaning.definitions[0].definition}</p>;
      })}
    </>
  );
}
// not working
