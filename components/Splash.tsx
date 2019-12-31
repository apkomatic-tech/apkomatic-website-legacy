import React from "react"
import "./Splash.scss"

interface ISplash extends JSX.IntrinsicAttributes {
  title: string
  text?: string
  splashStyle?: string
}

const Splash = ({ title, text, splashStyle = "splash--alt1" }: ISplash) => (
  <div className={`splash ${splashStyle}`}>
    <div className="container splash__inner">
      <div className="text-center">
        <h1
          className="splash__title animated fadeInDown text-center"
          style={{ animationDuration: "500ms", animationDelay: "200ms" }}
        >
          {title}
        </h1>
        {text && (
          <p
            className="lead animated fadeInUp"
            style={{ animationDelay: "700ms" }}
            data-testid="splash-text"
          >
            {text}
          </p>
        )}
      </div>
    </div>
  </div>
)

export default Splash
