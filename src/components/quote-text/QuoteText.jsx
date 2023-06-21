import "./quote-text.css";

function QuoteText({ text }) {
  return (
    <div className="quote-container">
      <p className="quote-text">&quot;{text}&quot;</p>
    </div>
  );
}

export default QuoteText;
