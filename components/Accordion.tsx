/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { motion } from 'framer-motion'

import './Accordion.scss'

function Accordion(props) {
  const { items } = props
  const [accItems, setAccItems] = useState(items)

  function getAccordionItemClass(item) {
    const baseClass = 'accordion-item'
    if (item.collapsed) {
      const constructClass = `${baseClass} collapsed`
      return constructClass
    }

    return baseClass
  }

  function toggleCollapsed(targetId) {
    const updatedAccItems = accItems.map(item => {
      if (targetId === item.id) {
        item.collapsed = !item.collapsed
      }
      return item
    })

    setAccItems([...updatedAccItems])
  }

  return (
    <div className="accordion">
      {accItems.map(item => {
        return (
          <div className={getAccordionItemClass(item)} key={item.id}>
            <div
              role="button"
              className="accordion-item__heading"
              tabIndex={0}
              onClick={() => {
                toggleCollapsed(item.id)
              }}
              onKeyPress={e => {
                const { key } = e
                if (key === 'Enter') {
                  toggleCollapsed(item.id)
                }
              }}
            >
              <span>{item.heading}</span>
              <motion.span
                className="accordion-item__toggle"
                transition={{
                  easings: 'linear',
                  duration: 0.25
                }}
                initial={{
                  rotate: '90deg'
                }}
                animate={{
                  rotate: item.collapsed ? '90deg' : '-90deg'
                }}
              >
                <i className="fa fa-chevron-right" />
              </motion.span>
            </div>
            <motion.div
              className="accordion-item__content-wrapper"
              aria-expanded={!item.collapsed}
              initial={false}
              transition={{
                easings: 'linear',
                duration: 0.25
              }}
              animate={{
                height: item.collapsed ? 0 : 'auto'
              }}
            >
              <div className="content">{item.content}</div>
            </motion.div>
          </div>
        )
      })}
    </div>
  )
}

export default Accordion
