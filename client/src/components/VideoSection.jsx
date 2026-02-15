function VideoSection() {
  return (
    <section className="video-section">
      <div className="video-wrapper">
        <img
          src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=1400&h=500&fit=crop"
          alt="City skyline"
          className="video-bg"
        />
        <div className="video-play-btn">
          <svg width="60" height="60" viewBox="0 0 60 60">
            <circle cx="30" cy="30" r="28" fill="rgba(255,255,255,0.85)" />
            <polygon points="24,18 24,42 44,30" fill="#2e7d32" />
          </svg>
        </div>
      </div>
    </section>
  );
}

export default VideoSection;
