import { useState } from "react";
import { X, Menu, Mail, Phone, MapPin, Github, Linkedin, ArrowRight, ChevronRight } from "lucide-react";
import AboutSection from "./HomeComponents/AboutSection";
import ServiceSection from "./HomeComponents/ServiceSection";
import TeamSection from "./HomeComponents/TeamSection";
import ContactSection from "./HomeComponents/ContactSection";
import ProjectSection from "./HomeComponents/ProjectSection";
import HomeSection from "./HomeComponents/HomeSection";
import ProjectDetailSection from "./HomeComponents/ProjectDetailsSection";
import EnglishAcademy from './assets/English_Academy.png'
import Eventz from './assets/Eventz.png'
import AiTrip from './assets/Aitrip.png'

// Mock project data
const projectsData = [
  {
    id: 1,
    title: "Event Planning Website(EVENTZ)",
    description: "A full-stack event planning web solution with user authentication and payment processing",
    image: Eventz,
    category: "Software Development",
    technologies: [, "Next.Js", "React", "Node.js", "MongoDB", "Stripe", "Express.Js", "Prisma"],
    keyFeatures: [
      "Secure user authentication and authorization system",
      "Real-time chatting integrated with Intercom and email notifications using Nodemailer",
      "Payment gateway integration with Stripe (Sri Lankan region)",
      "Responsive design optimized for mobile booking experiences",
      "Advanced event filtering and search capabilities"
    ],
    projectDetails: {
      clientName: "HD Computing and Software Engineering Final Project",
      duration: "1 month",
      teamSize: 2,
      challenge: "The client needed a modern platform to streamline event planning, allowing users to easily book venues, manage guest lists, and handle payments all in one place.",
      solution: "We built a full-stack event planning system with seamless user experiences using React and Next.js. The backend, developed in Node.js with Express and MongoDB, supports event creation, real-time communication, and secure payment processing.",
      outcome: "The platform enabled users to plan and confirm events 40% faster than traditional methods. It also improved user satisfaction by 30% through intuitive design and automated notifications. Over 500 events were successfully managed in the first three months."
    }
  },
  {
    id: 2,
    title: "AI Trip Planing Website(Yamu Travels)",
    description: "An intelligent trip planning platform that leverages AI to generate personalized travel itineraries based on user preferences and real-time data.",
    image: AiTrip,
    category: "Software Development",
    technologies: ["Next.Js", "React", "Node.js", "MongoDB", "Stripe", "Express.Js", "Prisma", "Gemini Api"],
    keyFeatures: [
      "AI-powered itinerary generation using Gemini API based on user interests, location, and travel dates",
      "Interactive map view with suggested routes, places, and travel times",
      "Real-time weather, traffic, and attraction availability integration",
      "Secure booking system for accommodations, transport, and activities with Stripe",
      "User dashboard with saved trips, collaborative planning, and sharing options"
    ],
    projectDetails: {
      clientName: "HD Computing and Software Engineering Final Project",
      duration: "1 months",
      teamSize: 2,
      challenge: "Travelers needed a smart solution to plan trips without spending hours researching destinations, routes, and activities while ensuring it fits their interests and budget.",
      solution: "We developed an AI-driven travel planning platform using Gemini API to provide personalized and dynamic trip recommendations. The backend integrates data from various sources including weather APIs, local attractions, and booking systems, ensuring a seamless experience.",
      outcome: "Users reported saving an average of 12+ hours on planning, with a 60% increase in satisfaction for personalized itineraries. Within the first 3 months, over 2,000 trips were successfully planned and booked using the platform."
    }
  },
  {
    id: 3,
    title: "Learning Management System(English Academy)",
    description: "Interactive educational platform for online courses and training",
    image: EnglishAcademy,
    category: "Software Development",
    technologies: ["React", "Next.js", "PostgreSQL", "AWS"],
    keyFeatures: [
      "Interactive lesson plans with multimedia content support",
      "Automated assignment grading and progress tracking",
      "Live virtual classroom with screensharing and recording",
      "Customizable learning paths for personalized education",
      "Comprehensive analytics dashboard for educators"
    ],
    projectDetails: {
      clientName: "HD Computing and Software Engineering Final Project",
      duration: "2 months",
      teamSize: 5,
      challenge: "A growing educational technology company needed a scalable platform to deliver their specialized curriculum to students globally while providing teachers with robust management tools.",
      solution: "We developed a Next.js application hosted on AWS that prioritizes performance and accessibility. The system includes advanced content management for educators and an engaging interface for students with real-time interaction capabilities.",
      outcome: "The platform now serves over 50,000 students across 12 countries. Course completion rates increased by 28%, and instructor productivity improved by 35% compared to their previous system."
    }
  },
  {
    id: 4,
    title: "Corporate Branding Website",
    description: "Professional website redesign with custom animations and content management",
    image: "/api/placeholder/600/400",
    category: "Custom Portfolio",
    technologies: ["React", "Framer Motion", "Tailwind CSS", "Headless CMS"],
    keyFeatures: [
      "Dynamic content management system for marketing team updates",
      "Seamless page transitions and micro-interactions",
      "Integrated blog platform with SEO optimization tools",
      "Multi-language support for global market presence",
      "Performance-optimized image and video delivery"
    ],
    projectDetails: {
      clientName: "Vertex Industries",
      duration: "3 months",
      teamSize: 3,
      challenge: "A multinational corporation needed to refresh their digital presence to reflect their updated brand identity while improving site performance and content management capabilities.",
      solution: "We created a modern React application with Framer Motion animations that showcases the brand's values through interactive storytelling. The headless CMS integration gives their team complete control over content without compromising site performance.",
      outcome: "The redesigned site achieved a 96% performance score on Google Lighthouse, increased average session duration by 74%, and reduced bounce rates by 23%. The marketing team now publishes content 5x faster than with their previous system."
    }
  },
  {
    id: 5,
    title: "Task Management Application",
    description: "Team collaboration tool with real-time updates and progress tracking",
    image: "/api/placeholder/600/400",
    category: "Software Development",
    technologies: ["React", "Redux", "Socket.io", "MongoDB", "Node.Js", "Express.Js"],
    keyFeatures: [
      "Real-time task updates and team collaboration",
      "Customizable workflow automation and triggers",
      "Time tracking with detailed productivity analytics",
      "File sharing and version control integration",
      "Kanban, list, and calendar views for different work styles"
    ],
    projectDetails: {
      clientName: "Agile Works",
      duration: "5 months",
      teamSize: 4,
      challenge: "A growing agency needed to streamline project management across distributed teams while maintaining visibility into project progress and resource allocation.",
      solution: "We developed a React/Redux application with Socket.io for real-time updates that adapts to different team workflows. The system features automated notifications and comprehensive reporting to help managers identify bottlenecks quickly.",
      outcome: "Teams reported a 27% increase in on-time project delivery and a 35% improvement in accurate time estimation. The application now supports over 200 active users across 12 departments with plans for public release as a SaaS product."
    }
  },
  {
    id: 6,
    title: "Mobile Banking App",
    description: "Secure financial application with transaction history and budgeting features",
    image: "/api/placeholder/600/400",
    category: "Custom Portfolio",
    technologies: ["React Native", "Node.js", "PostgreSQL", "Auth0"],
    keyFeatures: [
      "Biometric authentication and advanced security protocols",
      "Real-time transaction notifications and fraud alerts",
      "Automated categorization of expenses for budget tracking",
      "Bill payment scheduling and recurring transaction management",
      "Goal-based savings with visual progress indicators"
    ],
    projectDetails: {
      clientName: "Community First Credit Union",
      duration: "7 months",
      teamSize: 5,
      challenge: "A regional credit union needed to modernize their mobile banking experience to meet customer expectations while ensuring maximum security and compliance with financial regulations.",
      solution: "We built a React Native application that works seamlessly across iOS and Android devices with a focus on security and user experience. The app includes budgeting tools and financial wellness features to differentiate from competitors.",
      outcome: "Mobile banking engagement increased by 64% within three months of launch. Customer service calls decreased by 27% as users were able to self-serve through the app. The credit union has seen a 15% increase in new account openings attributed to the improved digital experience."
    }
  }
];



// Component imports from shadcn/ui
const Alert = ({ children, title, className = "" }) =>
{
  return (
    <div className={`bg-black text-white p-4 rounded-lg mb-4 ${className}`}>
      {title && <h4 className="font-bold mb-2">{title}</h4>}
      {children}
    </div>
  );
};

const Button = ({ children, variant = "default", className = "", onClick }) =>
{
  const variantClasses = {
    default: "bg-black text-white hover:bg-gray-800",
    outline: "border border-black text-black hover:bg-gray-100",
    ghost: "hover:bg-gray-100 text-black"
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

const Card = ({ children, className = "" }) =>
{
  return (
    <div className={`rounded-lg border border-gray-200 bg-white shadow-sm ${className}`}>
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

const Badge = ({ children, variant = "default", className = "" }) =>
{
  const variantClasses = {
    default: "bg-black text-white",
    outline: "border border-black text-black",
    secondary: "bg-gray-100 text-gray-800"
  };

  return (
    <span className={`px-2.5 py-0.5 text-xs font-medium rounded-full ${variantClasses[variant]} ${className}`}>
      {children}
    </span>
  );
};

const Input = ({ placeholder, type = "text", className = "", ...props }) =>
{
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-black ${className}`}
      {...props}
    />
  );
};

const Textarea = ({ placeholder, className = "", ...props }) =>
{
  return (
    <textarea
      placeholder={placeholder}
      className={`border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-black ${className}`}
      {...props}
    />
  );
};

const Label = ({ children, htmlFor, className = "" }) =>
{
  return (
    <label htmlFor={htmlFor} className={`block text-sm font-medium mb-1 ${className}`}>
      {children}
    </label>
  );
};

// Toast/Sonner Component
const Toast = ({ title, description, onClose }) =>
{
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
const App = () =>
{
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [toast, setToast] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeSection, setActiveSection] = useState("home");

  const filteredProjects = selectedCategory === "All"
    ? projectsData
    : projectsData.filter(project => project.category === selectedCategory);

  const handleContactSubmit = (e) =>
  {
    e.preventDefault();
    setToast({
      title: "Message Sent",
      description: "Thank you for contacting us. We'll get back to you shortly."
    });
    setTimeout(() => setToast(null), 3000);
  };

  const renderSection = () =>
  {
    switch (activeSection)
    {
      case "about":
        return <AboutSection />;
      case "services":
        return <ServiceSection />;
      case "team":
        return <TeamSection />;
      case "projects":
        return (
          selectedProject ?
            <ProjectDetailSection
              project={selectedProject}
              onBack={() => setSelectedProject(null)}
            /> :
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
            <div className="font-bold text-2xl text-black">Dev<span className="text-gray-600">Studio</span></div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6">
              {["home", "about", "services", "team", "projects", "contact"].map(section => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`capitalize ${activeSection === section ? 'text-black font-semibold' : 'text-gray-600 hover:text-black'}`}
                >
                  {section}
                </button>
              ))}
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
                {["home", "about", "services", "team", "projects", "contact"].map(section => (
                  <button
                    key={section}
                    onClick={() =>
                    {
                      setActiveSection(section);
                      setIsNavOpen(false);
                    }}
                    className={`capitalize ${activeSection === section ? 'text-black font-semibold' : 'text-gray-600'}`}
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
      <main className="container mx-auto px-4 py-8">
        {renderSection()}
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-xl mb-4">Dev<span className="text-gray-400">Studio</span></h3>
              <p className="text-gray-300">Innovative software solutions tailored for your business needs.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {["home", "about", "services", "team", "projects", "contact"].map(section => (
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
                  <span>+94 XXXXXXXXX</span>
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
            <p>&copy; {new Date().getFullYear()} DevStudio. All rights reserved.</p>
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