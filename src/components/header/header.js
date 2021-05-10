import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import Navigation from "../navigation/navigation";
import Logo from '../../assets/images/Chrysalis-Logo-small1.png'
import { GetMenuItems } from '../../hooks/getMenuItems';
import styles from './header.module.scss';

const Header = ({ siteTitle, siteDescription }) => (
  <>
    <div className={styles.headerWrap}>
      <div className="container main-header">
        <div>
          <Link
            to="/"
          >
            <img
              src={Logo}
              alt={siteTitle + " logo"}
            />
          </Link>
        </div>
        <Navigation navItems={GetMenuItems().primaryNav} />
      </div>
    </div>
  </>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
  siteDescription: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
  siteDescription: ``,
};

export default Header;
