import React from 'react'

interface WrapperProps {
  children: any
  customClass?: String
  style?: any
}

const Wrapper = ({ children, customClass, ...rest }: WrapperProps) => {
  const mergeClassName = `wrapper${customClass ? ` ${customClass}` : ''}`

  return (
    <div className={mergeClassName} {...rest}>
      {children}
    </div>
  )
}

export default Wrapper
