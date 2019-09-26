import React, { useEffect, useState } from "react";
import "./App.css";
import { Movies } from "./components/Movies";
import { MovieForm } from "./components/MovieForm";
import { Container } from "semantic-ui-react";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("/movies").then(response =>
      response.json().then(data => {
        setMovies(data);
      })
    );
  }, []);

  return (
    <Container style={{ marginTop: 40, backgroundColor: '#FFF0F5' }}>
      <MovieForm
        onNewMovie={movie =>
          setMovies(nowMovies => [movie, ...nowMovies])
        }
      />
      <Movies movies={movies} />
    </Container>
  );
}

export default App;
