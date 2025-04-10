import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, ArrowLeft, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Project Title 1",
      description: "Short description of the project. Replace with your own content.",
      tags: ["React", "TailwindCSS", "JavaScript"],
      image: "/api/placeholder/800/600"
    },
    {
      id: 2,
      title: "Project Title 2",
      description: "Another amazing project description. Replace with your content.",
      tags: ["TypeScript", "Next.js", "CSS"],
      image: "/api/placeholder/800/600"
    },
    {
      id: 3,
      title: "Project Title 3",
      description: "A third impressive project. Add your own details here.",
      tags: ["UI/UX", "Figma", "Design"],
      image: "/api/placeholder/800/600"
    }
  ]);
  
  // Parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timer);
    };
  }, []);
  
  if (isLoading) {
    return <LoadingScreen />;
  }
  
  return (
    <div className="bg-black text-white min-h-screen font-sans relative overflow-hidden">
      {/* Mouse follower */}
      <div 
        className="fixed w-6 h-6 rounded-full bg-purple-500 opacity-70 pointer-events-none z-50 blur-sm"
        style={{
          transform: `translate(${mousePosition.x * 100 + 50}vw, ${mousePosition.y * 100 + 50}vh)`,
          transition: 'transform 0.1s ease-out'
        }}
      />
      
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-blue-900 opacity-40" />
      
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      <div 
        className="relative z-10 max-w-6xl mx-auto px-4 py-8"
        style={{
          transform: `translate(${mousePosition.x * -10}px, ${mousePosition.y * -10}px)`,
          transition: 'transform 0.2s ease-out'
        }}
      >
        <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
        
        <main className="mt-16">
          {activeSection === 'home' && <HomeSection />}
          {activeSection === 'about' && <AboutSection />}
          {activeSection === 'skills' && <SkillsSection />}
          {activeSection === 'projects' && <ProjectsSection projects={projects} />}
          {activeSection === 'contact' && <ContactSection />}
        </main>
        
        <footer className="mt-24 pb-8 text-center text-gray-400">
          <p>© 2025 DARLENE WENDY - Portfolio Website</p>
          <div className="flex justify-center mt-4 space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 5;
      });
    }, 100);
    
    return () => clearInterval(timer);
  }, []);
  
  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50">
      <h1 className="text-4xl font-bold mb-8 text-white">PORTFOLIO</h1>
      <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="mt-4 text-gray-400">{progress}%</p>
    </div>
  );
};

const Navigation = ({ activeSection, setActiveSection }) => {
  return (
    <nav className="py-4 flex justify-between items-center">
      <div className="text-2xl font-bold">
        <span className="text-purple-500">PORT</span>FOLIO
      </div>
      
      <ul className="hidden md:flex space-x-8">
        {['home', 'about', 'projects', 'contact'].map((section) => (
          <li key={section}>
            <button
              className={`capitalize ${activeSection === section ? 'text-purple-500' : 'text-gray-400'} hover:text-white transition-colors`}
              onClick={() => setActiveSection(section)}
            >
              {section}
            </button>
          </li>
        ))}
      </ul>
      
      <div className="block md:hidden">
        <button className="text-gray-400 hover:text-white">
          Menu
        </button>
      </div>
    </nav>
  );
};

const HomeSection = () => {
  const [text, setText] = useState('');
  const fullText = "YOUR_NAME";
  const [robotPosition, setRobotPosition] = useState(0);
  const [isRobotPulsing, setIsRobotPulsing] = useState(false);
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
      }
    }, 200);
    
    return () => clearInterval(timer);
  }, []);
  
  // Robot animation
  useEffect(() => {
    const robotAnimInterval = setInterval(() => {
      setRobotPosition(prev => (prev + 1) % 360);
    }, 50);
    
    // Pulse effect for the robot
    const pulseInterval = setInterval(() => {
      setIsRobotPulsing(prev => !prev);
    }, 2000);
    
    return () => {
      clearInterval(robotAnimInterval);
      clearInterval(pulseInterval);
    };
  }, []);
  
  // Calculate robot position on the circle
  const radius = 80;
  const centerX = 100;
  const centerY = 100;
  const x = centerX + radius * Math.cos(robotPosition * Math.PI / 180);
  const y = centerY + radius * Math.sin(robotPosition * Math.PI / 180);
  
  return (
    <section className="min-h-screen flex flex-col justify-center relative">
      {/* Animated Robot */}
      <div className="absolute right-0 md:right-24 top-0 md:top-24 w-64 h-64">
        <div className="relative w-full h-full">
          {/* Circle path */}
          <div className="absolute w-full h-full rounded-full border border-purple-500 opacity-20"></div>
          
          {/* Data circles */}
          {[0, 60, 120, 180, 240, 300].map((angle, i) => {
            const dataX = centerX + radius * Math.cos(angle * Math.PI / 180);
            const dataY = centerY + radius * Math.sin(angle * Math.PI / 180);
            return (
              <div key={i} 
                className="absolute w-3 h-3 bg-blue-500 rounded-full"
                style={{
                  left: `${dataX}px`,
                  top: `${dataY}px`,
                  opacity: (i % 2 === 0) ? 0.8 : 0.4,
                }}
              ></div>
            );
          })}
          
          {/* Moving robot */}
          <div
            className={`absolute transition-all duration-300 ${isRobotPulsing ? 'scale-110' : 'scale-100'}`}
            style={{
              left: `${x}px`,
              top: `${y}px`,
              transform: 'translate(-50%, -50%)',
            }}
          >
            <div className="relative">
              {/* Robot head */}
              <div className="w-12 h-10 bg-gradient-to-b from-purple-400 to-purple-600 rounded-t-lg relative flex items-center justify-center">
                {/* Eyes */}
                <div className="absolute flex space-x-2 mt-1">
                  <div className="w-2 h-2 bg-blue-300 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-blue-300 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                </div>
              </div>
              
              {/* Robot body */}
              <div className="w-14 h-8 bg-gradient-to-b from-purple-600 to-purple-800 rounded-b-lg relative overflow-hidden">
                {/* Control panel */}
                <div className="flex justify-center space-x-1 mt-1 items-center">
                  <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                  <div className="w-1 h-1 bg-red-400 rounded-full"></div>
                  <div className="w-1 h-1 bg-yellow-400 rounded-full"></div>
                </div>
                
                {/* Digital panel with moving text */}
                <div className="w-10 h-2 mx-auto mt-1 bg-black rounded-sm overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-r from-blue-400 to-blue-600 opacity-70 animate-pulse"></div>
                </div>
                
                {/* Arms */}
                <div className="absolute -left-2 top-2 w-1 h-4 bg-purple-700 rounded-full"></div>
                <div className="absolute -right-2 top-2 w-1 h-4 bg-purple-700 rounded-full"></div>
              </div>
              
              {/* AI glow effect */}
              <div className="absolute -inset-1 bg-purple-500 rounded-lg opacity-20 blur-sm"></div>
              <div className="absolute -inset-3 bg-blue-500 rounded-full opacity-10 blur-md animate-pulse"></div>
            </div>
          </div>
          
          {/* Center of circle / AI core */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center animate-pulse">
              <div className="w-6 h-6 bg-gradient-to-br from-indigo-300 to-indigo-500 rounded-full animate-ping opacity-75"></div>
            </div>
          </div>
          
          {/* Data streams */}
          {[15, 45, 75, 105, 135, 165, 195, 225, 255, 285, 315, 345].map((angle, i) => {
            const streamLength = 20 + Math.random() * 30;
            const streamX = centerX + (radius - streamLength/2) * Math.cos(angle * Math.PI / 180);
            const streamY = centerY + (radius - streamLength/2) * Math.sin(angle * Math.PI / 180);
            return (
              <div key={i}
                className="absolute h-0.5 bg-gradient-to-r from-blue-500 to-transparent opacity-30"
                style={{
                  left: `${streamX}px`,
                  top: `${streamY}px`,
                  width: `${streamLength}px`,
                  transform: `rotate(${angle + 90}deg)`,
                  transformOrigin: '0 0',
                  animationDuration: `${3 + i % 3}s`,
                  animationDelay: `${i * 0.2}s`
                }}
              ></div>
            );
          })}
        </div>
        
        {/* AI & ML text */}
        <div className="absolute -bottom-2 right-0 text-xs text-blue-400 font-mono opacity-70">
          <div>AI & MACHINE LEARNING</div>
          <div className="text-right text-purple-400">{'<learning...>'}</div>
        </div>
      </div>
      
      <div className="max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="text-purple-500">{text}</span>
          <span className="inline-block w-1 h-10 bg-purple-500 animate-blink ml-1"></span>
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-300 mb-8">
          YOUR_PROFESSION <span className="text-purple-500">•</span> YOUR_SPECIALTY
        </h2>
        <p className="text-xl text-gray-400 mb-12 max-w-2xl">
          A brief introduction about yourself and what you do. This is your elevator pitch. Keep it short, engaging, and memorable.
        </p>
        <div className="flex space-x-4">
          <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-full flex items-center transition-colors">
            View Projects <ArrowRight className="ml-2" size={18} />
          </button>
          <button className="px-6 py-3 border border-gray-700 hover:border-purple-500 rounded-full flex items-center transition-colors">
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
};

const AboutSection = () => {
  const skills = [
    { name: "React", level: 90, color: "bg-blue-500" },
    { name: "JavaScript", level: 85, color: "bg-yellow-500" },
    { name: "Node.js", level: 80, color: "bg-green-500" },
    { name: "HTML/CSS", level: 95, color: "bg-orange-500" },
    { name: "TypeScript", level: 75, color: "bg-blue-400" },
    { name: "UI/UX Design", level: 70, color: "bg-pink-500" },
    { name: "Git", level: 85, color: "bg-red-500" },
    { name: "MongoDB", level: 65, color: "bg-green-600" },
    { name: "GraphQL", level: 60, color: "bg-purple-600" },
    { name: "AWS", level: 70, color: "bg-yellow-600" }
  ];

  // For the floating skills animation
  const [skillPositions, setSkillPositions] = useState(skills.map((_, i) => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    vx: (Math.random() - 0.5) * 0.5,
    vy: (Math.random() - 0.5) * 0.5,
    rotate: Math.random() * 20 - 10
  })));

  useEffect(() => {
    const interval = setInterval(() => {
      setSkillPositions(prev => prev.map(pos => {
        let { x, y, vx, vy, rotate } = pos;
        
        // Update position
        x += vx;
        y += vy;
        
        // Bounce off edges
        if (x <= 0 || x >= 100) vx = -vx;
        if (y <= 0 || y >= 100) vy = -vy;
        
        // Add slight randomness to movement
        vx += (Math.random() - 0.5) * 0.1;
        vy += (Math.random() - 0.5) * 0.1;
        
        // Keep velocity in check
        vx = Math.max(-0.8, Math.min(0.8, vx));
        vy = Math.max(-0.8, Math.min(0.8, vy));
        
        // Gradually change rotation
        rotate += (Math.random() - 0.5) * 2;
        
        return { x, y, vx, vy, rotate };
      }));
    }, 50);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className="min-h-screen py-16">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-6">About <span className="text-purple-500">Me</span></h2>
          <p className="text-gray-300 mb-4">
            This is where you talk about yourself. Share your journey, background, and what drives you. Keep it authentic and engaging.
          </p>
          <p className="text-gray-300 mb-4">
            Mention your education, experience, and any significant achievements that demonstrate your expertise in your field.
          </p>
          <p className="text-gray-300 mb-8">
            What makes you unique? What philosophy guides your work? This is your chance to connect with visitors on a personal level.
          </p>
        </div>
        
        <div className="relative">
          <div className="relative overflow-hidden rounded-lg border-2 border-purple-500 w-full aspect-square">
            <img 
              src="/api/placeholder/600/600" 
              alt="Your Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-600 rounded-full opacity-30 blur-xl" />
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-600 rounded-full opacity-30 blur-xl" />
        </div>
      </div>
      
      {/* Interactive Skills Section */}
      <div className="mt-24 mb-24">
        <h3 className="text-2xl font-bold mb-12 text-center">My <span className="text-purple-500">Skills</span></h3>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Skills Progress Bars */}
          <div className="space-y-6">
            {skills.slice(0, 5).map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-gray-400">{skill.level}%</span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${skill.color} rounded-full`} 
                    style={{ 
                      width: `${skill.level}%`,
                      transition: 'width 1.5s ease-in-out'
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
          
          <div className="space-y-6">
            {skills.slice(5, 10).map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-gray-400">{skill.level}%</span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${skill.color} rounded-full`} 
                    style={{ 
                      width: `${skill.level}%`,
                      transition: 'width 1.5s ease-in-out'
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Floating Skills Animation */}
        <div className="relative h-64 mt-16 bg-gray-900 rounded-lg overflow-hidden border border-gray-800">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`absolute px-3 py-2 rounded-full text-sm font-medium text-white flex items-center justify-center shadow-lg ${index % 2 === 0 ? 'bg-purple-600' : 'bg-blue-600'}`}
              style={{
                left: `${skillPositions[index].x}%`,
                top: `${skillPositions[index].y}%`,
                transform: `translate(-50%, -50%) rotate(${skillPositions[index].rotate}deg)`,
                transition: 'left 0.5s ease-out, top 0.5s ease-out, transform 1s ease-out',
                zIndex: Math.floor(skillPositions[index].y),
                opacity: 0.8 + (skillPositions[index].y / 500)
              }}
            >
              {skill.name}
            </div>
          ))}
        </div>
      </div>
      
      {/* Work Experience */}
      <div>
        <h3 className="text-2xl font-bold mb-8">Work <span className="text-purple-500">Experience</span></h3>
        
        <div className="space-y-12">
          {[
            {
              period: "2023 - Present",
              company: "Tech Innovations Inc.",
              position: "Senior Developer",
              description: "Leading the frontend team in developing cutting-edge web applications using React and Next.js. Implemented CI/CD pipelines that improved deployment efficiency by 40%. Mentored junior developers and conducted code reviews."
            },
            {
              period: "2020 - 2023",
              company: "Digital Solutions Ltd.",
              position: "Web Developer",
              description: "Developed responsive web applications for clients across various industries. Created reusable component libraries that reduced development time by 30%. Collaborated with UX designers to implement pixel-perfect interfaces."
            },
            {
              period: "2018 - 2020",
              company: "Creative Agency",
              position: "Frontend Developer",
              description: "Built interactive websites for high-profile clients using JavaScript and CSS. Optimized website performance, achieving a 25% improvement in loading times. Worked in an agile team to deliver projects on tight deadlines."
            }
          ].map((item, index) => (
            <div key={index} className="border-l-2 border-purple-500 pl-6 pb-8 relative">
              <div className="absolute top-0 left-0 w-4 h-4 bg-purple-500 rounded-full -translate-x-1/2" />
              <div className="grid md:grid-cols-4 gap-4">
                <div>
                  <div className="text-purple-500 font-bold">{item.period}</div>
                  <div className="text-gray-400">{item.company}</div>
                </div>
                <div className="md:col-span-3">
                  <h4 className="text-xl font-bold mb-2">{item.position}</h4>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Education Section */}
      <div className="mt-24">
        <h3 className="text-2xl font-bold mb-8">Education & <span className="text-purple-500">Certifications</span></h3>
        
        <div className="space-y-12">
          {[
            {
              period: "2014 - 2018",
              institution: "University of Technology",
              degree: "Bachelor of Science in Computer Science",
              description: "Graduated with honors. Specialized in web development and UI/UX design. Completed a capstone project on building accessible web applications."
            },
            {
              period: "2022",
              institution: "Tech Academy",
              degree: "Advanced React Certification",
              description: "Completed an intensive course on advanced React patterns, state management, and performance optimization techniques."
            }
          ].map((item, index) => (
            <div key={index} className="border-l-2 border-blue-500 pl-6 pb-8 relative">
              <div className="absolute top-0 left-0 w-4 h-4 bg-blue-500 rounded-full -translate-x-1/2" />
              <div className="grid md:grid-cols-4 gap-4">
                <div>
                  <div className="text-blue-500 font-bold">{item.period}</div>
                  <div className="text-gray-400">{item.institution}</div>
                </div>
                <div className="md:col-span-3">
                  <h4 className="text-xl font-bold mb-2">{item.degree}</h4>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectsSection = ({ projects }) => {
  const [activeProject, setActiveProject] = useState(null);
  
  return (
    <section className="min-h-screen py-16">
      <h2 className="text-4xl font-bold mb-12">My <span className="text-purple-500">Projects</span></h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div 
            key={project.id}
            className="group relative bg-gray-900 rounded-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:-translate-y-2"
            onMouseEnter={() => setActiveProject(project.id)}
            onMouseLeave={() => setActiveProject(null)}
          >
            <div className="relative h-64 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, index) => (
                  <span key={index} className="text-xs px-2 py-1 bg-gray-800 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex justify-between items-center">
                <button className="text-purple-500 flex items-center hover:text-purple-400 transition-colors">
                  View Details <ExternalLink size={16} className="ml-1" />
                </button>
                <div className={`w-2 h-2 rounded-full ${activeProject === project.id ? 'bg-purple-500' : 'bg-gray-600'}`} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const ContactSection = () => {
  return (
    <section className="min-h-screen py-16">
      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-4xl font-bold mb-6">Get In <span className="text-purple-500">Touch</span></h2>
          <p className="text-gray-300 mb-8">
            Have a project in mind or want to collaborate? Feel free to reach out. I'm always interested in hearing about new opportunities and ideas.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center">
              <Mail className="text-purple-500 mr-4" size={24} />
              <div>
                <div className="text-gray-400">Email</div>
                <div className="text-lg">your.email@example.com</div>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center mr-4">
                <span className="text-white text-xs font-bold">L</span>
              </div>
              <div>
                <div className="text-gray-400">LinkedIn</div>
                <div className="text-lg">linkedin.com/in/yourprofile</div>
              </div>
            </div>
            
            <div className="flex items-center">
              <Github className="text-purple-500 mr-4" size={24} />
              <div>
                <div className="text-gray-400">GitHub</div>
                <div className="text-lg">github.com/yourusername</div>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <div className="bg-gray-900 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6">Send Me a <span className="text-purple-500">Message</span></h3>
            
            <form className="space-y-6">
              <div>
                <label className="block text-gray-400 mb-2">Your Name</label>
                <input 
                  type="text" 
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500 text-white"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label className="block text-gray-400 mb-2">Your Email</label>
                <input 
                  type="email" 
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500 text-white"
                  placeholder="john.doe@example.com"
                />
              </div>
              
              <div>
                <label className="block text-gray-400 mb-2">Message</label>
                <textarea 
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500 text-white h-32"
                  placeholder="Hello, I'd like to discuss a project..."
                />
              </div>
              
              <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;