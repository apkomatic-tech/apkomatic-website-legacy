import React from "react"

interface WrapperProps {
  children: any
  animated?: boolean
  animationClass?: string
  fluid?: boolean
  style?: any
}

const Wrapper = ({
  animated = false,
  fluid = false,
  animationClass = "fadeIn",
  children,
  ...rest
}: WrapperProps) => {
  return (
    <div
      className={`container${fluid ? " container-fluid" : ""}${
        animated ? ` animated ${animationClass}` : ""
      }`}
      {...rest}
    >
      {children}
    </div>
  )
}

export default Wrapper
