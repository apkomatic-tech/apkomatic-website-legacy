import React from "react"
import PropTypes from "prop-types"
import "./Grid.scss"

interface GridProps {
  columns?: number
  children: React.ReactNode | HTMLElement[] | HTMLElement
}

const Grid = ({ children, columns = 2, ...rest }: GridProps) => {
  return (
    <div className={`grid c${columns}`} {...rest}>
      {children}
    </div>
  )
}
Grid.propTypes = {
  columns: PropTypes.number,
  children: PropTypes.node.isRequired
}
Grid.defaultProps = {
  columns: 2
}

export default Grid
