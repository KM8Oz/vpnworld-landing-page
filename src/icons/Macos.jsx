import * as React from "react";

function Macos({size=20,...props}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 49 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#prefix__clip0_3_203)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M30.82 8.198c1.675-2.028 2.803-4.854 2.495-7.664-2.416.098-5.338 1.61-7.07 3.638-1.554 1.796-2.914 4.67-2.546 7.424 2.692.21 5.444-1.368 7.12-3.398zm6.04 17.836c.067 7.264 6.371 9.682 6.441 9.714-.052.17-1.006 3.444-3.322 6.826-2 2.924-4.076 5.838-7.348 5.898-3.214.058-4.246-1.906-7.922-1.906-3.672 0-4.82 1.846-7.864 1.964-3.156.12-5.56-3.162-7.578-6.074-4.122-5.96-7.272-16.84-3.042-24.184 2.102-3.648 5.856-5.958 9.932-6.016 3.1-.06 6.026 2.086 7.922 2.086 1.894 0 5.45-2.58 9.188-2.202 1.566.066 5.958.632 8.78 4.762-.228.14-5.242 3.06-5.188 9.132z"
          fill="#AAA"
        />
      </g>
      <defs>
        <clipPath id="prefix__clip0_3_203">
          <path
            fill="#fff"
            transform="translate(.218 .534)"
            d="M0 0h48v48H0z"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export default Macos;