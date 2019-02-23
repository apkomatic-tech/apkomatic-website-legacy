import React, { Component } from 'react';
import { PortfolioDetail } from '.';

import './PortfolioDisplay.scss';

const cardTextAlignStyle = 'text-center text-md-left text-lg-left text-xl-left';

export default class PortfolioDisplay extends Component {
  state = {
    detail: null
  };

  onDetailClick = projectId => {
    const { items } = this.props;
    const display = items.filter(item => item.id === Number(projectId))[0];

    if (display) {
      this.setState({
        detail: display
      });
    }
  };

  onDetailClose = e => {
    e.preventDefault();
    this.setState({
      detail: null
    });
  };

  render() {
    const { items } = this.props;

    return (
      <React.Fragment>
        <PortfolioDetail {...this.state} {...this.props} onDetailClose={this.onDetailClose} />
        <div className="porfolio-display">
          {items.map(project => (
            <div key={project.id} className="portfolio-display__item">
              <div className="portfolio-display__item__info">
                <h3>{project.name}</h3>
                <div style={{ marginTop: '1rem' }}>
                  <button
                    type="button"
                    className="btn btn-tertiary btn-sm btn--with-direction-right"
                    onClick={() => this.onDetailClick(project.id)}
                    style={{ minWidth: '150px' }}
                  >
                    See Details <i className="far fa-eye direction-icon" />
                  </button>
                </div>
              </div>
              <img className="portfolio-display__item__image" src={project.imageUrl} alt={project.name} />
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}
