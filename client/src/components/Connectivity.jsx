function Connectivity({ data }) {
  if (!data) return null;

  return (
    <section className="connectivity" id="connectivity">
      <h2 className="section-heading">{data.title}</h2>
      <p className="section-subtext">{data.content.description}</p>
      <div className="connectivity-grid">
        {(data.content.places || []).map((place, i) => (
          <div key={i} className="connectivity-card">
            <div className="conn-icon">📍</div>
            <h4>{place.name}</h4>
            <p>{place.distance}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Connectivity;
