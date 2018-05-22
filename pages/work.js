import React from 'react';
import Link from 'next/link';
import { projectData } from './../data/index';
import { Header, Footer, Wrapper, Splash } from './../components';

const cardTextAlignStyle = 'text-center text-md-left text-lg-left text-xl-left';

export default () => (
  <div id="work">
    <Header path="/work" />
    <Splash title="Work" text="Take a look at what we have done over time." />

    <Wrapper>
      <div className="row d-flex align-items-stretch mt-3 pt-3">
        {projectData.map(project => (
          <div className="col-lg-6 mb-3">
            <article className={`card project h-100 ${cardTextAlignStyle}`}>
              <div className="card-body">
                <h3>{project.name}</h3>
                <p className="text-muted">{project.description}</p>
                <img className="img-fluid project__image" src={project.imageUrl} alt={project.name} />
              </div>
              {project.features.length > 0 && (
                <ul className="project__features list-group list-group-flush">
                  {project.features.map(feature => (
                    <li className="list-group-item">
                      <i className="fa fa-check-circle" />
                      {feature}
                    </li>
                  ))}
                </ul>
              )}

              {project.url && (
                <div className="card-body">
                  <a href={project.url} className="project__visit-btn btn btn-tertiary d-block">
                    Visit <i className="fa fa-link" />
                  </a>
                </div>
              )}
            </article>
          </div>
        ))}
      </div>
    </Wrapper>
    <Footer />
  </div>
);
