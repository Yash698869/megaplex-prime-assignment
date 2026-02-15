function ExploreBuildings() {
  const buildings = [
    {
      name: "Vighnaharta Aaradhya",
      img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=350&fit=crop",
      tag: "",
    },
    {
      name: "Vignaharta Enclave",
      img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=350&fit=crop",
      tag: "Newly Launched",
    },
    {
      name: "Vighnaharta Infinity",
      img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=350&fit=crop",
      tag: "Newly Launched",
    },
  ];

  return (
    <section className="explore" id="explore">
      <h2 className="explore-heading">Explore More Buildings in the Township</h2>
      <div className="explore-grid">
        <button className="explore-arrow left">&lsaquo;</button>
        {buildings.map((b, i) => (
          <div key={i} className="explore-card">
            <img src={b.img} alt={b.name} />
            <div className="explore-label">
              {b.tag && <span className="explore-tag">{b.tag} - </span>}
              {b.name}
            </div>
          </div>
        ))}
        <button className="explore-arrow right">&rsaquo;</button>
      </div>
    </section>
  );
}

export default ExploreBuildings;
