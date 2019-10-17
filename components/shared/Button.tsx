import React, { ButtonHTMLAttributes } from "react"
import PropTypes from "prop-types"

// Button.propTypes = {
//   look: PropTypes.string,
//   type: PropTypes.string,
//   size: PropTypes.string,
//   block: PropTypes.bool,
//   asLink: PropTypes.bool,
//   className: PropTypes.string
// }

// Button.defaultProps = {
//   look: "primary",
//   type: "",
//   size: "",
//   block: false,
//   asLink: false,
//   className: ""
// }

interface ButtonProps {
  children: React.ReactNode[] | React.ReactNode | string
  look?: string
  size?: string
  block?: boolean
  asLink?: boolean
  customClass?: string
  isDisabled?: boolean
  onClick: (e: any) => any
}

const Button: React.StatelessComponent<ButtonProps> = ({
  look = "primary",
  size,
  block,
  asLink = false,
  isDisabled = false,
  customClass,
  children,
  ...rest
}) => {
  const btnClass = `btn btn-${look}${block ? " btn-block" : ""}${
    size ? ` btn-${size}` : ""
  }${customClass ? ` ${customClass}` : ""}`

  if (asLink) {
    return (
      <a className={btnClass} {...rest}>
        <React.Fragment>{children}</React.Fragment>
      </a>
    )
  }

  return (
    <button className={btnClass} disabled={isDisabled} {...rest}>
      {children}
    </button>
  )
}

export default Button
