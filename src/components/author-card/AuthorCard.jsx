import { useNavigate } from "react-router-dom";
import "./author-card.css";

function AuthorCard({ author, genre, loading }) {
  const navigate = useNavigate();

  return (
    <>
      {loading ? (
        <></>
      ) : (
        <div className="card" onClick={() => navigate(`/${author}/quotes`)}>
          <div className="card-info">
            <p className="author">{author}</p>
            <p className="genre">{genre}</p>
          </div>
          <svg
            height="28"
            viewBox="0 0 21 21"
            width="28"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g
              fill="none"
              fillRule="evenodd"
              stroke="#4f4f4f"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              transform="translate(4 6)"
            >
              <path d="m9.5.497 4 4.002-4 4.001" />
              <path d="m.5 4.5h13" />
            </g>
          </svg>
        </div>
      )}
    </>
  );
}

export default AuthorCard;
