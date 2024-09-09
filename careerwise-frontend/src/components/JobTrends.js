import React from 'react';
import './JobTrends.css';

const JobTrends = () => {
  return (
    <section className="job-trends">
      <h2>Latest Job Trends</h2>
      <ul>
        <li>Software Engineer: Growing</li>
        {/* Add more trends */}
      </ul>
      <button>Explore Job Trends</button>
    </section>
  );
};

export default JobTrends;