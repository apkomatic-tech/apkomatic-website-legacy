import React, { useEffect } from "react"
import "./Toast.scss"

interface ToastProps {
  children: any
  type?: string
  show: boolean
  handleOnClick?: () => void | any
}

const Toast = ({ children, type, show, handleOnClick }: ToastProps) => {
  const baseClass = "toast"
  let cssClass = ""

  switch (type) {
    case "error":
      cssClass = `${baseClass} toast--error`
      break
    case "warning":
      cssClass = `${baseClass} toast--warning`
      break
    case "success":
      cssClass = `${baseClass} toast--success`
      break
    default:
      cssClass = baseClass
      break
  }

  cssClass = show ? `${cssClass} toast--show` : `${cssClass} toast--hide`

  return (
    <div className={cssClass} onClick={handleOnClick}>
      {children}
    </div>
  )
}

export default Toast
