import * as React from "react";

function Close(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.345 22.897c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10c0 5.522 4.477 10 10 10zM15.345 9.897l-6 6M9.345 9.897l6 6"
        stroke="red"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Close;