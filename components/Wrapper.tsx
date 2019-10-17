import React, { Attributes } from "react"
import "../css/global.scss"
import { jsxAttribute } from "@babel/types"

interface WrapperProps {
  children: any
  animated?: boolean
  animationClass?: string
  fluid?: boolean
  style?: any
}

const Wrapper = ({animated = false, fluid = false, animationClass="fadeIn", children, ...rest}: WrapperProps) => {
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

// const Wrapper = ({
//   animated,
//   fluid,
//   children,
//   ...rest
// }: IWrapper) => {

//   return (
//     <div
//       className={`container${fluid ? " container-fluid" : ""}${
//         animated ? " animated fadeIn" : ""
//       }`}
//       {...rest}
//     >
//       {children}
//     </div>
//   )
// }

export default Wrapper
