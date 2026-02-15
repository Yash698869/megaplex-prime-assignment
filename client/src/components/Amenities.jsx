function AmenityIcon({ name }) {
  const icons = {
    "Swimming Pool": (
      <svg viewBox="0 0 48 48" fill="none" stroke="#4db6ac" strokeWidth="2">
        <path d="M8 32c4-4 8 4 12 0s8 4 12 0s8 4 12 0" />
        <path d="M8 38c4-4 8 4 12 0s8 4 12 0s8 4 12 0" />
        <circle cx="20" cy="16" r="4" />
        <path d="M20 20v6" />
        <path d="M16 24h8" />
      </svg>
    ),
    Gymnasium: (
      <svg viewBox="0 0 48 48" fill="none" stroke="#4db6ac" strokeWidth="2">
        <rect x="4" y="18" width="6" height="12" rx="1" />
        <rect x="38" y="18" width="6" height="12" rx="1" />
        <rect x="10" y="20" width="4" height="8" rx="1" />
        <rect x="34" y="20" width="4" height="8" rx="1" />
        <line x1="14" y1="24" x2="34" y2="24" />
      </svg>
    ),
    Clubhouse: (
      <svg viewBox="0 0 48 48" fill="none" stroke="#4db6ac" strokeWidth="2">
        <path d="M6 22L24 8l18 14" />
        <rect x="10" y="22" width="28" height="18" />
        <rect x="18" y="28" width="12" height="12" />
        <line x1="24" y1="28" x2="24" y2="40" />
        <line x1="18" y1="34" x2="30" y2="34" />
      </svg>
    ),
    Garden: (
      <svg viewBox="0 0 48 48" fill="none" stroke="#4db6ac" strokeWidth="2">
        <path d="M24 40V24" />
        <path d="M24 24c-6-2-10-8-8-14 4 2 10 4 8 14z" />
        <path d="M24 28c6-2 10-8 8-14-4 2-10 4-8 14z" />
        <line x1="12" y1="40" x2="36" y2="40" />
      </svg>
    ),
    "Children's Play Area": (
      <svg viewBox="0 0 48 48" fill="none" stroke="#4db6ac" strokeWidth="2">
        <path d="M24 6L30 18H18z" />
        <line x1="24" y1="18" x2="24" y2="40" />
        <path d="M14 28l10 6" />
        <path d="M34 28l-10 6" />
        <line x1="10" y1="40" x2="38" y2="40" />
      </svg>
    ),
    "Jogging Track": (
      <svg viewBox="0 0 48 48" fill="none" stroke="#4db6ac" strokeWidth="2">
        <circle cx="28" cy="10" r="4" />
        <path d="M20 20l4-4 6 6 6-2" />
        <path d="M24 16l-4 10-6 4" />
        <path d="M26 22l-2 10 4 8" />
        <path d="M24 32l6 8" />
      </svg>
    ),
    "Yoga Deck": (
      <svg viewBox="0 0 48 48" fill="none" stroke="#4db6ac" strokeWidth="2">
        <circle cx="24" cy="10" r="4" />
        <path d="M24 14v10" />
        <path d="M16 20l8 4 8-4" />
        <path d="M18 34l6-10 6 10" />
        <line x1="12" y1="40" x2="36" y2="40" />
      </svg>
    ),
    "Kids Play Area": (
      <svg viewBox="0 0 48 48" fill="none" stroke="#4db6ac" strokeWidth="2">
        <circle cx="24" cy="12" r="6" />
        <path d="M14 40l10-16 10 16" />
        <line x1="18" y1="34" x2="30" y2="34" />
      </svg>
    ),
  };

  return icons[name] || (
    <svg viewBox="0 0 48 48" fill="none" stroke="#4db6ac" strokeWidth="2">
      <rect x="8" y="8" width="32" height="32" rx="4" />
      <circle cx="24" cy="24" r="8" />
    </svg>
  );
}

function Amenities({ data }) {
  if (!data) return null;

  return (
    <section className="amenities" id="amenities">
      <h2 className="amenities-title">Amenities</h2>
      <p className="amenities-sub">
        Thoughtfully crafted surroundings that reflect tradition, comfort, and a
        human-centered design approach.
      </p>

      <div className="amenities-layout">
        <div className="amenities-image">
          <img
            src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=500&h=600&fit=crop"
            alt="Building"
          />
        </div>

        <div className="amenities-grid">
          {(data.content.list || []).map((item, i) => (
            <div key={i} className="amenity-item">
              <div className="amenity-icon">
                <AmenityIcon name={item.name} />
              </div>
              <p className="amenity-name">{item.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="amenities-viewmore">
        <button className="btn-green">View more</button>
      </div>
    </section>
  );
}

export default Amenities;
