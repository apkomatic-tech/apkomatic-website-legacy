import React from 'react';
import './PortfolioDetail.scss';

const PortfolioDetails = ({ detail, onDetailClose }) => (
  <article className={`portfolio-details ${detail ? ' portfolio-details--shown' : ''}`}>
    <a href="#" onClick={onDetailClose} className="portfolio-details__close">
      <i className="fas fa-times" />
    </a>

    {detail && (
      <article key={detail.id} className="card project">
        <div className="card-body">
          <h3>{detail.name}</h3>
          <p className="text-muted">{detail.description}</p>
          <img className="img-fluid project__image" src={detail.imageUrl} alt={detail.name} />
        </div>
        {detail.features.length > 0 && (
          <section className="project__features list-group list-group-flush">
            {detail.features.map((feature, index) => (
              <article key={index} className="project__feature list-group-item">
                <i className="fa fa-check-circle" />
                {feature}
              </article>
            ))}
          </section>
        )}

        <div className="card-body">
          {detail.url && (
            <a href={detail.url} className="project__visit-btn btn btn-tertiary">
              Visit Website <i className="fa fa-link" />
            </a>
          )}
        </div>
      </article>
    )}
  </article>
);

export default PortfolioDetails;
