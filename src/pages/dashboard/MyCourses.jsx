import React from 'react';

const MyCourses = () => {
  const courses = [
    {
      id: 1,
      title: 'HTML Fundamentals',
      lessons: '5 Lessons',
      icon: '📄',
      color: '#3182ce',
    },
    {
      id: 2,
      title: 'CSS Mastery',
      lessons: '7 Lessons',
      icon: '🎨',
      color: '#d53f8c',
    },
    {
      id: 3,
      title: 'JavaScript Essentials',
      lessons: '6 Lessons',
      icon: '💻',
      color: '#38a169',
    },
    {
      id: 4,
      title: 'Flexbox & Grid',
      lessons: '4 Lessons',
      icon: '🧱',
      color: '#805ad5',
    },
    {
      id: 5,
      title: 'ES6 Advanced',
      lessons: '6 Lessons',
      icon: '⚙️',
      color: '#dd6b20',
    },
  ];

  return (
    <section
      style={{
        marginBottom: 40,
        paddingInline: 10,
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <h2
        style={{
          fontSize: 20,
          fontWeight: '600',
          marginBottom: 20,
          color: '#2d3748',
        }}
      >
        My Courses
      </h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gap: 20,
        }}
      >
        {courses.map((course) => (
          <div
            key={course.id}
            style={{
              backgroundColor: '#ffffff',
              borderRadius: 12,
              overflow: 'hidden',
              boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
              transition: 'transform 0.2s ease-in-out',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <div
              style={{
                height: 100,
                backgroundColor: course.color,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                fontSize: 28,
              }}
            >
              {course.icon}
            </div>
            <div style={{ padding: 16 }}>
              <h3
                style={{
                  fontWeight: '600',
                  fontSize: 16,
                  color: '#2d3748',
                  marginBottom: 6,
                }}
              >
                {course.title}
              </h3>
              <p
                style={{
                  fontSize: 14,
                  color: '#718096',
                }}
              >
                {course.lessons}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyCourses;
