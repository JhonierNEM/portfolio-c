import { Svg } from './LinkedIn'

export default function Note({ className, hover, fill }) {
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
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
        d="M8 14h8m-8-4h2m-2 8h4M10 3H6a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-3.5M10 3V1m0 2v2"
      />
    </Svg>
  )
}
