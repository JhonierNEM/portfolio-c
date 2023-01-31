import { Svg } from "./LinkedIn";

export default function Code({ className, hover, fill }) {
  return (
    <Svg
      className={className}
      fill={fill}
      hover={hover}
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24"
    >
      <path
        d="m8 18l-6-6l6-6l1.425 1.425l-4.6 4.6L9.4 16.6Zm8 0l-1.425-1.425l4.6-4.6L14.6 7.4L16 6l6 6Z"
      />
    </Svg>
  );
}

export function Work({ className, hover, fill }) {
  return (
    <Svg
      className={className}
      fill={fill}
      hover={hover}
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 48 48"
    >
      <mask id="ipSCardTwo0">
        <g
          fill="none"
          stroke="#080816"
          stroke-linejoin="round"
          stroke-width="1"
        >
          <path d="M28 12V4L8 14v28l12-6" />
          <path fill="#000" d="M20 16L40 6v28L20 44V16Z" />
        </g>
      </mask>
      <path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSCardTwo0)" />
    </Svg>
  );
}
