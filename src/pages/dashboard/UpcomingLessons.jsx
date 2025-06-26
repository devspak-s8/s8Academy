import React from 'react';

const upcomingLessons = [
  { id: 1, title: 'JavaScript ES6 Features', date: '2025-06-20' },
  { id: 2, title: 'Responsive Design', date: '2025-06-22' },
  { id: 3, title: 'CSS Grid Layout', date: '2025-06-25' },
];

const UpcomingLessons = () => {
  return (
    <section style={{ marginBottom: 25 }}>
      <h3>Upcoming Lessons</h3>
      <ul>
        {upcomingLessons.map((lesson) => (
          <li key={lesson.id}>
            {lesson.title} - <em>{new Date(lesson.date).toLocaleDateString()}</em>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default UpcomingLessons;
