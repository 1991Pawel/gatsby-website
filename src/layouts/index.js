import React from "react"
import Navigation from "../components/Navigation/Navigation"
import GlobalStyles from "../assets/globalStyles"
import Container from "../components/Container/Container"

const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <Container>
      <Navigation />
      {children}
    </Container>
  </>
)

export default Layout
