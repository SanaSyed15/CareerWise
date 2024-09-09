import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className="logo">CareerWise</div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/quiz">Quiz</Link></li>
          <li><Link to="/recommendations">Recommendations</Link></li>
          <li><Link to="/job-trends">Job Trends</Link></li>
          <li><Link to="/visualization">Visualization</Link></li>
        </ul>
      </nav>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>
    </header>
  );
};

export default Header;