function Hero({ data }) {
  if (!data) return null;

  return (
    <section className="hero" id="hero">
      <div className="hero-left">
        <img
          src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop"
          alt="Building aerial view"
          className="hero-left-img"
        />
        <div className="hero-left-overlay">
          <h2 className="hero-tagline">
            {data.content.subtitle}
          </h2>
          <div className="hero-tags">
            <span>20+ PODIUM LUXURIOUS AMENITIES</span>
            <span>SPACIOUS BALCONY HOMES*</span>
          </div>
        </div>
      </div>

      <div className="hero-right">
        <div className="hero-brand">
          <div className="brand-tree">
            <svg width="60" height="60" viewBox="0 0 100 100">
              <circle cx="50" cy="35" r="25" fill="none" stroke="#2e7d32" strokeWidth="2" />
              <line x1="50" y1="60" x2="50" y2="90" stroke="#2e7d32" strokeWidth="3" />
              <line x1="35" y1="75" x2="50" y2="65" stroke="#2e7d32" strokeWidth="2" />
              <line x1="65" y1="75" x2="50" y2="65" stroke="#2e7d32" strokeWidth="2" />
            </svg>
          </div>
          <p className="brand-sub">VIGHNAHARTA</p>
          <h1 className="brand-name">{data.title}</h1>
          <div className="brand-diamonds">
            <span className="diamond">◇</span>
            <span className="diamond">◇</span>
          </div>
        </div>

        <div className="hero-pricing">
          <div className="pricing-card">
            <h3>SMART 1 BHK</h3>
            <p className="old-price">@ <s>74.99 Lacs</s></p>
            <p className="new-price">₹ 69.99 Lacs*</p>
            <p className="price-label">onwards</p>
          </div>
          <div className="pricing-divider"></div>
          <div className="pricing-card">
            <h3>PREMIUM 2 BHK</h3>
            <p className="old-price">@ <s>1.05 CR</s></p>
            <p className="new-price">₹ 96.99 Lacs*</p>
            <p className="price-label">onwards</p>
          </div>
        </div>

        <div className="hero-location">
          <svg className="location-pin" width="24" height="24" viewBox="0 0 24 24" fill="#e53935">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" />
          </svg>
          <p><strong>BLDG. NO. 223/224,</strong><br />CIRCLE - KANNAMWAR NAGAR I, VIKHROLI (EAST)</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
