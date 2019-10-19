import React, { memo } from "react"
import Link from "next/link"
import { Checkmark } from ".."

import "../Card.scss"

const ServiceOptions = memo(() => (
  <div className="services-card-stack row d-flex align-items-stretch mt-3 pt-3">
    <div
      className="col-lg-4 mb-3 animated fadeInUp"
      style={{ animationDelay: "200ms" }}
    >
      <div
        className="card h-100 text-left"
        style={{
          borderTop: "8px solid #FFBF69"
        }}
      >
        <div className="card-body bg-light">
          <h3>Essential</h3>
          <p className="text-muted">
            Perfect for clean, light, and interactive websites.
          </p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <Checkmark /> Lightweight and Clean
          </li>
          <li className="list-group-item">
            <Checkmark /> Basic SEO
          </li>
          <li className="list-group-item">
            <Checkmark /> 1-4 pages
          </li>
          <li className="list-group-item">&ndash;</li>
        </ul>
        <div className="card-body">
          <Link href="/contact">
            <a className="btn btn-tertiary d-block" tabIndex={0} role="button">
              Contact for price
            </a>
          </Link>
        </div>
      </div>
    </div>

    <div className="col-lg-4 mb-3 animated fadeInUp">
      <div
        className="card h-100 text-left"
        style={{
          borderTop: "8px solid #DB324D"
        }}
      >
        <div className="card-body bg-light">
          <h3>Balanced</h3>
          <p className="text-muted">
            Perfect for more complicated websites with more content and rich
            interactions.
          </p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <Checkmark /> Clean Design
          </li>
          <li className="list-group-item">
            <Checkmark /> Interactive
          </li>
          <li className="list-group-item">
            <Checkmark /> Basic SEO
          </li>
          <li className="list-group-item">
            <Checkmark /> 5-10 pages
          </li>
        </ul>
        <div className="card-body">
          <Link href="/contact">
            <a className="btn btn-tertiary d-block" tabIndex={0} role="button">
              Contact for price
            </a>
          </Link>
        </div>
      </div>
    </div>

    <div
      className="col-lg-4 mb-3 animated fadeInUp"
      style={{ animationDelay: "200ms" }}
    >
      <div
        className="card h-100 text-left"
        style={{
          borderTop: "8px solid #6C9DD1"
        }}
      >
        <div className="card-body bg-light">
          <h3>Advanced</h3>
          <p className="text-muted">
            Perfect for more complicated products, like e-commerce or web apps.
          </p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <Checkmark /> Fast and Dynamic
          </li>
          <li className="list-group-item">
            <Checkmark /> API/Database Integration
          </li>
          <li className="list-group-item">
            <Checkmark /> Social Media API
          </li>
          <li className="list-group-item">
            <Checkmark /> Unlimited Pages
          </li>
        </ul>
        <div className="card-body">
          <Link href="/contact">
            <a className="btn btn-tertiary d-block" tabIndex={0} role="button">
              Contact for price
            </a>
          </Link>
        </div>
      </div>
    </div>
  </div>
))

export default ServiceOptions
