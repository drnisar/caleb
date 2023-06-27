import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import NotFound from "./NotFound";

export default function Definition() {
  const [word, setWord] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const [error, setError] = useState(false);
  let { search } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    // const url = "fdhdfjldk.com";
    // const url = "https://httpstat.us/401";
    const url = "https://api.dictionaryapi.dev/api/v2/entries/en/" + search;

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          setError(true);
          throw new Error("Somethingggggg went Wrong... ");
        }
        return response.json();
      })
      .then((data) => {
        setWord(data[0].meanings);
      })
      .catch((e) => {
        return "";
      });
  }, []);

  if (error === true) {
    return (
      <>
        <p>Something went wrong ...</p>
        <Link to="/dictionary">search again</Link>
      </>
    );
  }
  return (
    <>
      {word
        ? word.map((meaning) => {
            return (
              <p key={uuidv4()}>
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
