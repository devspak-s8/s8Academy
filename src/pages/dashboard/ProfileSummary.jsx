import React from 'react';

const ProfileSummary = () => {
  return (
    <section
      style={{
        backgroundColor: '#f7fafc',
        padding: 20,
        borderRadius: 8,
        marginBottom: 25,
        boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
      }}
    >
      <h3>Your Profile</h3>
      <p>Name: Sulayman</p>
      <p>Role: Full Stack Developer</p>
      <p>Email: sulayman@example.com</p>
    </section>
  );
};

export default ProfileSummary;
