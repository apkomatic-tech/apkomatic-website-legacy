import React from "react"
import "./BackgroundLayout.scss"
interface BackgroundLayoutProps {
  background?: string
  children: React.ReactNode
}

const BackgroundLayout = ({ background, children }: BackgroundLayoutProps) => {
  return (
    <div className="background-layout">
      <div
        className="side side--background"
        style={
          background
            ? {
                backgroundImage: `url(${background})`
              }
            : null
        }
      ></div>
      <div className="side side--content animated fadeIn">
        <div>{children}</div>
      </div>
    </div>
  )
}

export default BackgroundLayout
