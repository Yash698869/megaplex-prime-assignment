function Navbar() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <svg className="logo-icon" width="28" height="28" viewBox="0 0 100 100">
          <circle cx="50" cy="35" r="25" fill="none" stroke="#2e7d32" strokeWidth="3" />
          <line x1="50" y1="60" x2="50" y2="90" stroke="#2e7d32" strokeWidth="4" />
          <line x1="36" y1="78" x2="50" y2="66" stroke="#2e7d32" strokeWidth="3" />
          <line x1="64" y1="78" x2="50" y2="66" stroke="#2e7d32" strokeWidth="3" />
        </svg>
        <span className="logo-text">Megaplex Prime</span>
      </div>
      <ul className="navbar-links">
        <li><a onClick={() => scrollTo("hero")}>Home</a></li>
        <li><a onClick={() => scrollTo("overview")}>Overview</a></li>
        <li><a onClick={() => scrollTo("connectivity")}>Connectivity</a></li>
        <li><a onClick={() => scrollTo("amenities")}>Amenities</a></li>
        <li><a onClick={() => scrollTo("floorplan")}>Floor Plans</a></li>
        <li><a onClick={() => scrollTo("about")}>Developer</a></li>
        <li><a onClick={() => scrollTo("faq")}>Contact</a></li>
      </ul>
      <div className="navbar-right">
        <a className="navbar-enquiry" onClick={() => scrollTo("faq")}>Enquiry Now</a>
      </div>
    </nav>
  );
}

export default Navbar;
