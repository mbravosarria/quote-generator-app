import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import QuoteText from "../components/quote-text/QuoteText";
import RandomButton from "../components/random-button/RandomButton";
import SkeletonCard from "../components/skeleton/SkeletonCard";

function AuthorQuotes() {
  const { author } = useParams();
  const [quotes, setQuotes] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    fetch(`https://quote-garden.onrender.com/api/v3/quotes?author=${author}`)
      .then((response) => response.json())
      .then((data) => {
        setQuotes(data.data);
        setLoading(false);
      });
  }, [author]);

  return (
    <>
      <RandomButton action={() => navigate("/")} />
      <h1 className="author-title">{author}</h1>
      {loading ? (
        <div className="skeletons__container">
          <div className="skeleton">
            <SkeletonCard />
          </div>
          <div className="skeleton">
            <SkeletonCard />
          </div>
          <div className="skeleton">
            <SkeletonCard />
          </div>
          <div className="skeleton">
            <SkeletonCard />
          </div>
        </div>
      ) : (
        <>
          {quotes?.map((quote, index) => (
            <QuoteText key={index} text={quote?.quoteText} />
          ))}
        </>
      )}
    </>
  );
}

export default AuthorQuotes;
