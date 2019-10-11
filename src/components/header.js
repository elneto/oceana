import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/un-emblem.svg"
const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `white`,
    }}
  >
    <div
      style={{
        padding: `0.6rem 0`,
      }}
    >
      <div style={{ margin: 0 }} id="site-title">
        <Link
          to="/"
          style={{
            textDecoration: `none`,
          }}
        >
          <img id="logo" src={logo} alt="Emblem of the United Nations" />
          {siteTitle}
        </Link>
      </div>
    </div>
  </header>
)
Header.propTypes = {
  siteTitle: PropTypes.string,
}
Header.defaultProps = {
  siteTitle: ``,
}
export default Header
