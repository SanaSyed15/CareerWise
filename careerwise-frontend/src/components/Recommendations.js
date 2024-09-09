import React from 'react';
import './Recommendations.css';

const Recommendations = () => {
  return (
    <section className="recommendations">
      <h2>Career Recommendations</h2>
      <ul>
        <li>Career A</li>
        <li>Career B</li>
        <li>Career C</li>
      </ul>
      <button>See All Recommendations</button>
    </section>
  );
};

export default Recommendations;