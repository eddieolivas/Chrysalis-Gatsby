import React from "react";
import { Link } from "gatsby";
//import NavItems from './navItems';

export default ({navItems}) => {
  const navList = navItems.map((navItem, i) => {
    if (navItem.children.length) {
      return (
        <div 
          key={"wrap" + i}
          style={{"display" : "inline-flex"}}>
          <Link 
            to={navItem.path}
            key={"navItem" + i}>{navItem.label}</Link>
          <ul key={i} title={navItem.label} id="basic-nav-dropdown">
              {navItem.children.map((navItemChild, j) => (
                  <Link
                      key={`${i}-${j}`}
                      to={navItemChild.path}>
                      {navItemChild.label}
                  </Link>
              ))}
          </ul>
        </div>
      );
    }
    return (
      <Link
          key={"topNavItem" + i}
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
