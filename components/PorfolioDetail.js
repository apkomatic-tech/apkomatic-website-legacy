import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './PortfolioDetail.scss';

const PortfolioDetail = props => {
  const [width, updateWidth] = useState(window.innerWidth);
  const [height, updateHeight] = useState(window.innerHeight);
  const { detail, onDetailClose } = props;
  const containerClass = `portfolio-detail${detail ? ' portfolio-detail--shown' : ''}`;

  useEffect(() => {
    document.body.classList.add('fixed');
    return () => {
      document.body.classList.remove('fixed');
    };
  }, []);

  useEffect(() => {
    function handleResize() {
      updateWidth(window.innerWidth);
      updateHeight(window.innerHeight);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  function renderProjectFeatures() {
    if (detail && detail.features.length) {
      return (
        <div className="portfolio-detail__features">
          {detail.features.map((feature, i) => (
            <div key={i}>{feature}</div>
          ))}
        </div>
      );
    }

    return null;
  }

  function renderProjectInfo() {
    if (detail) {
      return (
        <React.Fragment>
          <h2 className="portfolio-detail__title">{detail.name}</h2>
          <p className="portfolio-detail__desc">{detail.description}</p>
          <div className="portfolio-detail__btn-wrapper">
            <a href={detail.url} className="btn btn-tertiary btn--with-direction-right">
              Visit <i className="fas fa-link direction-icon" />
            </a>
          </div>
        </React.Fragment>
      );
    }

    return null;
  }

  return (
    <div className={containerClass}>
      <button type="button" onClick={onDetailClose} className="portfolio-detail__close">
        <i className="fas fa-times" />
      </button>

      <div className="portfolio-detail__wrapper">
        {renderProjectInfo()}
        {renderProjectFeatures()}
      </div>
    </div>
  );
};

PortfolioDetail.propTypes = {
  detail: PropTypes.shape({}).isRequired,
  onDetailClose: PropTypes.func.isRequired
};

export default PortfolioDetail;
