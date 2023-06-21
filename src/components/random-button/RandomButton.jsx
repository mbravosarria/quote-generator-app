import "./random-button.css";

function RandomButton({ action }) {
  return (
    <a className="random-button" onClick={action}>
      <p>random</p>
      <svg
        height="21"
        viewBox="0 0 21 21"
        width="21"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          fill="none"
          fillRule="evenodd"
          stroke="#333333"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.6"
          transform="translate(2 1)"
        >
          <path d="m1.5 5.5c1.37786776-2.41169541 4.02354835-4 7-4 4.418278 0 8 3.581722 8 8m-1 4c-1.4081018 2.2866288-4.1175492 4-7 4-4.418278 0-8-3.581722-8-8" />
          <path d="m6.5 5.5h-5v-5" />
          <path d="m10.5 13.5h5v5" />
        </g>
      </svg>
    </a>
  );
}

export default RandomButton;
