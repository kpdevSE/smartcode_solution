import { useState } from "react";
import {
  X,
  Menu,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import AboutSection from "./HomeComponents/AboutSection";
import ServiceSection from "./HomeComponents/ServiceSection";
import TeamSection from "./HomeComponents/TeamSection";
import ContactSection from "./HomeComponents/ContactSection";
import ProjectSection from "./HomeComponents/ProjectSection";
import HomeSection from "./HomeComponents/HomeSection";
import ProjectDetailSection from "./HomeComponents/ProjectDetailsSection";
import EnglishAcademy from "./assets/English_Academy.png";
import Eventz from "./assets/Eventz.png";
import AiTrip from "./assets/Aitrip.png";
import Hms from "./assets/hms-front.png";
import Fitzone from "./assets/fitzone.png";
import Kpdev from "./assets/portfolio.png";

// Mock project data
const projectsData = [
  {
    id: 1,
    title: "Event Planning Website(EVENTZ)",
    description:
      "A full-stack event planning web solution with user authentication and payment processing",
    image: Eventz,
    category: "Software Development",
    technologies: [
      ,
      "Next.Js",
      "React",
      "Node.js",
      "MongoDB",
      "Stripe",
      "Express.Js",
      "Prisma",
    ],
    keyFeatures: [
      "Secure user authentication and authorization system",
      "Real-time chatting integrated with Intercom and email notifications using Nodemailer",
      "Payment gateway integration with Stripe (Sri Lankan region)",
      "Responsive design optimized for mobile booking experiences",
      "Advanced event filtering and search capabilities",
    ],
    projectDetails: {
      clientName: "HD Computing and Software Engineering Final Project",
      duration: "1 month",
      teamSize: 2,
      challenge:
        "The client needed a modern platform to streamline event planning, allowing users to easily book venues, manage guest lists, and handle payments all in one place.",
      solution:
        "We built a full-stack event planning system with seamless user experiences using React and Next.js. The backend, developed in Node.js with Express and MongoDB, supports event creation, real-time communication, and secure payment processing.",
      outcome:
        "The platform enabled users to plan and confirm events 40% faster than traditional methods. It also improved user satisfaction by 30% through intuitive design and automated notifications. Over 500 events were successfully managed in the first three months.",
    },
  },
  {
    id: 2,
    title: "AI Trip Planing Website(Yamu Travels)",
    description:
      "An intelligent trip planning platform that leverages AI to generate personalized travel itineraries based on user preferences and real-time data.",
    image: AiTrip,
    category: "Software Development",
    technologies: [
      "Next.Js",
      "React",
      "Node.js",
      "MongoDB",
      "Stripe",
      "Express.Js",
      "Prisma",
      "Gemini Api",
    ],
    keyFeatures: [
      "AI-powered itinerary generation using Gemini API based on user interests, location, and travel dates",
      "Interactive map view with suggested routes, places, and travel times",
      "Real-time weather, traffic, and attraction availability integration",
      "Secure booking system for accommodations, transport, and activities with Stripe",
      "User dashboard with saved trips, collaborative planning, and sharing options",
    ],
    projectDetails: {
      clientName: "HD Computing and Software Engineering Final Project",
      duration: "1 months",
      teamSize: 2,
      challenge:
        "Travelers needed a smart solution to plan trips without spending hours researching destinations, routes, and activities while ensuring it fits their interests and budget.",
      solution:
        "We developed an AI-driven travel planning platform using Gemini API to provide personalized and dynamic trip recommendations. The backend integrates data from various sources including weather APIs, local attractions, and booking systems, ensuring a seamless experience.",
      outcome:
        "Users reported saving an average of 12+ hours on planning, with a 60% increase in satisfaction for personalized itineraries. Within the first 3 months, over 2,000 trips were successfully planned and booked using the platform.",
    },
  },
  {
    id: 3,
    title: "Learning Management System(English Academy)",
    description:
      "Interactive educational platform for online courses and training",
    image: EnglishAcademy,
    category: "Software Development",
    technologies: ["React", "Next.js", "PostgreSQL", "AWS"],
    keyFeatures: [
      "Interactive lesson plans with multimedia content support",
      "Automated assignment grading and progress tracking",
      "Live virtual classroom with screensharing and recording",
      "Customizable learning paths for personalized education",
      "Comprehensive analytics dashboard for educators",
    ],
    projectDetails: {
      clientName: "HD Computing and Software Engineering Final Project",
      duration: "2 months",
      teamSize: 5,
      challenge:
        "A growing educational technology company needed a scalable platform to deliver their specialized curriculum to students globally while providing teachers with robust management tools.",
      solution:
        "We developed a Next.js application hosted on AWS that prioritizes performance and accessibility. The system includes advanced content management for educators and an engaging interface for students with real-time interaction capabilities.",
      outcome:
        "The platform now serves over 50,000 students across 12 countries. Course completion rates increased by 28%, and instructor productivity improved by 35% compared to their previous system.",
    },
  },
  {
    id: 4,
    title: "Hospital Management System",
    description:
      "A complete web-based hospital management system with custom UI and admin control",
    image: Hms,
    category: "Technical Assignments",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    keyFeatures: [
      "Patient registration and appointment scheduling",
      "Role-based access for doctors, nurses, and administrators",
      "Real-time medical records and lab result updates",
      "Billing and invoice management system",
      "Dashboard analytics for hospital operations",
    ],
    projectDetails: {
      clientName: "Private Client",
      duration: "2 Weeks",
      teamSize: 1,
      challenge:
        "The hospital needed an all-in-one platform to digitize their operations, reduce paperwork, and provide quick access to patient data for better decision-making.",
      solution:
        "We developed a fully responsive web-based Hospital Management System using PHP and MySQL. It features modules for patient handling, appointments, billing, and staff management with a user-friendly admin interface.",
      outcome:
        "The hospital reported a 60% reduction in administrative workload, improved patient record accuracy, and significantly faster access to medical history and reports. Staff efficiency and patient satisfaction increased noticeably after implementation.",
    },
  },
  {
    id: 5,
    title: "Gym Management System (FitZone)",
    description:
      "Comprehensive web-based system for managing gym memberships, trainers, and workouts",
    image: Fitzone,
    category: "Technical Assignments",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Bootstrap"],
    keyFeatures: [
      "Member registration and subscription management",
      "Trainer scheduling and session booking",
      "Real-time workout tracking and progress monitoring",
      "Automated billing and payment notifications",
      "Admin dashboard with attendance and revenue analytics",
    ],
    projectDetails: {
      clientName: "Private Client",
      duration: "2 Weeks",
      teamSize: 1,
      challenge:
        "The client needed an all-in-one solution to manage their growing gym membership base, streamline trainer schedules, and digitize manual processes like billing and attendance.",
      solution:
        "We built a modular Gym Management System using PHP and MySQL, with a responsive Bootstrap frontend. The system includes role-based access for admins, trainers, and members, and allows real-time tracking of member progress and class attendance.",
      outcome:
        "The gym saw a 40% reduction in manual administrative tasks and a 50% increase in member engagement through progress tracking features. Online registration and scheduling increased monthly sign-ups by 30% within the first quarter of deployment.",
    },
  },
  {
    id: 6,
    title: "Portfolio Site (KPDEV)",
    description:
      "A modern and responsive developer portfolio showcasing projects, skills, and services with an integrated contact system.",
    image: Kpdev,
    category: "Custom Portfolio",
    technologies: ["React Native", "Node.js", "PostgreSQL", "Auth0"],
    keyFeatures: [
      "Interactive project gallery with detailed case studies",
      "Responsive design for mobile, tablet, and desktop",
      "Integrated contact form with real-time validation and email delivery",
      "Secure login system for managing private portfolio content",
      "Downloadable resume and dynamic skill section with proficiency bars",
    ],
    projectDetails: {
      clientName: "Personal Developer Portfolio – KPDEV",
      duration: "1 month",
      teamSize: 1,
      challenge:
        "The goal was to create a professional and visually engaging portfolio to showcase software projects, skills, and services for potential clients and employers.",
      solution:
        "We designed and developed a fully responsive personal portfolio using React Native, featuring smooth animations, a clean layout, and secure integration with contact forms and external project links. The app highlights key projects, includes an 'About Me' section, and offers downloadable resumes.",
      outcome:
        "The portfolio led to a 75% increase in client inquiries and helped secure freelance opportunities within the first two weeks of launch. Visitors praised the intuitive design and easy navigation across mobile platforms.",
    },
  },
  {
    id: 7,
    title: "State Pharmaceutical Cooperation Management System",
    description:
      "Comprehensive web-based pharmaceutical management system for state cooperatives to manage medicine inventory, sales, and user operations with real-time analytics and role-based access control.",
    image: "💊",
    category: "Software Development",
    technologies: ["ASP.NET", "C#", "SQL Server", "HTML", "CSS", "JavaScript"],
    keyFeatures: [
      "Complete medicine inventory management with CRUD operations for add, update, and delete functionality",
      "Real-time sales processing and transaction tracking for pharmaceutical operations",
      "Role-based user management system with Admin and Pharmacist access levels",
      "Automated medicine expiration monitoring with visual alerts and reporting",
      "Interactive analytics dashboard with bar charts showing medicine validity and real-time user statistics",
    ],
    projectDetails: {
      clientName: "State Pharmaceutical Cooperation",
      duration: "2 weeks",
      teamSize: 1,
      challenge:
        "The state pharmaceutical cooperative needed a digital solution to replace manual medicine inventory management, streamline sales operations, and ensure regulatory compliance with automated expiration tracking while maintaining secure user role management.",
      solution:
        "We developed a robust ASP.NET web application with SQL Server backend featuring dual-role architecture. The system provides comprehensive medicine inventory control, automated expiration alerts, real-time analytics with interactive charts, and secure user management with profile customization capabilities.",
      outcome:
        "Achieved 100% digital transformation of inventory management, reduced manual record-keeping by 50%, implemented automated expiration tracking preventing medicine waste, and established real-time user analytics improving operational efficiency and regulatory compliance.",
    },
  },
];

// Component imports from shadcn/ui
const Alert = ({ children, title, className = "" }) => {
  return (
    <div className={`bg-black text-white p-4 rounded-lg mb-4 ${className}`}>
      {title && <h4 className="font-bold mb-2">{title}</h4>}
      {children}
    </div>
  );
};

const Button = ({ children, variant = "default", className = "", onClick }) => {
  const variantClasses = {
    default: "bg-black text-white hover:bg-gray-800",
    outline: "border border-black text-black hover:bg-gray-100",
    ghost: "hover:bg-gray-100 text-black",
  };

  return (
    <button
      className={`px-4 py-2 rounded-md font-medium transition-colors ${variantClasses[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const Card = ({ children, className = "" }) => {
  return (
    <div
      className={`rounded-lg border border-gray-200 bg-white shadow-sm ${className}`}
    >
      {children}
    </div>
  );
};

const CardHeader = ({ children, className = "" }) => (
  <div className={`p-6 ${className}`}>{children}</div>
);

const CardTitle = ({ children, className = "" }) => (
  <h3 className={`text-xl font-semibold ${className}`}>{children}</h3>
);

const CardDescription = ({ children, className = "" }) => (
  <p className={`text-gray-600 ${className}`}>{children}</p>
);

const CardContent = ({ children, className = "" }) => (
  <div className={`p-6 pt-0 ${className}`}>{children}</div>
);

const CardFooter = ({ children, className = "" }) => (
  <div className={`p-6 pt-0 flex items-center ${className}`}>{children}</div>
);

const Badge = ({ children, variant = "default", className = "" }) => {
  const variantClasses = {
    default: "bg-black text-white",
    outline: "border border-black text-black",
    secondary: "bg-gray-100 text-gray-800",
  };

  return (
    <span
      className={`px-2.5 py-0.5 text-xs font-medium rounded-full ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
};

const Input = ({ placeholder, type = "text", className = "", ...props }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-black ${className}`}
      {...props}
    />
  );
};

const Textarea = ({ placeholder, className = "", ...props }) => {
  return (
    <textarea
      placeholder={placeholder}
      className={`border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-black ${className}`}
      {...props}
    />
  );
};

const Label = ({ children, htmlFor, className = "" }) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`block text-sm font-medium mb-1 ${className}`}
    >
      {children}
    </label>
  );
};

// Toast/Sonner Component
const Toast = ({ title, description, onClose }) => {
  return (
    <div className="fixed top-4 right-4 bg-black text-white p-4 rounded-lg shadow-lg z-50 flex items-start">
      <div className="flex-1">
        {title && <h4 className="font-medium">{title}</h4>}
        {description && <p className="text-sm opacity-90">{description}</p>}
      </div>
      <button onClick={onClose} className="ml-4">
        <X size={16} />
      </button>
    </div>
  );
};

// Main Application Component
const App = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [toast, setToast] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeSection, setActiveSection] = useState("home");

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === selectedCategory);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setToast({
      title: "Message Sent",
      description:
        "Thank you for contacting us. We'll get back to you shortly.",
    });
    setTimeout(() => setToast(null), 3000);
  };

  const renderSection = () => {
    switch (activeSection) {
      case "about":
        return <AboutSection />;
      case "services":
        return <ServiceSection />;
      case "team":
        return <TeamSection />;
      case "projects":
        return selectedProject ? (
          <ProjectDetailSection
            project={selectedProject}
            onBack={() => setSelectedProject(null)}
          />
        ) : (
          <ProjectSection
            projects={filteredProjects}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            onProjectClick={setSelectedProject}
          />
        );
      case "contact":
        return <ContactSection onSubmit={handleContactSubmit} />;
      default:
        return <HomeSection />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="font-bold text-2xl text-black">
              ZEN<span className="text-gray-600">TRIX</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6">
              {["home", "about", "services", "team", "projects", "contact"].map(
                (section) => (
                  <button
                    key={section}
                    onClick={() => setActiveSection(section)}
                    className={`cursor-pointer capitalize ${
                      activeSection === section
                        ? "text-black font-semibold"
                        : "text-gray-600 hover:text-black"
                    }`}
                  >
                    {section}
                  </button>
                )
              )}
            </nav>

            {/* Mobile Navigation Toggle */}
            <button
              className="md:hidden"
              onClick={() => setIsNavOpen(!isNavOpen)}
            >
              <Menu size={24} />
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isNavOpen && (
            <div className="md:hidden mt-4 py-4 border-t border-gray-200">
              <nav className="flex flex-col space-y-4">
                {[
                  "home",
                  "about",
                  "services",
                  "team",
                  "projects",
                  "contact",
                ].map((section) => (
                  <button
                    key={section}
                    onClick={() => {
                      setActiveSection(section);
                      setIsNavOpen(false);
                    }}
                    className={`capitalize cursor-pointer ${
                      activeSection === section
                        ? "text-black font-semibold"
                        : "text-gray-600"
                    }`}
                  >
                    {section}
                  </button>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">{renderSection()}</main>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-xl mb-4">
                ZEN<span className="text-gray-400">TRIX</span>
              </h3>
              <p className="text-gray-300">
                Innovative software solutions tailored for your business needs.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {[
                  "home",
                  "about",
                  "services",
                  "team",
                  "projects",
                  "contact",
                ].map((section) => (
                  <li key={section}>
                    <button
                      onClick={() => setActiveSection(section)}
                      className="text-gray-300 hover:text-white capitalize"
                    >
                      {section}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <Mail size={16} className="mr-2" />
                  <span>kanishkapasindu6@gmail.com</span>
                </li>
                <li className="flex items-center">
                  <Phone size={16} className="mr-2" />
                  <span>+94 715644565</span>
                </li>
                <li className="flex items-center">
                  <MapPin size={16} className="mr-2" />
                  <span>Colombo, Sri Lanka</span>
                </li>
              </ul>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-white hover:text-gray-300">
                  <Github size={20} />
                </a>
                <a href="#" className="text-white hover:text-gray-300">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} Zentrix. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Toast/Sonner */}
      {toast && (
        <Toast
          title={toast.title}
          description={toast.description}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
};

export default App;
