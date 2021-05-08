import React from "react";
//import { Link } from "gatsby";
import NavItems from './navItems';

export default ({navItems}) => {
  return (
    <nav>
      
      <ul>
        <NavItems />
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
      </ul>
    </nav>
  );
};
