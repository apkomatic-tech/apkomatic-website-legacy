import React from 'react';
import './PortfolioDetail.scss';

const PortfolioDetails = props => {
  const { detail, onDetailClose } = props;
  const containerClass = `portfolio-detail${detail ? ' portfolio-detail--shown' : ''}`;

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
          <img className="portfolio-detail__image img-fluid" src={detail.imageUrl} alt={detail.name} />
          <div className="portfolio-detail__btn-wrapper">
            <a href={detail.url} className="btn btn-tertiary btn--with-direction-right">
              Visit Website <i className="fas fa-link direction-icon" />
            </a>
          </div>
        </React.Fragment>
      );
    }

    return null;
  }

  return (
    <div className={containerClass}>
      <a href="#" onClick={onDetailClose} className="portfolio-detail__close">
        <i className="fas fa-times" />
      </a>

      <div className="portfolio-detail__wrapper">
        {renderProjectInfo()}
        {renderProjectFeatures()}
      </div>
    </div>
  );
};

// const PortfolioDetails = ({ detail, onDetailClose }) => (
//   <div className={`portfolio-details ${detail ? ' portfolio-details--shown' : ''}`}>
//     <a href="#" onClick={onDetailClose} className="portfolio-details__close">
//       <i className="fas fa-times" />
//     </a>
//     {detail && (
//       <div key={detail.id} className="portfolio-details__wrapper">
//         <h3>{detail.name}</h3>
//         <p className="text-muted">{detail.description}</p>
//         <img className="img-fluid image" src={detail.imageUrl} alt={detail.name} />
//         {detail.features.length > 0 &&
//           detail.features.map((feature, index) => (
//             <article key={index} className="feature">
//               <i className="fa fa-check-circle" />
//               {feature}
//             </article>
//           ))}
//         }
//         <div className="card-body">
//           {detail.url && (
//             <a href={detail.url} className="portfolio-details__visit-btn btn btn-tertiary">
//               Visit Website <i className="fa fa-link" />
//             </a>
//           )}
//         </div>
//       </div>
//     )}
//   </div>
// );

export default PortfolioDetails;
