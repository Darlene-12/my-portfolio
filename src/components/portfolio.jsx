import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, ChevronDown, Database, Brain, Code, BarChart3, Server, Cpu, MapPin, Clock, Zap, Users, Star } from 'lucide-react';
import portfolioBackground from '../assets/PORTFOLIO BACKGROUND.png';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
  };

  const projects = [
    {
      title: "Multitasking Web Scraping Bot",
      description: "Advanced web scraping solution using Selenium, BeautifulSoup, and Django for automated data extraction and processing with real-time monitoring capabilities.",
      image: "../src/assets/webscrapping bot.png",
      category: "Backend Development",
      tech: ["Python", "Django", "Selenium", "BeautifulSoup", "Redis"],
      github: "#",
      live: "#"
    },
    {
      title: "Occupational Health Analytics in Mining",
      description: "Comprehensive healthcare data analysis platform with predictive modeling, patient outcome insights, and interactive dashboards for medical professionals.",
      image: "../src/assets/Healthcareinmining.png",
      category: "Data Science",
      tech: ["Python", "Scikit-learn", "Pandas", "Tableau", "PostgreSQL"],
      github: "#",
      live: "#"
    },
    {
      title: "Energy Optimization ML System",
      description: "Machine learning system for optimizing energy consumption in mining operations using advanced neural networks and regression analysis with real-time monitoring.",
      image: "../src/assets/energy  optimization.png",
      category: "Machine Learning",
      tech: ["Python", "TensorFlow", "Scikit-learn", "NumPy", "Docker"],
      github: "#",
      live: "#"
    },
    {
      title: "Eco-Friendly Marketplace Platform",
      description: "Full-stack marketplace platform with secure payment processing, real-time chat, and advanced product recommendation algorithms for sustainable products.",
      image: "../src/assets/ecofriendly market.png",
      category: "Backend Development", 
      tech: ["Node.js", "React", "PostgreSQL", "Socket.io", "Stripe"],
      github: "#",
      live: "#"
    },
    {
      title: "Netflix Content Analytics Dashboard",
      description: "Interactive Power BI dashboard analyzing Netflix content trends, viewing patterns, user engagement metrics, and predictive content recommendations.",
      image: "../src/assets/netflix.jpeg",
      category: "Data Science",
      tech: ["Power BI", "DAX", "SQL", "Python", "Excel"],
      github: "#",
      live: "#"
    }
  ];

  return (
    <div className="w-screen min-h-screen bg-black text-white overflow-x-hidden" style={{ width: '100vw', minHeight: '100vh', margin: 0, padding: 0 }}>
            {/* Background Image */}
      <div className="fixed inset-0 w-screen h-full z-0 overflow-hidden"
           style={{ width: '100vw', height: '100%' }}>
        {/* Main background image */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${portfolioBackground})`, // Use the imported image
            opacity: 0.3 // Adjust opacity so text is readable
          }}
        ></div>
        
        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-black/70 via-black/50 to-black/70"></div>
        
        {/* Optional: Keep some animated elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Animated Background }
      <div className="fixed inset-0 w-full h-full z-0">
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-950/20 via-black to-purple-950/20"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div> */}

      {/* Navigation */}
      <nav className={`fixed top-0 w-full h-auto z-50 transition-all duration-500 ${isScrolled ? 'bg-black/90 backdrop-blur-xl border-b border-gray-800/50' : 'bg-transparent'}`}>
        <div className="w-full max-w-none px-6 py-6">
          <div className="flex items-center justify-center w-full">
            <div className="flex items-center space-x-12">
              {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-all duration-300 hover:text-blue-400 hover:scale-105 ${
                    activeSection === item.toLowerCase() ? 'text-blue-400 font-semibold' : 'text-gray-300'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative z-10">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Text Content */}
          <div className="text-left space-y-8">
            <div className="inline-block">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-medium shadow-lg shadow-blue-500/25 animate-bounce">
                🚀 ALX Data Science Track is live!
              </div>
            </div>
            
            <div className="space-y-6">
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                I help organizations turn 
                <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
                  data into intelligent
                </span>
                <span className="block bg-gradient-to-r from-pink-500 via-purple-500 to-blue-400 bg-clip-text text-transparent">
                  solutions
                </span>
              </h1>
              
              <div className="text-2xl lg:text-3xl space-y-2">
                <p className="text-gray-400">Hello, I'm <span className="text-white font-semibold">Darlene Wendy</span></p>
                <p>
                  <span className="bg-gradient-to-r from-blue-100 to-purple-200 bg-clip-text text-transparent font-bold">
                    Backend Developer & Data Scientist
                  </span>
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 pt-4">
              {[
                { icon: Mail, href: "mailto:darlenewendie@gmail.com", color: "hover:bg-blue-600" },
                { icon: Github, href: "https://github.com/Darlene-12", color: "hover:bg-gray-700" },
                { icon: Linkedin, href: "https://linkedin.com/in/darlene-wendy-638065254", color: "hover:bg-blue-700" }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  className={`p-4 bg-gray-800/50 backdrop-blur-sm rounded-xl ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>
          </div>

          {/* Right Side - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Main Profile Image */}
              <div className="w-96 h-96 rounded-full overflow-hidden border-4 border-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 p-1 shadow-2xl shadow-blue-500/25">
                <div className="w-full h-full rounded-full overflow-hidden bg-black">
                  <img 
                    src="../src/assets/portfolio image.jpg" 
                    alt="Darlene Wendy" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              
              {/* Floating connection dots */}
              <div className="absolute -top-6 -left-6 w-16 h-16 rounded-full overflow-hidden border-3 border-white shadow-lg hover:scale-110 transition-transform duration-300">
                <img src="../src/assets/Snapchat-2116534412.jpg" alt="Connection" className="w-full h-full object-cover" />
              </div>
              <div className="absolute top-20 -right-10 w-12 h-12 rounded-full overflow-hidden border-3 border-white shadow-lg hover:scale-110 transition-transform duration-300 delay-100">
                <img src="../src/assets/Photo.jpg" alt="Connection" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-8 left-16 w-20 h-20 rounded-full overflow-hidden border-3 border-white shadow-lg hover:scale-110 transition-transform duration-300 delay-200">
                <img src="../src/assets/Profile.jpg" alt="Connection" className="w-full h-full object-cover" />
              </div>
              <div className="absolute bottom-24 -right-6 w-14 h-14 rounded-full overflow-hidden border-3 border-white shadow-lg hover:scale-110 transition-transform duration-300 delay-300">
                <img src="../src/assets/PORTFOLIO BACKGROUND.png" alt="Connection" className="w-full h-full object-cover" />
              </div>
              
              {/* Collaboration Badge */}
              <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                <Users size={16} className="inline mr-2" />
                Collaboration
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration Section */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {[
              {
                icon: Users,
                title: "Collaboration",
                description: "I prioritize client collaboration, fostering open communication",
                subtext: "I'm very flexible with time zone communications",
                color: "from-blue-500 to-blue-600"
              },
              {
                icon: MapPin,
                title: "Remote",
                description: `Kenya - ${new Date().toLocaleTimeString('en-US', {timeZone: 'Africa/Nairobi', hour12: false, hour: '2-digit', minute: '2-digit'})}`,
                subtext: "Available for global collaborations",
                color: "from-purple-500 to-purple-600"
              },
              {
                icon: Brain,
                title: "Tech Enthusiast",
                description: "Passionate about cutting-edge development technologies",
                subtext: "Always learning and adapting",
                color: "from-pink-500 to-pink-600"
              }
            ].map((item, index) => (
              <div key={index} className="text-center group hover:scale-105 transition-all duration-300">
                <div className={`w-20 h-20 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl`}>
                  <item.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-300 text-lg mb-2">{item.description}</p>
                <p className="text-sm text-gray-500">{item.subtext}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Handles complex data pipelines, ETL processes, and real-time analytics to enhance decision-making capabilities across enterprise systems.",
              "Provides comprehensive insights into system performance, user behavior, and key business metrics through advanced analytics and visualization.",
              "Unified backend architecture ensuring consistent API design, database optimization, and scalable infrastructure across all applications.",
              "Guides development teams to integrate with data systems efficiently, offering ML implementations and best practices for optimal performance.",
              "Step-by-step documentation and interactive tutorials to help teams maximize platform benefits and extract actionable data insights.",
              "Implements robust security measures, authentication systems, and enterprise-grade infrastructure for mission-critical applications."
            ].map((text, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <p className="text-gray-300 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Status */}
      <section className="py-24 bg-gradient-to-r from-blue-900/20 to-purple-900/20 relative z-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            The Inside Scoop
          </h2>
          <p className="text-2xl text-gray-300 mb-8">Currently building ML-powered Infrastructure Analytics Platform</p>
          <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-medium shadow-lg">
            <Zap className="mr-3" size={24} />
            Live Development in Progress
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-lg font-medium text-gray-400 mb-4 tracking-wider uppercase">Featured Case Studies</h2>
            <h3 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-250 bg-clip-text text-transparent">
              Curated Work
            </h3>
          </div>
          
          <div className="space-y-32">
            {projects.map((project, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
                
                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''} space-y-6`}>
                  <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                    {project.category}
                  </div>
                  <h3 className="text-3xl font-bold text-white">{project.title}</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-4 py-2 bg-gray-800/60 backdrop-blur-sm rounded-full text-sm border border-gray-700/50">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-6 pt-4">
                    <a href={project.github} className="flex items-center text-blue-400 hover:text-blue-300 transition-colors font-medium">
                      <Github size={20} className="mr-2" />
                      View Code
                    </a>
                    <a href={project.live} className="flex items-center text-purple-400 hover:text-purple-300 transition-colors font-medium">
                      <ExternalLink size={20} className="mr-2" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-20">
            <a href="/projects" className="inline-flex items-center text-xl font-medium bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full hover:scale-105 transition-transform duration-300 shadow-lg">
              See More Projects
              <ExternalLink size={20} className="ml-3" />
            </a>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="about" className="py-24 bg-gradient-to-b from-black to-gray-900 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative flex justify-center">
              <div className="w-80 h-80 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl"></div>
                <img 
                  src="../src/assets/FUTURE.png" 
                  alt="Tech skills visualization" 
                  className="w-full h-full object-cover rounded-full border-4 border-gradient-to-r from-blue-400 to-purple-500 animate-spin-slow hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold mb-4">
                  I constantly try to improve
                </h2>
                <h3 className="text-3xl bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent font-bold">
                  My Tech Stack
                </h3>
              </div>
              
              <div className="space-y-8">
                {[
                  {
                    title: "Backend & Infrastructure",
                    skills: ['Python', 'Django', 'Node.js', 'PostgreSQL', 'MySQL', 'Docker'],
                    color: "blue"
                  },
                  {
                    title: "Machine Learning & AI",
                    skills: ['Scikit-learn', 'TensorFlow', 'Pandas', 'NumPy', 'Seaborn', 'Neural Networks'],
                    color: "purple"
                  },
                  {
                    title: "Data Analytics & Tools",
                    skills: ['Power BI', 'Tableau', 'Git', 'Excel', 'Selenium', 'BeautifulSoup'],
                    color: "pink"
                  }
                ].map((category, index) => (
                  <div key={index} className="space-y-4">
                    <h4 className="text-xl font-semibold text-white">{category.title}</h4>
                    <div className="flex flex-wrap gap-3">
                      {category.skills.map((skill) => (
                        <span 
                          key={skill} 
                          className={`px-4 py-2 bg-${category.color}-500/20 border border-${category.color}-500/30 rounded-full text-sm hover:bg-${category.color}-500/30 transition-colors duration-300`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-medium text-gray-400 mb-4 tracking-wider uppercase">Know About Me</h2>
                <h3 className="text-4xl font-bold mb-8">
                  Backend Developer, Data Scientist 
                  <span className="block text-3xl bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    and a little bit of everything
                  </span>
                </h3>
              </div>
              
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>
                  I'm <span className="text-white font-semibold">Darlene Wendy</span>, a proactive backend developer and data scientist passionate about creating 
                  intelligent systems that drive sustainability. From data pipelines to machine learning models, 
                  I thrive on solving complex problems with clean, efficient solutions.
                </p>
                <p>
                  My expertise spans Python, Django, and advanced analytics, with a special focus on energy systems 
                  and infrastructure optimization. As a Mining Engineering student at JKUAT, I bring a unique 
                  perspective to tech solutions.
                </p>
                <p>
                  When I'm not immersed in code, I'm exploring new technologies and staying curious about 
                  sustainable development. Life's about balance, and I love embracing every part of it.
                </p>
                <p className="text-white font-semibold text-xl">
                  I believe in waking up each day eager to make a difference! ✨
                </p>
              </div>
              
              <a href="/about" className="inline-flex items-center text-lg font-medium bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full hover:scale-105 transition-transform duration-300 shadow-lg">
                More About Me
                <ExternalLink size={18} className="ml-2" />
              </a>
            </div>
            
            <div className="flex justify-center">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative w-96 h-[500px] rounded-2xl overflow-hidden border border-gray-700/50 shadow-2xl">
                  <img 
                    src="../src/assets/my-logo.png" 
                    alt="Darlene Wendy" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Beautiful Grid Layout */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-lg font-medium text-gray-400 mb-4 tracking-wider uppercase">Testimonials</h2>
            <h3 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Word on the Street About Me
            </h3>
          </div>
          
          {/* Grid Layout for Testimonials */}
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* First Row - 2 testimonials */}
            {[
              {
                quote: "A backend developer who transforms complex data into actionable insights",
                text: "Darlene has an exceptional ability to architect robust systems and extract meaningful patterns from complex datasets. Her attention to detail and dedication to creating scalable solutions have greatly enhanced our analytics capabilities. Working with her has been transformative for our data infrastructure.",
                name: "Sarah Johnson",
                title: "Data Lead • TechVentures",
                image: "/api/placeholder/80/80",
                rating: 5
              },
              {
                quote: "Efficient, innovative, and a master of machine learning",
                text: "Working with Darlene has been fantastic. She brings deep technical expertise in ML and backend development, solving complex problems with elegant solutions. Her ability to bridge engineering and data science is remarkable, and she consistently delivers beyond expectations.",
                name: "Michael Chen",
                title: "CTO • DataFlow Systems",
                image: "/api/placeholder/80/80",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 shadow-xl">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <h4 className="font-bold text-xl mb-4 text-white">{testimonial.quote}</h4>
                <p className="text-gray-300 mb-6 leading-relaxed">{testimonial.text}</p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mr-4 border-2 border-blue-400/50"
                  />
                  <div>
                    <div className="font-semibold text-white text-lg">{testimonial.name}</div>
                    <div className="text-gray-400">{testimonial.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Second Row - 1 centered testimonial */}
          <div className="flex justify-center">
            <div className="max-w-2xl bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 shadow-xl">
              <div className="flex mb-4 justify-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <h4 className="font-bold text-xl mb-4 text-white text-center">A reliable developer with exceptional analytical skills and vision</h4>
              <p className="text-gray-300 mb-6 leading-relaxed text-center">
                Darlene delivered outstanding work on our infrastructure optimization project. Her meticulous approach to both code quality and data analysis significantly improved our system performance and decision-making processes. She has a rare combination of technical excellence and business acumen that makes her invaluable to any team.
              </p>
              <div className="flex items-center justify-center">
                <img 
                  src="/api/placeholder/80/80" 
                  alt="Emily Rodriguez"
                  className="w-16 h-16 rounded-full mr-4 border-2 border-purple-400/50"
                />
                <div className="text-center">
                  <div className="font-semibold text-white text-lg">Emily Rodriguez</div>
                  <div className="text-gray-400">Engineering Manager • GreenTech Solutions</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 relative z-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Ready to collaborate on sustainable tech solutions or discuss opportunities in 
            backend development, data science, or machine learning? Let's build something amazing together!
          </p>
          
          <div className="flex justify-center space-x-6 mb-12">
            {[
              { href: "mailto:darlenewendie@gmail.com", icon: Mail, text: "Email Me", color: "from-blue-600 to-blue-700" },
              { href: "https://linkedin.com/in/darlene-wendy-638065254", icon: Linkedin, text: "LinkedIn", color: "from-purple-600 to-purple-700" },
              { href: "https://github.com/Darlene-12", icon: Github, text: "GitHub", color: "from-gray-600 to-gray-700" }
            ].map((contact, index) => (
              <a 
                key={index}
                href={contact.href} 
                className={`flex items-center space-x-3 bg-gradient-to-r ${contact.color} hover:scale-105 px-8 py-4 rounded-full transition-all duration-300 shadow-lg font-medium`}
              >
                <contact.icon size={20} />
                <span>{contact.text}</span>
              </a>
            ))}
          </div>
          
          <div className="text-gray-400 space-y-2">
            <p className="text-lg">📍 Currently based in Nairobi, Kenya</p>
            <p>Available for freelance projects and full-time opportunities</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center text-gray-400 border-t border-gray-800/50 relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-lg">
            &copy; 2025 <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent font-semibold">Darlene Wendy Nasimiyu</span>. 
            Building the future with sustainable technology.
          </p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .bg-gradient-to-r.from-blue-400.to-purple-500 {
          background: linear-gradient(to right, #60a5fa, #a855f7);
        }
      `}</style>
    </div>
  );
};

export default Portfolio;