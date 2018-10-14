import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './FaqBlock.scss';

export default class FaqBlock extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    question: PropTypes.string.isRequired,
    answer: PropTypes.shape().isRequired
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
    // const { answerExpanded } = this.state;
    const { id, question, answer } = this.props;
    return (
      <article className="faq-block">
        <h4 className="faq-block__question">{question}</h4>
        <p className="faq-block__answer">{answer.text}</p>
      </article>
    );
  }
}
