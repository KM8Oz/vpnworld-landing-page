import * as React from "react";

function Windows({size=30,...props}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 49 49"
      fill="none"
      {...props}
    >
      <g clipPath="url(#prefix__clip0_3_201)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48.756.191L22.828 3.977v19.176l25.928-.204V.191zM.91 6.987l.018 16.31 19.546-.11-.008-18.864L.91 6.987zm.016 34.566l19.546 2.688-.016-18.88-19.532-.126.002 16.318zm21.902 2.98l25.928 3.658.008-22.652-25.972-.044.036 19.038z"
          fill="#001589"
        />
      </g>
      <defs>
        <clipPath id="prefix__clip0_3_201">
          <path fill="#fff" transform="translate(.91 .191)" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default Windows;