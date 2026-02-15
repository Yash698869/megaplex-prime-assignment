function About({ data }) {
  if (!data) return null;

  const stats = [
    { value: "6", label: "Projects" },
    { value: "1.32 LAC", label: "sq. ft. area developed" },
    { value: "449+", label: "Happy Families" },
    { value: "3.77LAC", label: "sq. ft. ongoing" },
    { value: "2.7LAC", label: "sq. ft. Area Upcoming" },
  ];

  return (
    <section
      className="about-developer"
      id="about"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1400&h=500&fit=crop)",
      }}
    >
      <div className="about-dev-overlay">
        <div className="about-dev-content">
          <h2>{data.title}</h2>
          <p>{data.content.description}</p>
        </div>
        <div className="about-stats">
          {stats.map((s, i) => (
            <div key={i} className="stat-item">
              <h3>{s.value}</h3>
              <p>{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
