import { useState } from "react";

const wings = ["All", "East Wing", "West Wing", "North Wing", "South Wing"];
const bhkTypes = ["1 bhk", "2 bhk", "5,6 bhk"];

function FloorPlan() {
  const [activeWing, setActiveWing] = useState("All");
  const [activeBhk, setActiveBhk] = useState("1 bhk");

  return (
    <section className="floorplan" id="floorplan">
      <div className="floorplan-tabs">
        {wings.map((w) => (
          <button
            key={w}
            className={`tab ${activeWing === w ? "tab-active" : ""}`}
            onClick={() => setActiveWing(w)}
          >
            {w}
          </button>
        ))}
      </div>

      <div className="floorplan-content">
        <div className="floorplan-image">
          <img
            src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=500&h=400&fit=crop"
            alt="Floor plan"
          />
        </div>

        <div className="floorplan-details">
          <div className="bhk-buttons">
            {bhkTypes.map((b) => (
              <button
                key={b}
                className={`bhk-btn ${activeBhk === b ? "bhk-active" : ""}`}
                onClick={() => setActiveBhk(b)}
              >
                {b}
              </button>
            ))}
          </div>
          <p><strong>Type-</strong> {activeBhk.toUpperCase()}</p>
          <p><strong>Area-</strong> 380-411 RCA Sq.ft</p>
          <p><strong>Price -</strong> Click for price</p>
          <button className="btn-green">Download Floor Plan</button>

          <div className="floorplan-thumbnails">
            <img src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=100&h=80&fit=crop" alt="thumb1" />
            <img src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=100&h=80&fit=crop" alt="thumb2" />
            <img src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=100&h=80&fit=crop" alt="thumb3" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FloorPlan;
