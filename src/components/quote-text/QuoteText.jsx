import "./quote-text.css";
import SkeletonCard from "../skeleton/SkeletonCard";

function QuoteText({ text, loading }) {
  return (
    <div className="quote-container">
      {loading ? (
        <SkeletonCard />
      ) : (
        <p className="quote-text">&quot;{text}&quot;</p>
      )}
    </div>
  );
}

export default QuoteText;
