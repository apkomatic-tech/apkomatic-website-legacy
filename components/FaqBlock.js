import React from 'react';
import PropTypes from 'prop-types';
import './FaqBlock.scss';

const FaqBlock = ({ question, answer }) => (
  <article className="faq-block">
    <h4 className="faq-block__question">{question}</h4>
    <p className="faq-block__answer small">{answer}</p>
  </article>
);

FaqBlock.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired
};

export default FaqBlock;
