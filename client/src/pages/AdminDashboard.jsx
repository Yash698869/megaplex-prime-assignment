import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/api";
import "../styles/admin.css";

function AdminDashboard() {
  const [sections, setSections] = useState({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(null);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    API.get("/me")
      .then((res) => {
        if (!res.data.isAdmin) navigate("/admin");
      })
      .catch(() => navigate("/admin"));

    API.get("/content")
      .then((res) => {
        const map = {};
        res.data.forEach((s) => (map[s.sectionKey] = s));
        setSections(map);
      })
      .catch((err) => console.error("Failed to fetch content:", err))
      .finally(() => setLoading(false));
  }, [navigate]);


  const update = (key, field, value) => {
    setSections((prev) => ({
      ...prev,
      [key]: { ...prev[key], [field]: value },
    }));
  };

  const updateContent = (key, contentField, value) => {
    setSections((prev) => ({
      ...prev,
      [key]: {
        ...prev[key],
        content: { ...prev[key].content, [contentField]: value },
      },
    }));
  };

  const updateListItem = (key, listField, index, itemField, value) => {
    setSections((prev) => {
      const list = [...prev[key].content[listField]];
      list[index] = { ...list[index], [itemField]: value };
      return {
        ...prev,
        [key]: { ...prev[key], content: { ...prev[key].content, [listField]: list } },
      };
    });
  };

  const addListItem = (key, listField, template) => {
    setSections((prev) => {
      const list = [...prev[key].content[listField], template];
      return {
        ...prev,
        [key]: { ...prev[key], content: { ...prev[key].content, [listField]: list } },
      };
    });
  };

  const removeListItem = (key, listField, index) => {
    setSections((prev) => {
      const list = prev[key].content[listField].filter((_, i) => i !== index);
      return {
        ...prev,
        [key]: { ...prev[key], content: { ...prev[key].content, [listField]: list } },
      };
    });
  };

  const handleSave = async (sectionKey) => {
    setSaving(sectionKey);
    setMessage("");
    const section = sections[sectionKey];

    try {
      await API.put(`/content/${sectionKey}`, {
        title: section.title,
        content: section.content,
      });
      setMessage(`"${section.title}" saved successfully.`);
    } catch (err) {
      setMessage(err.response?.data?.error || "Failed to save.");
    } finally {
      setSaving(null);
    }
  };

  const handleLogout = async () => {
    await API.post("/logout");
    navigate("/admin");
  };


  const renderHero = () => {
    const s = sections.hero;
    if (!s) return null;
    return (
      <div className="admin-section-body">
        <div className="admin-field">
          <label>Title</label>
          <input value={s.title} onChange={(e) => update("hero", "title", e.target.value)} />
        </div>
        <div className="admin-field">
          <label>Subtitle</label>
          <textarea rows={2} value={s.content.subtitle || ""} onChange={(e) => updateContent("hero", "subtitle", e.target.value)} />
        </div>
        <div className="admin-field">
          <label>Description</label>
          <textarea rows={3} value={s.content.description || ""} onChange={(e) => updateContent("hero", "description", e.target.value)} />
        </div>
      </div>
    );
  };

  const renderOverview = () => {
    const s = sections.overview;
    if (!s) return null;
    return (
      <div className="admin-section-body">
        <div className="admin-field">
          <label>Title</label>
          <input value={s.title} onChange={(e) => update("overview", "title", e.target.value)} />
        </div>
        <div className="admin-field">
          <label>Description</label>
          <textarea rows={4} value={s.content.description || ""} onChange={(e) => updateContent("overview", "description", e.target.value)} />
        </div>
        <div className="admin-field">
          <label>Highlights (one per line)</label>
          <textarea
            rows={5}
            value={(s.content.highlights || []).join("\n")}
            onChange={(e) => updateContent("overview", "highlights", e.target.value.split("\n"))}
          />
        </div>
      </div>
    );
  };

  const renderConnectivity = () => {
    const s = sections.connectivity;
    if (!s) return null;
    return (
      <div className="admin-section-body">
        <div className="admin-field">
          <label>Title</label>
          <input value={s.title} onChange={(e) => update("connectivity", "title", e.target.value)} />
        </div>
        <div className="admin-field">
          <label>Description</label>
          <textarea rows={3} value={s.content.description || ""} onChange={(e) => updateContent("connectivity", "description", e.target.value)} />
        </div>
        <label className="admin-label">Places</label>
        {(s.content.places || []).map((place, i) => (
          <div key={i} className="admin-list-row">
            <input placeholder="Name" value={place.name} onChange={(e) => updateListItem("connectivity", "places", i, "name", e.target.value)} />
            <input placeholder="Distance" value={place.distance} onChange={(e) => updateListItem("connectivity", "places", i, "distance", e.target.value)} />
            <button className="admin-btn danger" onClick={() => removeListItem("connectivity", "places", i)}>Remove</button>
          </div>
        ))}
        <button className="admin-btn secondary" onClick={() => addListItem("connectivity", "places", { name: "", distance: "" })}>+ Add Place</button>
      </div>
    );
  };

  const renderAmenities = () => {
    const s = sections.amenities;
    if (!s) return null;
    return (
      <div className="admin-section-body">
        <div className="admin-field">
          <label>Title</label>
          <input value={s.title} onChange={(e) => update("amenities", "title", e.target.value)} />
        </div>
        <label className="admin-label">Amenities List</label>
        {(s.content.list || []).map((item, i) => (
          <div key={i} className="admin-list-block">
            <input placeholder="Name" value={item.name} onChange={(e) => updateListItem("amenities", "list", i, "name", e.target.value)} />
            <textarea placeholder="Description" rows={2} value={item.description} onChange={(e) => updateListItem("amenities", "list", i, "description", e.target.value)} />
            <button className="admin-btn danger" onClick={() => removeListItem("amenities", "list", i)}>Remove</button>
          </div>
        ))}
        <button className="admin-btn secondary" onClick={() => addListItem("amenities", "list", { name: "", description: "" })}>+ Add Amenity</button>
      </div>
    );
  };

  const renderAbout = () => {
    const s = sections.about;
    if (!s) return null;
    return (
      <div className="admin-section-body">
        <div className="admin-field">
          <label>Title</label>
          <input value={s.title} onChange={(e) => update("about", "title", e.target.value)} />
        </div>
        <div className="admin-field">
          <label>Description</label>
          <textarea rows={5} value={s.content.description || ""} onChange={(e) => updateContent("about", "description", e.target.value)} />
        </div>
      </div>
    );
  };

  const renderConstruction = () => {
    const s = sections.construction;
    if (!s) return null;
    return (
      <div className="admin-section-body">
        <div className="admin-field">
          <label>Title</label>
          <input value={s.title} onChange={(e) => update("construction", "title", e.target.value)} />
        </div>
        <label className="admin-label">Updates</label>
        {(s.content.updates || []).map((item, i) => (
          <div key={i} className="admin-list-row">
            <input placeholder="Label" value={item.label} onChange={(e) => updateListItem("construction", "updates", i, "label", e.target.value)} />
            <input placeholder="Status" value={item.status} onChange={(e) => updateListItem("construction", "updates", i, "status", e.target.value)} />
            <button className="admin-btn danger" onClick={() => removeListItem("construction", "updates", i)}>Remove</button>
          </div>
        ))}
        <button className="admin-btn secondary" onClick={() => addListItem("construction", "updates", { label: "", status: "" })}>+ Add Update</button>
      </div>
    );
  };

  const renderFaq = () => {
    const s = sections.faq;
    if (!s) return null;
    return (
      <div className="admin-section-body">
        <div className="admin-field">
          <label>Title</label>
          <input value={s.title} onChange={(e) => update("faq", "title", e.target.value)} />
        </div>
        <label className="admin-label">Questions &amp; Answers</label>
        {(s.content.questions || []).map((item, i) => (
          <div key={i} className="admin-list-block">
            <input placeholder="Question" value={item.question} onChange={(e) => updateListItem("faq", "questions", i, "question", e.target.value)} />
            <textarea placeholder="Answer" rows={2} value={item.answer} onChange={(e) => updateListItem("faq", "questions", i, "answer", e.target.value)} />
            <button className="admin-btn danger" onClick={() => removeListItem("faq", "questions", i)}>Remove</button>
          </div>
        ))}
        <button className="admin-btn secondary" onClick={() => addListItem("faq", "questions", { question: "", answer: "" })}>+ Add Q&amp;A</button>
      </div>
    );
  };


  const sectionConfig = [
    { key: "hero", label: "Hero Section", render: renderHero },
    { key: "overview", label: "Project Overview", render: renderOverview },
    { key: "connectivity", label: "Nearby Connectivity", render: renderConnectivity },
    { key: "amenities", label: "Amenities", render: renderAmenities },
    { key: "about", label: "About Us", render: renderAbout },
    { key: "construction", label: "Construction Updates", render: renderConstruction },
    { key: "faq", label: "FAQ", render: renderFaq },
  ];


  if (loading) return <p className="admin-loading">Loading...</p>;

  return (
    <div className="admin-dashboard">
      <div className="admin-header">
        <h1>Admin Dashboard</h1>
        <div style={{ display: "flex", gap: "0.5rem" }}>
          <a href="/" className="admin-btn secondary">← Home</a>
          <button className="admin-btn danger" onClick={handleLogout}>Logout</button>
        </div>
      </div>

      {message && <p className="admin-message">{message}</p>}

      {sectionConfig.map(({ key, label, render }) => (
        <div key={key} className="admin-section-card">
          <h2 className="admin-section-title">{label}</h2>
          {render()}
          <div className="admin-section-footer">
            <button className="admin-btn primary" onClick={() => handleSave(key)} disabled={saving === key}>
              {saving === key ? "Saving..." : `Save ${label}`}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AdminDashboard;
