import { useEffect, useState } from "react";
import RandomButton from "../components/random-button/RandomButton";
import QuoteText from "../components/quote-text/QuoteText";
import AuthorCard from "../components/author-card/AuthorCard";

function Home() {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    randomQuote();
  }, []);

  const randomQuote = () => {
    if (!loading) {
      setLoading(true);
      fetch("https://quote-garden.onrender.com/api/v3/quotes/random")
        .then((response) => response.json())
        .then((data) => {
          setQuote(data.data[0]);
          setLoading(false);
        });
    }
  };

  return (
    <>
      <RandomButton action={randomQuote} loading={loading} />
      <QuoteText text={quote?.quoteText} loading={loading} />
      <AuthorCard
        author={quote?.quoteAuthor}
        genre={quote?.quoteGenre}
        loading={loading}
      />
    </>
  );
}

export default Home;
