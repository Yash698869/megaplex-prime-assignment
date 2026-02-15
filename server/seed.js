require("dotenv").config();
const mongoose = require("mongoose");
const Section = require("./models/Section");

const sections = [
  {
    sectionKey: "hero",
    title: "Megaplex Prime",
    content: {
      subtitle: "Premium Living Redefined",
      description:
        "Luxury 2 & 3 BHK apartments in the heart of the city with world-class amenities.",
    },
  },
  {
    sectionKey: "overview",
    title: "Project Overview",
    content: {
      description:
        "Megaplex Prime is a premium residential project offering spacious apartments with modern architecture and thoughtful design. Located in a prime area with excellent connectivity.",
      highlights: [
        "2 & 3 BHK Luxury Flats",
        "24/7 Security & CCTV",
        "Prime Location",
        "Vastu Compliant",
        "Earthquake Resistant Structure",
      ],
    },
  },
  {
    sectionKey: "connectivity",
    title: "Nearby Connectivity",
    content: {
      description: "Strategically located with easy access to all major landmarks.",
      places: [
        { name: "Airport", distance: "15 mins" },
        { name: "Railway Station", distance: "10 mins" },
        { name: "Metro Station", distance: "5 mins" },
        { name: "Hospital", distance: "3 mins" },
        { name: "School", distance: "5 mins" },
        { name: "Shopping Mall", distance: "8 mins" },
      ],
    },
  },
  {
    sectionKey: "amenities",
    title: "Amenities",
    content: {
      list: [
        { name: "Swimming Pool", description: "Olympic-size swimming pool" },
        { name: "Gymnasium", description: "Fully equipped modern gym" },
        { name: "Clubhouse", description: "Lavish clubhouse with indoor games" },
        { name: "Garden", description: "Landscaped green gardens" },
        { name: "Children's Play Area", description: "Safe and fun play zone for kids" },
        { name: "Jogging Track", description: "Dedicated jogging and walking track" },
      ],
    },
  },
  {
    sectionKey: "about",
    title: "About Us",
    content: {
      description:
        "We are a leading real estate developer committed to creating world-class residential spaces. With over 10 years of experience, we have delivered 50+ successful projects across the country. Our mission is to build homes that combine luxury, comfort, and sustainability.",
    },
  },
  {
    sectionKey: "construction",
    title: "Construction Updates",
    content: {
      updates: [
        { label: "Foundation Work", status: "Completed" },
        { label: "Structure", status: "Completed" },
        { label: "Brickwork", status: "In Progress" },
        { label: "Plumbing & Electrical", status: "Upcoming" },
        { label: "Finishing & Handover", status: "Upcoming" },
      ],
    },
  },
  {
    sectionKey: "faq",
    title: "Frequently Asked Questions",
    content: {
      questions: [
        {
          question: "What is the possession date?",
          answer: "Expected possession is December 2026.",
        },
        {
          question: "Is home loan available?",
          answer: "Yes, approved by all major banks including SBI, HDFC, and ICICI.",
        },
        {
          question: "What are the payment plan options?",
          answer: "We offer flexible payment plans including construction-linked and down payment schemes.",
        },
        {
          question: "Is the project RERA registered?",
          answer: "Yes, the project is RERA registered.",
        },
        {
          question: "Are there any hidden charges?",
          answer: "No hidden charges. All costs are transparently communicated upfront.",
        },
      ],
    },
  },
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");

    await Section.deleteMany({});
    console.log("Cleared existing sections");

    await Section.insertMany(sections);
    console.log(`Seeded ${sections.length} sections`);

    await mongoose.disconnect();
    console.log("Done. Database seeded successfully.");
  } catch (err) {
    console.error("Seed error:", err.message);
    process.exit(1);
  }
}

seed();
