import PropTypes from "prop-types";
import React from "react";

const Footer = ({ siteTitle, siteDescription }) => (
  <footer className="container light">
    <br />
    <hr />
    <br />© {new Date().getFullYear()}, A labor of ❤️, built on
    {` `}
    <a
      href="https://www.gatsbyjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Gatsby
    </a>
    {` `}by Eddie Olivas
  </footer>
);

Footer.propTypes = {
  siteTitle: PropTypes.string,
  siteDescription: PropTypes.string,
};

Footer.defaultProps = {
  siteTitle: ``,
  siteDescription: ``,
};

export default Footer;
