import React from "react"

interface LogoProps {
  width: number
  height: number
}

const Logo = ({ width, height }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 226 42"
    >
      <g transform="translate(-130 -163)">
        <g transform="translate(198.03 100.883)">
          <g transform="translate(0 65.225)">
            <path
              d="M202.128,65.7l-1.583-.434a.713.713,0,0,0-.6.064.83.83,0,0,0-.4.5l-9.519,32.948a.764.764,0,0,0,.064.625.828.828,0,0,0,.5.4l1.582.434a.711.711,0,0,0,.6-.064.831.831,0,0,0,.4-.5l9.52-32.948a.765.765,0,0,0-.064-.626A.828.828,0,0,0,202.128,65.7Z"
              transform="translate(-173.009 -65.225)"
              fill="#b60045"
            />
            <path
              d="M14.853,120.884a.807.807,0,0,0-.255-.587l-1.276-1.276a.8.8,0,0,0-1.174,0L.255,130.913a.8.8,0,0,0,0,1.174L12.148,143.98a.8.8,0,0,0,1.174,0L14.6,142.7a.8.8,0,0,0,0-1.174L4.568,131.5,14.6,121.471A.806.806,0,0,0,14.853,120.884Z"
              transform="translate(0 -113.979)"
              fill="#b60045"
            />
            <path
              d="M370.909,130.91l-11.893-11.893a.8.8,0,0,0-1.174,0l-1.276,1.276a.8.8,0,0,0,0,1.174L366.6,131.5l-10.03,10.03a.8.8,0,0,0,0,1.174l1.276,1.275a.8.8,0,0,0,1.174,0l11.893-11.893a.8.8,0,0,0,0-1.174Z"
              transform="translate(-324.462 -113.976)"
              fill="#b60045"
            />
          </g>
        </g>
        <text
          transform="translate(164 196)"
          fill="#b60045"
          fontSize="34"
          fontFamily="Nunito-SemiBold, Nunito"
          fontWeight="600"
        >
          <tspan x="-33.685" y="0">
            APK
          </tspan>
        </text>
        <text
          transform="translate(301 196)"
          fill="#b60045"
          fontSize="34"
          fontFamily="Nunito-SemiBold, Nunito"
          fontWeight="600"
        >
          <tspan x="-54.329" y="0">
            MATIC
          </tspan>
        </text>
      </g>
    </svg>
  )
}

export default Logo
