import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MovieList from "./MovieList";

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<MovieList />} />
          <Route exact path="/movielist" element={<MovieList />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
