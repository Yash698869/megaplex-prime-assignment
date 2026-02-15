function Overview({ data }) {
  if (!data) return null;

  return (
    <section className="about-project" id="overview">
      <div className="about-project-images">
        <div className="circle-img-group">
          <div className="circle-img large">
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=400&fit=crop"
              alt="Interior"
            />
          </div>
          <div className="circle-img small img-top">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=200&h=200&fit=crop"
              alt="Exterior"
            />
          </div>
          <div className="circle-img small img-bottom">
            <img
              src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=200&h=200&fit=crop"
              alt="Garden"
            />
          </div>
        </div>
      </div>

      <div className="about-project-text">
        <h2>About Project</h2>
        <p className="about-desc">{data.content.description}</p>
        {data.content.highlights && (
          <p className="about-quote">
            &ldquo;{data.content.highlights.join(" • ")}&rdquo;
          </p>
        )}
        <button className="btn-green">Download Brochure</button>
      </div>
    </section>
  );
}

export default Overview;
