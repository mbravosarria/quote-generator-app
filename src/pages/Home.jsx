import { useEffect, useState } from "react";
import RandomButton from "../components/random-button/RandomButton";
import QuoteText from "../components/quote-text/QuoteText";
import AuthorCard from "../components/author-card/AuthorCard";

function Home() {
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    randomQuote();
  }, []);

  const randomQuote = () => {
    fetch("https://quote-garden.onrender.com/api/v3/quotes/random")
      .then((response) => response.json())
      .then((data) => setQuote(data.data[0]));
  };

  return (
    <>
      <RandomButton action={randomQuote} />
      <QuoteText text={quote?.quoteText} />
      <AuthorCard author={quote?.quoteAuthor} genre={quote?.quoteGenre} />
    </>
  );
}

export default Home;
