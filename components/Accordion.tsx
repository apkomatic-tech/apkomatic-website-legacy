/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

import './Accordion.scss'

type AccordionProps = {
  items: {
    id: number
    heading: string
    content: string
    collapsed: boolean
  }[]
}

function useAccordion(items: any) {
  const [accItems, setAccItems] = useState(items)
  const toggleVisibility = (id: string | number) => {
    const ix = accItems.findIndex((item: any) => item.id === id)
    if (ix > -1) {
      setAccItems([
        ...accItems.slice(0, ix),
        { ...accItems[ix], collapsed: !accItems[ix].collapsed },
        ...accItems.slice(ix + 1)
      ])
    }
  }

  return {
    accItems,
    toggleVisibility
  }
}

function Accordion(props: AccordionProps) {
  const { accItems, toggleVisibility } = useAccordion(props.items)

  return (
    <div className="accordion">
      {accItems.map(({ id, heading, content, collapsed }) => {
        return (
          <div className="accordion-item" key={id}>
            <div
              role="button"
              className="accordion-item__heading"
              tabIndex={0}
              onClick={() => {
                toggleVisibility(id)
              }}
              onKeyPress={e => {
                const { key } = e
                if (key === 'Enter') {
                  toggleVisibility(id)
                }
              }}
            >
              <span>{heading}</span>
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
                  rotate: collapsed ? '90deg' : '-90deg'
                }}
              >
                <i className="fa fa-chevron-right" />
              </motion.span>
            </div>
            <motion.div
              className="accordion-item__content-wrapper"
              aria-expanded={!collapsed}
              initial={false}
              transition={{
                easings: 'linear',
                duration: 0.25
              }}
              animate={{
                height: collapsed ? 0 : 'auto'
              }}
            >
              <div className="content">{content}</div>
            </motion.div>
          </div>
        )
      })}
    </div>
  )
}

export default Accordion
