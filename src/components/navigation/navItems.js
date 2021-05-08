import React from 'react';
import { Link } from 'gatsby';

export default () => {
  return (
    <ul className={"flex"}>
      <li className={"mr-6"}>
        <Link className={"text-black-400"} to={"/services"}>Services</Link>
          <ul>
            <li style={{"display" : "none"}}>
              <Link className={"text-black-400"} to={"/services/web-design-and-development/"}>Web Design &amp; Development</Link>
            </li>
          </ul>  
      </li>
      <li className={"mr-6"}>
        <Link className={"text-black-400"} to={"/blog"}>Blog</Link>
      </li>
      <li className={"mr-6"}>
        <Link className={"text-black-400"} to={"/about"}>About</Link>
      </li>
      <li className={"mr-6"}>
        <Link className={"text-black-400"} to={"/contact"}>Contact</Link>
      </li>
    </ul>
  );
}