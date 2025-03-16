import logoSynchealth from '../components/logo_synchealth.png'; // Import the local image
 // Import the local image
import dgiScreen from '../components/dgi_converto.png';
import Academix from '../components/academix.png';
import PetParadise from '../components/petparadise.png';  
import cybersecurity from '../components/cybersecurity.png'; 
import girl from '../components/girl.png';
import strong_website from '../components/strong_website.png';
import weak_website from '../components/weak_website.png';
import logs from '../components/logs.png';
import login from '../components/login_page.png';
import logged from '../components/logged_in.png';
import adminer_auth from '../components/adminer-auth.png';
import admin_web from '../components/adminer-web.png';
import soulboost from '../components/soulboost1.png';
import soulboost2 from '../components/soulboost2.png';
import soulboost3 from '../components/soulboost3.png';
import soulboost4 from '../components/soulboost4.png';
import soulboost5 from '../components/soulboost5.png';
import ddos from '../components/attack.png';


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
      description?: string;
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
      image: "https://www.servcorp.co.uk/media/34561/e-commerce-img.jpeg",
      screenshots: [
        { url: Academix, caption: " Basic online courses platform" },
        { url: PetParadise, caption: "Pet shop online platform" },
        { url: "https://b8f4g5a7.delivery.rocketcdn.me/wp-content/uploads/2024/01/inspiro-pro-1024x637.png", caption: "WordPress" },
      ],
      technologies: ["React", "Vite", "Typescript", "Node.js", "WordPress", "Elementor", "Woocommerce"],
      features: ["Payment Integration", "Responsive Design", "User Analytics"],
      github: "https://github.com",
      live: "https://petparadise.com",
    },
    {
      id: "AutoGo SC",
      title: "AutoGo SC",
      shortDescription: "Website generating QR code for invoices.",
      fullDescription: "During my internship in Afriquia Rezoroute, I was delegated to create a website to facilitate the client payment procedure using a QR code only. This project allows businesses to generate QR codes for their invoices, making it easier for customers to retrieve detailed billing information. It’s efficient and user-friendly.",
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
      id: "firewall-config",
      title: "Web Application Firewall Configuration",
      shortDescription: "ModSecurity WAF implementation with Nginx.",
      fullDescription: "Implemented and configured a robust Web Application Firewall (WAF) using ModSecurity with Nginx on Ubuntu VM. The project included setting up security rules, monitoring real-time threats, and analyzing log patterns to enhance web application security. Through rigorous testing, I demonstrated the effectiveness of the WAF in protecting against common web vulnerabilities and attacks.",
      image: cybersecurity,
      screenshots: [
        {
          url: strong_website,
          caption: "Protected Website with WAF",
          description: "This screenshot demonstrates a website protected by our WAF configuration. Notice how the security headers are properly implemented and potential attack vectors are blocked."
        },
        {
          url: logged,
          caption: "Successful Authentication",
          description: "After successful authentication, the WAF continues to monitor and protect the session, preventing session hijacking and ensuring secure communication."
        },
        {
          url: logs,
          caption: "Real-time Security Logs Analysis",
          description: "Our WAF provides comprehensive logging capabilities. These logs show real-time threat detection and blocking of malicious requests, including SQL injection attempts and XSS attacks."
        },
        {
          url: ddos,
          caption: "DDoS Attacks Prevention and Logs Analysis",
          description: "The WAF is capable of mitigating DDoS attacks by analyzing traffic patterns and blocking suspicious requests. This screenshot shows the WAF in action, protecting the website from a potential DDoS attack."
        }
      ],
    
      technologies: ["Nginx", "ModSecurity", "Ubuntu", "Shell Scripting", "Log Analysis"],
      features: [
        "Real-time Traffic Monitoring",
        "Custom Security Rules Implementation",
        "Log Analysis and Threat Detection",
        "Performance Optimization",
        "SQL Injection Prevention",
        "XSS Attack Protection",
        "Access Control Management"
      ],
      github: "https://github.com",
      live: "https://example.com",
    },

    
    {
      id: "SoulBoost",
      title: "SoulBoost",
      shortDescription: "Therapeutic app with inspiring messages.",
      fullDescription: "A therapeutic application designed to deliver uplifting and inspiring messages to its users. Features include real-time updates and a user-friendly interface.",
      image: girl,
      screenshots: [
        { url:soulboost, caption: "Welcome Page" },
        { url:soulboost2, caption: "Emotions Picker" },
        { url:soulboost4, caption: "Quotes" },
        { url:soulboost3, caption: "Quran Verses" },
        { url:soulboost5, caption: "Texte typing" }
      ],
      technologies: ["React", "Socket.io", "Node.js", "Redis"],
      features: ["Real-Time Messaging", "Inspirational Quotes", "Interactive UI"],
      github: "https://github.com",
      live: "https://example.com",
    },
    {
      id: "SynchHealth",
      title: "SynchHealth",
      shortDescription: "Health tracking app with ML features.",
      fullDescription: "A mobile app that helps users track their steps, water intake, and weight progress. It leverages machine learning for advanced insights and personalized recommendations.",
      image: "https://www.letscale.com/wp-content/uploads/2025/01/electronichealthrecordsecurity_ce6d37f0ad9ae66183c7386ac5997cd8_2000.jpg",
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
      id: "DGI-Converto",
      title: "DGI-Converto",
      shortDescription: "Excel to XML converter with data analysis.",
      fullDescription: "A web application that converts Excel files to XML format and provides powerful data analysis tools. Ideal for businesses handling large datasets.",
      image: "https://www.velvetech.com/wp-content/uploads/2022/07/data-analytics-role.jpg",
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
  