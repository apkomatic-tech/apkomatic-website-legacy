/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

import './Accordion.scss'

interface AccordionItem {
  id: number
  heading: string
  content: string
  collapsed: boolean
}

type AccordionProps = {
  items: AccordionItem[]
}

function Accordion({ items }: AccordionProps) {
  const [accItems, setAccItems] = useState(items)
  function toggleCollapsed(targetId) {
    const i = accItems.findIndex(acc => acc.id === targetId)
    setAccItems([
      ...accItems.slice(0, i),
      { ...accItems[i], collapsed: !accItems[i].collapsed },
      ...accItems.slice(i + 1)
    ])
  }

  return (
    <div className="accordion">
      {accItems.map(item => {
        return (
          <div className="accordion-item" key={item.id}>
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
