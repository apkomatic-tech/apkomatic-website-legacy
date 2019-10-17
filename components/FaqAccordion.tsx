/* eslint-disable react/prop-types */
import React, { useState } from 'react';

import './FaqAccordion.scss';

function FaqAccordion(props) {
  const { items } = props;
  const [faqItems, setFaqItems] = useState(items);

  function getAccordionItemClass(item) {
    const baseClass = 'accordion-item';
    if (item.collapsed) {
      const constructClass = `${baseClass} collapsed`;
      return constructClass;
    }

    return baseClass;
  }

  function toggleCollapsed(targetId) {
    const updatedFaq = faqItems.map(item => {
      if (targetId === item.id) {
        item.collapsed = !item.collapsed;
      }
      return item;
    });

    setFaqItems([...updatedFaq]);
  }

  return (
    <div className="accordion">
      {faqItems.map(item => (
        <div className={getAccordionItemClass(item)} key={item.id}>
          <div
            className="accordion-item__question"
            onClick={() => {
              toggleCollapsed(item.id);
            }}
          >
            {item.question} <i className="accordion-item__toggle fa fa-chevron-right" />{' '}
          </div>
          <div className="accordion-item__answer">
            <div className="content">{item.answer}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FaqAccordion;
