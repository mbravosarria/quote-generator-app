import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import QuoteText from "../components/quote-text/QuoteText";
import RandomButton from "../components/random-button/RandomButton";

function AuthorQuotes() {
  const { author } = useParams();
  const [quotes, setQuotes] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://quote-garden.onrender.com/api/v3/quotes?author=${author}`)
      .then((response) => response.json())
      .then((data) => setQuotes(data.data));
  }, [author]);

  return (
    <>
      <RandomButton action={() => navigate("/")} />
      <h1 className="author-title">{author}</h1>
      {quotes?.map((quote, index) => (
        <QuoteText key={index} text={quote?.quoteText} />
      ))}
    </>
  );
}

export default AuthorQuotes;
