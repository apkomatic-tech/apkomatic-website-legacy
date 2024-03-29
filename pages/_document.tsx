import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, user-scalable=no"
          />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <meta
            name="description"
            content="Apkomatic is a Los Angeles based web development company specializing in building websites and web applications."
          />
          <title>Apkomatic</title>
          <link rel="icon" href="/static/favicon.gif" />
          <link rel="stylesheet" type="text/css" href="/static/nprogress.css" />
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"
            integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU"
            crossOrigin="anonymous"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.1/css/swiper.css"
          />
          <script src="https://cdn.polyfill.io/v2/polyfill.min.js" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
