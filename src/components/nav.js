import * as React from 'react';
import { Link } from 'gatsby';

const Nav = () => {
  return (
    <div id="nav">
      <div className="nav-item"><Link to="/">Home</Link></div>
      <div className="nav-item"><Link to="/about">About</Link></div>
      <div className="nav-item"><Link to="/posts">Posts</Link></div>
    </div>
  )
}

export default Nav;