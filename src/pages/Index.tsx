import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { ExternalLink, Github, Mail, MapPin, Calendar, GraduationCap, Briefcase, Code, Database, Brain, Zap } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('hero');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const projects = [
    {
      title: "UMT Student Portal",
      description: "Modern redesign of UMT's student portal using HTML, Tailwind CSS, and JavaScript. Includes dark/light mode, responsive sidebar, dynamic sections.",
      tech: ["HTML", "Tailwind CSS", "JavaScript"],
      github: "https://github.com/usmanfarhan/umt-portal",
      live: "https://umt-portal.netlify.app"
    },
    {
      title: "PandasAnalytica CLI",
      description: "A Python-based CLI tool for Exploratory Data Analysis (EDA) supporting CSV, Excel, and JSON formats.",
      tech: ["Python", "Pandas", "CLI"],
      github: "https://github.com/usmanfarhan/pandas-analytica",
      live: "https://pypi.org/project/pandas-analytica/"
    },
    {
      title: "Personal Finance Manager",
      description: "Semester project in C++ with OOP & File Handling for personal finance tracking and expense management.",
      tech: ["C++", "OOP", "File Handling"],
      github: "https://github.com/usmanfarhan/finance-manager",
      live: "https://github.com/usmanfarhan/finance-manager/releases"
    },
    {
      title: "Car Rental System",
      description: "Collaborative project in C++ demonstrating OOP, team leadership, and efficient booking system design.",
      tech: ["C++", "OOP", "System Design"],
      github: "https://github.com/usmanfarhan/car-rental-system",
      live: "https://github.com/usmanfarhan/car-rental-system/releases"
    }
  ];

  const skills = [
    { category: "Programming & Tools", items: [
      { name: "Python", level: 90 },
      { name: "C++", level: 85 },
      { name: "SQL", level: 80 },
      { name: "Git", level: 85 }
    ]},
    { category: "Data Science & Libraries", items: [
      { name: "Pandas", level: 85 },
      { name: "NumPy", level: 80 },
      { name: "Matplotlib", level: 75 },
      { name: "Scikit-learn", level: 70 }
    ]},
    { category: "Other Expertise", items: [
      { name: "Data Visualization", level: 80 },
      { name: "Machine Learning", level: 75 },
      { name: "Web Development", level: 70 },
      { name: "Business Intelligence", level: 65 }
    ]}
  ];

  const education = [
    {
      institution: "University of Management and Technology (UMT)",
      degree: "Bachelor of Science (BS) in Computer Science",
      period: "Oct 2024 – Sep 2028",
      grade: "CGPA: 3.70"
    },
    {
      institution: "The Hong Kong University of Science and Technology (HKUST)",
      degree: "Professional Certificate in Software Engineering (Coursera)",
      period: "Mar 2024 – Jul 2024",
      grade: ""
    },
    {
      institution: "Forman Christian College (A Chartered University)",
      degree: "High School Diploma, Pre-Engineering",
      period: "Sep 2022 – Apr 2024",
      grade: ""
    }
  ];

  const certifications = [
    {
      title: "Business Intelligence Foundation Professional Certification BIFPC™",
      provider: "CertiProf",
      type: "Professional Certification",
      date: "Date not specified",
      verifyLink: "https://usmanfarhan.netlify.app/certificates/bifpc-verify",
      credentialId: "BIFPC™"
    },
    {
      title: "Remote Work Professional Certification RWPC™",
      provider: "CertiProf",
      type: "Professional Certification",
      date: "Jul 13, 2024",
      verifyLink: "https://usmanfarhan.netlify.app/certificates/rwpc-verify",
      credentialId: "RWPC™"
    },
    {
      title: "Software Engineering Specialization",
      provider: "HKUST",
      type: "Specialization",
      date: "Jul 29, 2024",
      verifyLink: "https://coursera.org/verify/specialization/HKUST2024",
      credentialId: "3-Course Specialization"
    },
    {
      title: "Software Engineering: Modeling Software Systems using UML",
      provider: "HKUST",
      type: "Course Certificate",
      date: "Jul 29, 2024",
      verifyLink: "https://coursera.org/verify/uml-hkust",
      credentialId: "Kenneth W T Leung"
    },
    {
      title: "Software Engineering: Software Design and Project Management",
      provider: "HKUST",
      type: "Course Certificate",
      date: "Jul 29, 2024",
      verifyLink: "https://coursera.org/verify/design-hkust",
      credentialId: "Kenneth W T Leung"
    },
    {
      title: "Software Engineering: Implementation and Testing",
      provider: "HKUST",
      type: "Course Certificate",
      date: "Jul 29, 2024",
      verifyLink: "https://coursera.org/verify/testing-hkust",
      credentialId: "Kenneth W T Leung"
    },
    {
      title: "Career Essentials in Software Development",
      provider: "Microsoft & LinkedIn",
      type: "Learning Path",
      date: "Jul 15, 2024",
      verifyLink: "https://linkedin.com/learning/certificates/career-essentials",
      credentialId: "Learning Path"
    },
    {
      title: "Python Data Structures and Algorithms",
      provider: "LinkedIn Learning",
      type: "Course Certificate",
      date: "Jul 20, 2024",
      verifyLink: "https://linkedin.com/learning/certificates/python-dsa",
      credentialId: "Data Structures & Algorithms"
    },
    {
      title: "Programming Foundations: Fundamentals",
      provider: "LinkedIn Learning",
      type: "Course Certificate",
      date: "Jul 15, 2024",
      verifyLink: "https://linkedin.com/learning/certificates/prog-fundamentals",
      credentialId: "Programming Fundamentals"
    },
    {
      title: "Programming Foundations: Beyond the Fundamentals",
      provider: "LinkedIn Learning",
      type: "Course Certificate",
      date: "Jul 15, 2024",
      verifyLink: "https://linkedin.com/learning/certificates/prog-beyond",
      credentialId: "Advanced Programming"
    },
    {
      title: "Crash Course on Python",
      provider: "Google",
      type: "Course Certificate",
      date: "Jul 21, 2024",
      verifyLink: "https://coursera.org/verify/google-python",
      credentialId: "Google Authorized"
    },
    {
      title: "Python for Data Science, AI & Development",
      provider: "IBM",
      type: "Course Certificate",
      date: "Jul 22, 2024",
      verifyLink: "https://coursera.org/verify/ibm-python",
      credentialId: "IBM Authorized"
    },
    {
      title: "Introduction to DevOps",
      provider: "IBM",
      type: "Course Certificate",
      date: "Jul 24, 2024",
      verifyLink: "https://coursera.org/verify/ibm-devops",
      credentialId: "John J. Rofrano"
    },
    {
      title: "GenAI Basics - How LLMs Work",
      provider: "Duke University",
      type: "Project Certificate",
      date: "Jul 21, 2024",
      verifyLink: "https://coursera.org/verify/duke-genai",
      credentialId: "Derek Wales"
    },
    {
      title: "Finding Your Professional Voice: Confidence & Impact",
      provider: "University of London",
      type: "Course Certificate",
      date: "Jul 22, 2024",
      verifyLink: "https://coursera.org/verify/london-voice",
      credentialId: "Emmy Broomfield"
    }
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:usmanfarhan@example.com';
  };

  const handleGithubClick = () => {
    window.open('https://github.com/usmanfarhan', '_blank');
  };

  const handleProjectAction = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      {/* Animated background */}
      <div className="fixed inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-green-900/20"></div>
        <div 
          className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
          }}
        ></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              &lt;/DEV&gt;
            </div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  className="text-gray-300 hover:text-cyan-400 transition-all duration-300 relative group hover:scale-105"
                  onClick={() => scrollToSection(item.toLowerCase())}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className={`min-h-screen flex items-center justify-center relative pt-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center space-y-8 z-10">
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-black tracking-wider animate-float">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                USMAN
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent glow-text animate-text-glow">FARHAN</span>
            </h1>
            <div className="text-xl md:text-2xl text-gray-400 font-mono tracking-wide">
              &gt; Computer Scientist | Data Analytics | AI Enthusiast_
            </div>
          </div>
          
          <div className="flex justify-center space-x-6 mt-12">
            <Button
              className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-black font-bold px-8 py-3 rounded-none border-2 border-transparent hover:border-cyan-400 transition-all duration-300 glow-button cyber-button hover:scale-105"
              onClick={() => scrollToSection('projects')}
            >
              VIEW PROJECTS <Zap className="ml-2 w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-3 rounded-none transition-all duration-300 hover:scale-105"
              onClick={() => scrollToSection('contact')}
            >
              CONTACT <ExternalLink className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-cyan-400 rounded-full animate-ping"></div>
        <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-pink-400 rounded-full animate-bounce"></div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black mb-12 text-center">
            <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              &gt; ABOUT_ME
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="text-lg text-gray-300 leading-relaxed font-mono">
                <p className="mb-4">
                  I am a <span className="text-cyan-400 font-bold">Computer Scientist</span> with a strong foundation in 
                  <span className="text-purple-400 font-bold"> Python</span>, 
                  <span className="text-green-400 font-bold"> Data Analytics</span>, and 
                  <span className="text-pink-400 font-bold"> AI</span>.
                </p>
                <p>
                  Skilled in problem-solving, programming, and creating innovative solutions. 
                  My journey includes certifications, practical projects, and hands-on experience 
                  in modern tools for data-driven development.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {['Python', 'C++', 'Data Science', 'Machine Learning', 'Web Dev'].map((tag) => (
                  <Badge 
                    key={tag}
                    className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/50 text-cyan-400 px-4 py-2 font-mono"
                  >
                    #{tag}
                  </Badge>
                ))}
              </div>
            </div>

            <Card className="bg-gray-900/50 border-2 border-purple-500/30 backdrop-blur-sm glow-card animate-pulse-glow hover:scale-105 transition-all duration-300">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-cyan-400 mb-4">CURRENT STATUS</h3>
                <div className="space-y-3 font-mono text-sm">
                  <div className="flex items-center gap-3">
                    <GraduationCap className="w-4 h-4 text-green-400" />
                    <span>Studying at UMT - CGPA: 3.70</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-purple-400" />
                    <span>Based in Pakistan</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Briefcase className="w-4 h-4 text-cyan-400" />
                    <span>Open for opportunities</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black mb-12 text-center">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              &gt; PROJECTS_
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-gray-900/30 border-2 border-gray-700 hover:border-cyan-400/50 transition-all duration-500 group glow-card-hover backdrop-blur-sm animate-float hover:scale-105 cyber-card"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-6 space-y-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="ghost"
                        className="p-2 hover:bg-cyan-400/20 hover:text-cyan-400 hover:scale-110 transition-all"
                        onClick={() => handleProjectAction(project.github)}
                      >
                        <Github className="w-4 h-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="p-2 hover:bg-purple-400/20 hover:text-purple-400 hover:scale-110 transition-all"
                        onClick={() => handleProjectAction(project.live)}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge 
                        key={tech}
                        className="bg-gradient-to-r from-green-500/20 to-cyan-500/20 border border-green-400/50 text-green-400 text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black mb-12 text-center">
            <span className="bg-gradient-to-r from-green-400 to-yellow-400 bg-clip-text text-transparent">
              &gt; SKILLS_MATRIX
            </span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((category, categoryIndex) => (
              <Card
                key={categoryIndex}
                className="bg-gray-900/40 border-2 border-gray-700 hover:border-green-400/50 transition-all duration-500 backdrop-blur-sm cyber-card animate-glow hover:scale-105"
                style={{ animationDelay: `${categoryIndex * 0.3}s` }}
              >
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-green-400 mb-6 font-mono">
                    {category.category}
                  </h3>
                  <div className="space-y-4">
                    {category.items.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-white font-mono text-sm">{skill.name}</span>
                          <span className="text-cyan-400 font-mono text-xs">{skill.level}%</span>
                        </div>
                        <Progress 
                          value={skill.level} 
                          className="h-2 bg-gray-700"
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Experience */}
      <section className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black mb-12 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              &gt; TIMELINE_
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Education */}
            <div>
              <h3 className="text-2xl font-bold text-cyan-400 mb-6 font-mono">EDUCATION</h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <Card 
                    key={index}
                    className="bg-gray-900/30 border-l-4 border-cyan-400 border-t border-r border-b border-gray-700 backdrop-blur-sm"
                  >
                    <CardContent className="p-4">
                      <h4 className="font-bold text-white">{edu.institution}</h4>
                      <p className="text-cyan-400 text-sm">{edu.degree}</p>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-gray-400 text-xs font-mono">{edu.period}</span>
                        {edu.grade && <span className="text-green-400 text-xs font-mono">{edu.grade}</span>}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div>
              <h3 className="text-2xl font-bold text-purple-400 mb-6 font-mono">EXPERIENCE</h3>
              <Card className="bg-gray-900/30 border-l-4 border-purple-400 border-t border-r border-b border-gray-700 backdrop-blur-sm">
                <CardContent className="p-4">
                  <h4 className="font-bold text-white">Advanced Software Engineering Job Simulation</h4>
                  <p className="text-purple-400 text-sm">Forage (Remote)</p>
                  <p className="text-gray-400 text-xs font-mono mt-2">Aug 2025</p>
                  <div className="mt-3 space-y-2 text-sm text-gray-300">
                    <div className="flex items-center gap-2">
                      <span className="text-green-400">✓</span>
                      Built custom heap data structure in Java
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-400">✓</span>
                      Designed UML Class Diagram
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-400">✓</span>
                      Created Entity-Relationship Diagram (ERD)
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black mb-12 text-center">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              &gt; CERTIFICATIONS_
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card 
                key={index}
                className="bg-gray-900/30 border-2 border-gray-700 hover:border-yellow-400/50 transition-all duration-300 group glow-card-hover backdrop-blur-sm"
              >
                <CardContent className="p-4 space-y-3">
                  <div className="flex justify-between items-start">
                    <Badge 
                      className={`text-xs ${
                        cert.type === 'Specialization' 
                          ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/50 text-purple-400'
                          : cert.type === 'Professional Certification'
                          ? 'bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-400/50 text-yellow-400'
                          : 'bg-gradient-to-r from-green-500/20 to-cyan-500/20 border border-green-400/50 text-green-400'
                      }`}
                    >
                      {cert.type}
                    </Badge>
                    {cert.verifyLink && (
                      <Button 
                        size="sm" 
                        variant="ghost"
                        className="p-1 hover:bg-yellow-400/20 hover:text-yellow-400"
                        onClick={() => window.open(cert.verifyLink, '_blank')}
                      >
                        <ExternalLink className="w-3 h-3" />
                      </Button>
                    )}
                  </div>
                  
                  <h3 className="font-bold text-white text-sm leading-tight group-hover:text-yellow-400 transition-colors">
                    {cert.title}
                  </h3>
                  
                  <div className="space-y-1">
                    <p className="text-yellow-400 text-xs font-mono">{cert.provider}</p>
                    <p className="text-gray-400 text-xs font-mono">{cert.date}</p>
                    {cert.credentialId && (
                      <p className="text-cyan-400 text-xs font-mono">ID: {cert.credentialId}</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-400 font-mono text-sm">
              Total Certifications: <span className="text-yellow-400 font-bold">{certifications.length}</span> | 
              Professional Certs: <span className="text-purple-400 font-bold">{certifications.filter(c => c.type === 'Professional Certification').length}</span> | 
              Specializations: <span className="text-pink-400 font-bold">{certifications.filter(c => c.type === 'Specialization').length}</span> |
              Institutions: <span className="text-cyan-400 font-bold">7</span>
            </p>
            <p className="text-gray-500 font-mono text-xs mt-2">
              Latest Year: <span className="text-green-400 font-bold">2024</span> | 
              From: Google, IBM, HKUST, Duke University, University of London, CertiProf, LinkedIn Learning
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-12">
            <span className="bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent">
              &gt; CONNECT_
            </span>
          </h2>
          
          <div className="space-y-8">
            <p className="text-xl text-gray-300 font-mono">
              Ready to build something <span className="text-cyan-400 font-bold">AMAZING</span> together?
            </p>
            
            <div className="flex justify-center gap-6">
              <Button 
                className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white font-bold px-8 py-3 rounded-none border-2 border-transparent hover:border-pink-400 transition-all duration-300 glow-button"
              >
                <Mail className="mr-2 w-4 h-4" />
                EMAIL ME
              </Button>
              <Button 
                variant="outline" 
                className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black px-8 py-3 rounded-none transition-all duration-300"
              >
                <Github className="mr-2 w-4 h-4" />
                GITHUB
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-500 font-mono text-sm">
            © 2025 - Crafted with <span className="text-red-400">❤</span> and lots of <span className="text-cyan-400">caffeine</span>
          </p>
        </div>
      </footer>
    </div>
  );
}
