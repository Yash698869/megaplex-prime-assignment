import { useEffect, useState } from "react";
import API from "../api/api";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Overview from "../components/Overview";
import Connectivity from "../components/Connectivity";
import Amenities from "../components/Amenities";
import ExploreBuildings from "../components/ExploreBuildings";
import FloorPlan from "../components/FloorPlan";
import VideoSection from "../components/VideoSection";
import About from "../components/About";
import Construction from "../components/Construction";
import Faq from "../components/Faq";
import "../styles/home.css";

function Home() {
  const [sections, setSections] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    API.get("/content")
      .then((res) => {
        const map = {};
        res.data.forEach((s) => (map[s.sectionKey] = s));
        setSections(map);
      })
      .catch((err) => console.error("Failed to fetch content:", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return (
    <div className="home">
      <Navbar />
      <p className="loading">Loading content...</p>
    </div>
  );

  const hasData = Object.keys(sections).length > 0;

  return (
    <div className="home">
      <Navbar />
      {hasData ? (
        <>
          <Hero data={sections.hero} />
          <div className="section section-mint">
            <Overview data={sections.overview} />
          </div>
          <div className="section section-mint">
            <Amenities data={sections.amenities} />
          </div>
          <ExploreBuildings />
          <div className="section section-white">
            <FloorPlan />
          </div>
          <VideoSection />
          <div className="section section-white">
            <Connectivity data={sections.connectivity} />
          </div>
          <div className="section section-mint">
            <About data={sections.about} />
          </div>
          <div className="section section-mint">
            <Construction data={sections.construction} />
          </div>
          <div className="section section-white">
            <Faq data={sections.faq} />
          </div>
        </>
      ) : (
        <p className="loading">Unable to load content. Please try again later.</p>
      )}

      <footer className="footer">
        <div className="footer-top">
          <span className="footer-brand">Megaplex Prime</span>
          <p className="footer-copy">&copy; 2026 Megaplex Prime. All rights reserved.</p>
        </div>
        <div className="footer-bottom">
          <a href="/admin" className="footer-admin-link">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
            Admin Login
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Home;
