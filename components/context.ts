import React from "react"

interface Nav {
  isOpen: boolean
  toggleIsOpen?: (flag: boolean) => void
}

const navContext = React.createContext<Nav>({
  isOpen: false
})
const pageContext = React.createContext("")

export { navContext, pageContext }
