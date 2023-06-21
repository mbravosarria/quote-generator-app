import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import AuthorQuotes from "./pages/AuthorQuotes";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:author/quotes" element={<AuthorQuotes />} />
    </Routes>
  );
}

export default App;
