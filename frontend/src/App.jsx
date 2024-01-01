import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/jokes")
      .then((res) => {
        setJokes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <>
      <h1>Jokes</h1>
      <p>Jokes: ${jokes.length}</p>
      {jokes.map((joke) => {
        return (
          <div key={joke.id}>
            <h3>{joke.content}</h3>
          </div>
        );
      })}
    </>
  );
}

export default App;
