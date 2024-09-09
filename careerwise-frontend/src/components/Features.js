import React from 'react';
import './Features.css';

const Features = () => {
  return (
    <section className="features">
      <div className="feature">
        <h2>Profile Management</h2>
        <p>Manage your profile easily and efficiently.</p>
      </div>
      <div className="feature">
        <h2>Career Recommendations</h2>
        <p>Get personalized career recommendations from our AI.</p>
      </div>
      <div className="feature">
        <h2>Job Trends</h2>
        <p>Stay updated with the latest job trends.</p>
      </div>
    </section>
  );
};

export default Features;