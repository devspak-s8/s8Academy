import React from 'react';

const ProgressOverview = () => {
  const progressData = {
    lessonsCompleted: 8,
    totalLessons: 16,
    assignmentsPending: 3,
  };

  const percentCompleted = (progressData.lessonsCompleted / progressData.totalLessons) * 100;

  return (
    <section
      style={{
        backgroundColor: '#ffffff',
        padding: 24,
        borderRadius: 12,
        marginBottom: 30,
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        maxWidth: 450,
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <h3 style={{ fontWeight: '700', fontSize: 22, marginBottom: 18, color: '#2d3748' }}>
        Progress Overview
      </h3>

      <div style={{ marginBottom: 20 }}>
        <label
          htmlFor="lesson-progress"
          style={{ display: 'block', marginBottom: 6, fontWeight: '600', color: '#4a5568' }}
        >
          Lessons Completed
        </label>
        <div
          id="lesson-progress"
          role="progressbar"
          aria-valuenow={percentCompleted}
          aria-valuemin={0}
          aria-valuemax={100}
          style={{
            width: '100%',
            height: 22,
            backgroundColor: '#e2e8f0',
            borderRadius: 12,
            overflow: 'hidden',
            boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.1)',
          }}
        >
          <div
            style={{
              width: `${percentCompleted}%`,
              height: '100%',
              backgroundColor: '#3182ce',
              borderRadius: 12,
              transition: 'width 0.4s ease-in-out',
              boxShadow: '0 2px 8px #3182ceaa',
            }}
          />
        </div>
        <p style={{ marginTop: 8, fontSize: 14, color: '#718096', fontWeight: '500' }}>
          {progressData.lessonsCompleted} of {progressData.totalLessons} lessons completed (
          {percentCompleted.toFixed(0)}%)
        </p>
      </div>

      <div>
        <p
          style={{
            fontWeight: '600',
            fontSize: 16,
            color: progressData.assignmentsPending > 0 ? '#e53e3e' : '#38a169',
          }}
        >
          Pending Assignments:{' '}
          <span style={{ fontWeight: '700' }}>{progressData.assignmentsPending}</span>
        </p>
      </div>
    </section>
  );
};

export default ProgressOverview;
