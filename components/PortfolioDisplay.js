import React, { useState } from 'react';
import { PortfolioDetail } from '.';

import './PortfolioDisplay.scss';

const PortfolioDisplay = props => {
  const [detail, setDetail] = useState(null);
  const onDetailClick = projectId => {
    const display = props.items.filter(item => item.id === Number(projectId))[0];
    if (display) {
      setDetail(display);
    }
  };

  const onDetailClose = () => {
    setDetail(null);
  };

  let detailContent;

  if (detail) {
    detailContent = <PortfolioDetail {...props} detail={detail} onDetailClose={onDetailClose} />;
  } else {
    detailContent = null;
  }

  return (
    <>
      {detailContent}
      <div className="porfolio-display">
        {props.items.map(project => (
          <div key={project.id} className="portfolio-display__item">
            <div className="portfolio-display__item__info">
              <h3>{project.name}</h3>
              <div style={{ marginTop: '1rem' }}>
                <button
                  type="button"
                  className="btn btn-tertiary btn-sm btn--with-direction-right"
                  onClick={() => onDetailClick(project.id)}
                  style={{ minWidth: '150px' }}
                >
                  Details <i className="far fa-eye direction-icon" />
                </button>
              </div>
            </div>
            <img className="portfolio-display__item__image" src={project.imageUrl} alt={project.name} />
          </div>
        ))}
      </div>
    </>
  );
};

export default PortfolioDisplay;
