import PetParadise from '../components/petrparadise.png';  
import Academix from '../components/academix.png';
import cybersecurity from '../components/cybersecurity.png'; 
import girl from '../components/girl.png';
import strong_website from '../components/strong_website.png';
import logs from '../components/logs.png';
import logged from '../components/logged_in.png';
import soulboost from '../components/soulboost1.png';
import soulboost2 from '../components/soulboost2.png';
import soulboost3 from '../components/soulboost3.png';
import soulboost4 from '../components/soulboost4.png';
import soulboost5 from '../components/soulboost5.png';
import ddos from '../components/attack.png';
import minirobot from '../components/minirobot.png';
import restaurail from '../components/restaurail.png';
import arduino_circuit from '../components/arduino_circuit.png';
import arduino_circuit2 from '../components/arduino_circuit2.png';
import running_state from '../components/running_state.png';
import robot_video from '../components/robot-video.mp4';
import synchealth1 from '../components/android_app.png';
import synchealth2 from '../components/synchealth_schema.png'
import chronoPlan from '../components/chronoplan.jpg';
import chronoplan_video from '../components/chronoplan.mp4';

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
      id: "mini-robot",
      title: "Mini Mobile Robot",
      shortDescription: "Autonomous robot with obstacle avoidance and remote control.",
      fullDescription: "A mobile robot system that includes both a remote-controlled physical robot and a simulation model. The robot features differential drive motors for precise steering and propulsion, commonly used in mobile robotics. Kinematic equations are employed to calculate linear and angular velocities simultaneously, ensuring accurate motor coordination during turning maneuvers.\n\nThe system incorporates a servo motor attached to an ultrasonic distance sensor for obstacle identification and avoidance. When obstacles are detected, the robot stops and actively searches for alternative routes. An infrared sensor enables remote control functionality by receiving commands from an IR receiver.\n\nThe project demonstrates comprehensive engineering practices including hardware integration, sensor interfacing, and algorithm development. The simulation model serves as a virtual testing platform for algorithm validation and control strategy refinement.",
      image: minirobot,
      screenshots: [
        { 
          url: arduino_circuit,
          caption: "Arduino UNO Circuit Design and Wiring",
          description: "This detailed circuit diagram shows the complete wiring schematic for the mobile robot. The Arduino UNO serves as the main microcontroller, interfacing with the motor driver (L298N), ultrasonic sensor (HC-SR04), servo motor, and IR receiver. The circuit includes proper power distribution from the 9V battery pack and shows the pin connections for all sensors and actuators. This design ensures reliable communication between all components while maintaining electrical safety standards."
        },
        { 
          url: arduino_circuit2,
          caption: "Component Integration and Power Management",
          description: "This second circuit view demonstrates the power management system and component integration. The dual battery setup (9V for motors and 4x1.5V for electronics) provides stable power distribution. The L298N motor driver handles the differential drive system, while the servo motor controls the ultrasonic sensor's scanning movement. Each component is carefully positioned to minimize electromagnetic interference and ensure optimal performance."
        },
        { 
          url: running_state,
          caption: "Robot in Operational State",
          description: "The assembled robot captured during autonomous navigation testing. This image shows the physical implementation of all circuit components mounted on the chassis. The ultrasonic sensor is positioned on the servo motor for 180-degree scanning capability, while the wheel configuration demonstrates the differential drive system. The compact design ensures mobility while housing all necessary electronics and sensors."
        },
        { 
          url: robot_video,
          caption: "Robot Navigation and Obstacle Avoidance Demo",
          description: "This video demonstration showcases the robot's autonomous navigation capabilities and obstacle avoidance algorithms in action. Watch as the robot scans its environment, detects obstacles using the ultrasonic sensor, and implements path planning to navigate around barriers. The video also demonstrates the remote control functionality via IR commands and the smooth coordination between sensors and motors."
        }
      ],
      technologies: ["Arduino UNO", "C++", "Servo Motors", "Ultrasonic Sensors", "IR Sensors", "DC Motors", "Motor Driver"],
      features: [
        "Differential Drive System",
        "Obstacle Detection & Avoidance",
        "Remote Control via IR",
        "Autonomous Navigation",
        "Servo-controlled Sensor Scanning",
        "Kinematic Equation Implementation",
        "Real-time Path Planning"
      ],
      github: "https://github.com",
      live: "https://example.com",
    },
    {
      id: "e-commerce-platforms",
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
      fullDescription: "During my internship in Afriquia Rezoroute, I was delegated to create a website to facilitate the client payment procedure using a QR code only. This project allows businesses to generate QR codes for their invoices, making it easier for customers to retrieve detailed billing information. It's efficient and user-friendly.",
      image: "https://upload.wikimedia.org/wikipedia/fr/3/3f/Afriquialogo.png",
      screenshots: [
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
      technologies: ["React", "Typescript"],
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
        { url: synchealth2, caption: "Project Schema" },
        { url: synchealth1, caption: "The android app" },
      ],
      technologies: ["Android Studio", "Java", "Python", "SQLite", "Arduino IDE"],
      features: ["Step Tracking", "Water Intake Monitoring", "Machine Learning Insights"],
      github: "https://github.com",
      live: "https://example.com",
    },
    {
      id: "ChronoPlan",
      title: "ChronoPlan",
      shortDescription: "A smart personal task planner that organizes your to-dos by deadlines and priorities.",
      fullDescription: "ChronoPlan is a productivity-focused task management app built with Symfony. It allows users to create personal accounts, add tasks with due dates, and automatically generates an organized plan based on priority and urgency. Designed to help individuals and teams stay on track, ChronoPlan provides a clear view of upcoming tasks and deadlines, ensuring nothing slips through the cracks.",
      image: chronoPlan,
      screenshots: [
        {
          url: chronoplan_video,
          caption: "ChronoPlan Demo",
          description: "Video walkthrough showing task creation, deadline & priority scheduling, and the responsive dashboard in action."
        }
      ],
      technologies: ["Symfony", "PHP", "MySQL", "Twig", "Bootstrap"],
      features: [
        "User authentication and personal accounts",
        "Add, edit, and delete tasks",
        "Set and track due dates",
        "Automatic priority planning based on deadlines",
        "Responsive dashboard for task overview",
        "Secure task storage linked to user accounts"
      ],
      github: "https://github.com/yourusername/ChronoPlan",
      live: "https://example.com/chronoplan"
    },
    
    {
    id: "RH-management",
    title: "RH Management",
    shortDescription: "Human Resources management system.",
    fullDescription: "A comprehensive Human Resources management system designed to streamline HR processes, including employee management, leaves, and statistics.",
    image: restaurail,
    screenshots: [

    ],
    technologies: ["PHP", "Javascript", "Cloudways","Bootstrap" , "HTML/CSS", "MySQL"],
    features: [
      "Employee Management",
      "Leave Management",
      "Statistics and Reporting",
      "Admin Dashboard",
      "User Authentication"
    ],
    github: "https://github.com",
    live: "https://example.com",
    },
  ];
