import React, { Component } from 'react';
import { PortfolioDetail } from '.';

import './PortfolioDisplay.scss';

const cardTextAlignStyle = 'text-center text-md-left text-lg-left text-xl-left';

export default class PortfolioDisplay extends Component {
  state = {
    detail: null
  };

  onDetailClick = e => {
    e.preventDefault();

    const data = e.target.dataset;
    const { id } = data;
    const { items } = this.props;
    const display = items.filter(item => item.id === Number(id))[0];
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
        {items.map(project => (
          <div key={project.id} className="col-lg-6 mb-3">
            <article className={`card project h-100 ${cardTextAlignStyle}`}>
              <div className="card-body">
                <h3>{project.name}</h3>
                <img className="img-fluid project__image" src={project.imageUrl} alt={project.name} />
              </div>
              <div className="card-body">
                {project.url && (
                  <a href={project.url} className="project__visit-btn btn btn-light mr-2">
                    Visit Website <i className="fa fa-link" />
                  </a>
                )}

                <a
                  href="#"
                  data-id={project.id}
                  onClick={this.onDetailClick}
                  className="project__visit-btn btn btn-primary"
                >
                  Details <i className="fas fa-search-plus" />
                </a>
              </div>
            </article>
          </div>
        ))}
      </React.Fragment>
    );
  }
}
