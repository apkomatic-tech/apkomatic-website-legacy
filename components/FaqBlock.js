import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './FaqBlock.scss';

export default class FaqBlock extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired
  };

  state = {
    answerExpanded: this.props.answer.expanded
  };

  toggleExpanded = () => {
    this.setState({
      answerExpanded: !this.state.answerExpanded
    });
  };

  render() {
    const { answerExpanded } = this.state;
    const { id, question, answer } = this.props;
    return (
      <article key={id} className="faq-block">
        <button className={`faq-block__q${answerExpanded ? ' expanded' : ''}`} onClick={this.toggleExpanded}>
          <i className={`faq-block__q-icon fa${answerExpanded ? ' fa-angle-down' : ' fa-angle-right'}`} />
          {question}
        </button>
        <div className={`faq-block__a${!answerExpanded ? ' d-none' : ''}`}>{answer.text}</div>
      </article>
    );
  }
}
