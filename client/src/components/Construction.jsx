const constructionImages = [
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=350&h=250&fit=crop",
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=350&h=250&fit=crop",
  "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=350&h=250&fit=crop",
];

function Construction({ data }) {
  if (!data) return null;

  return (
    <section className="construction" id="construction">
      <h2 className="section-heading">{data.title}</h2>
      <div className="construction-cards">
        {(data.content.updates || []).map((item, i) => (
          <div key={i} className="construction-card">
            <img src={constructionImages[i % constructionImages.length]} alt={item.label} />
            <div className="construction-card-overlay">
              <span className={`card-status status-${item.status.toLowerCase().replace(/\s/g, "-")}`}>
                {item.status}
              </span>
              <h4>{item.label}</h4>
              <a className="card-link">Know More</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Construction;
