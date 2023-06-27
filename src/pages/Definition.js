import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import NotFound from "./NotFound";

export default function Definition() {
  const [word, setWord] = useState([]);
  const [notFound, setNotFound] = useState(false);
  let { search } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + search)
      .then((response) => {
        if (response.status === 404) {
          setNotFound(true);
        }
        return response.json();
      })
      .then((data) => {
        setWord(data[0].meanings);
      });
  }, []);

  if (notFound === true) {
    return (
      <>
        <NotFound />
      </>
    );
  }
  return (
    <>
      {word
        ? word.map((meaning) => {
            return (
              <p key={uuid()}>
                {meaning.partOfSpeech + ": "}
                {meaning.definitions[0].definition}
              </p>
            );
          })
        : null}
    </>
  );
}
// 27 jun 2023
