import logoSynchealth from '../components/logo_synchealth.png'; // Import the local image
import inspiApp from '../components/inspiration_app.png';
import dgiScreen from '../components/dgi_converto.png';


// Define the Project interface
export interface Project {
    id: string;
    title: string;
    shortDescription: string;
    fullDescription: string;
    image: string;
    screenshots: {
      url: string;
      caption: string;
    }[];
    technologies: string[];
    features: string[];
    github: string;
    live: string;
  }
  
  // Sample projects data
  export const projects: Project[] = [
    {
      id: "e-commerce platforms",
      title: "E-Commerce Platforms",
      shortDescription: "Full-stack e-commerce platforms.",
      fullDescription: "An end-to-end e-commerce platform with advanced features like payment gateway integration, responsive design, and real-time user analytics.",
      image: "https://naps.ma/wp-content/uploads/2022/05/Depositphotos_38143799_S.jpg",
      screenshots: [
        { url: "https://example.com/screenshot1.png", caption: "Homepage" },
        { url: "https://example.com/screenshot2.png", caption: "Product Page" },
      ],
      technologies: ["React", "Vite", "Typescript", "Node.js"],
      features: ["Payment Integration", "Responsive Design", "User Analytics"],
      github: "https://github.com",
      live: "https://petparadise.com",
    },
    {
      id: "AutoGo SC",
      title: "AutoGo SC",
      shortDescription: "Website generating QR code for invoices.",
      fullDescription: "This project allows businesses to generate QR codes for their invoices, making it easier for customers to retrieve detailed billing information. It’s efficient and user-friendly.",
      image: "https://upload.wikimedia.org/wikipedia/fr/3/3f/Afriquialogo.png",
      screenshots: [
        { url: "https://example.com/screenshot1.png", caption: "QR Code Generator" },
        { url: "https://example.com/screenshot2.png", caption: "Invoice Details" },
      ],
      technologies: ["HTML", "CSS", "MySQL", "JavaScript"],
      features: ["QR Code Generation", "Invoice Automation", "Responsive Design"],
      github: "https://github.com",
      live: "https://example.com",
    },
    {
      id: "3D Model Designs",
      title: "3D Model Designs",
      shortDescription: "Interactive 3D products generator tool.",
      fullDescription: "Using Three.js and React, this tool allows users to create and customize 3D product models interactively, perfect for e-commerce or design-focused industries.",
      image: "https://3d-ace.com/wp-content/uploads/nurbs-3D-model.png",
      screenshots: [
        { url: "https://example.com/screenshot1.png", caption: "3D Model Editor" },
        { url: "https://example.com/screenshot2.png", caption: "Generated Model Preview" },
      ],
      technologies: ["React", "Vite", "Typescript", "Blender"],
      features: ["3D Model Customization", "Interactive UI", "High-Performance Rendering"],
      github: "https://github.com",
      live: "https://example.com",
    },
    {
      id: "SynchHealth",
      title: "SynchHealth",
      shortDescription: "Health tracking app with ML features.",
      fullDescription: "A mobile app that helps users track their steps, water intake, and weight progress. It leverages machine learning for advanced insights and personalized recommendations.",
      image: logoSynchealth,
      screenshots: [
        { url: "https://example.com/screenshot1.png", caption: "Dashboard" },
        { url: "https://example.com/screenshot2.png", caption: "Progress Tracker" },
      ],
      technologies: ["Android Studio", "Java", "Python", "SQLite"],
      features: ["Step Tracking", "Water Intake Monitoring", "Machine Learning Insights"],
      github: "https://github.com",
      live: "https://example.com",
    },
    {
      id: "SoulBoost",
      title: "SoulBoost",
      shortDescription: "Therapeutic app with inspiring messages.",
      fullDescription: "A therapeutic application designed to deliver uplifting and inspiring messages to its users. Features include real-time updates and a user-friendly interface.",
      image: inspiApp,
      screenshots: [
        { url: "https://example.com/screenshot1.png", caption: "Message Dashboard" },
        { url: "https://example.com/screenshot2.png", caption: "Daily Inspirations" },
      ],
      technologies: ["React", "Socket.io", "Node.js", "Redis"],
      features: ["Real-Time Messaging", "Inspirational Quotes", "Interactive UI"],
      github: "https://github.com",
      live: "https://example.com",
    },
    {
      id: "DGI-Converto",
      title: "DGI-Converto",
      shortDescription: "Excel to XML converter with data analysis.",
      fullDescription: "A web application that converts Excel files to XML format and provides powerful data analysis tools. Ideal for businesses handling large datasets.",
      image: dgiScreen,
      screenshots: [
        { url: "https://example.com/screenshot1.png", caption: "File Upload" },
        { url: "https://example.com/screenshot2.png", caption: "Conversion Results" },
      ],
      technologies: ["HTML", "CSS", "MySQL", "JavaScript"],
      features: ["Excel to XML Conversion", "Data Analysis", "User-Friendly Interface"],
      github: "https://github.com",
      live: "https://example.com",
    },
  ];
  