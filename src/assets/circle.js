import React, { useState } from "react";

const Circle = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="88"
      height="88"
      viewBox="0 0 88 88"
      fill="none"
    >
      <g filter="url(#filter0_d_18_815)">
        <g clip-path="url(#clip0_18_815)">
          <g filter="url(#filter1_d_18_815)">
            <circle cx="44" cy="36" r="20" fill="url(#paint0_linear_18_815)" />
            <circle cx="44" cy="36" r="17" stroke="white" stroke-width="6" />
          </g>
        </g>
      </g>
      <defs>
        <filter
          id="filter0_d_18_815"
          x="0"
          y="0"
          width="88"
          height="88"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="8" />
          <feGaussianBlur stdDeviation="12" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.249475 0 0 0 0 0.0916667 0 0 0 0 0.4 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_18_815"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_18_815"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_d_18_815"
          x="0"
          y="0"
          width="88"
          height="88"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="8" />
          <feGaussianBlur stdDeviation="12" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0linearGradient 0 0 0.249475 0 0 0 0 0.0916667 0 0 0 0 0.4 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_18_815"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_18_815"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_18_815"
          x1="44.958"
          y1="25.3919"
          x2="63.4959"
          y2="25.4003"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#A968E7" />
          <stop offset="1" stop-color="#FD479A" />
        </linearGradient>
        <clipPath id="clip0_18_815">
          <rect x="24" y="16" width="40" height="40" rx="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Circle;
