import React from "react";
import { Link } from "gatsby";
//import NavItems from './navItems';

export default ({navItems}) => {
  const navList = navItems.map((navItem, i) => {
    if (navItem.children.length) {
      return (
        <ul key={i} title={navItem.label} id="basic-nav-dropdown">
            {navItem.children.map((navItemChild, j) => (
                <Link
                    key={`${i}-${j}`}
                    to={navItemChild.path}>
                    {navItemChild.label}
                </Link>
            ))}
        </ul>
      );
    }
    return (
      <Link
          key={i}
          to={navItem.path}>
          {navItem.label}
      </Link>
    );
  });
  return (
    <nav>
        {navList}
      {/* <li>
          <Link to={`/services`}>Services</Link>
        </li>
        <li>
          <Link to={`/blog`}>Blog</Link>
        </li>
        <li>
          <Link to={`/about`}>About</Link>
        </li>
        <li>
          <Link to={`/contact`}>Contact</Link>
        </li> */}
    </nav>
  );
};
