import { jsPDF } from "jspdf";
import avatar from "../assets/avatar.png";

const Hero = ({ onJobMatchClick }) => {
  const downloadResume = () => {
    const doc = new jsPDF();

    doc.setFont("helvetica", "bold");
    doc.setFontSize(24);
    doc.setTextColor(41, 41, 41);
    doc.text("Muhammad Zarrar Shabbir", 20, 20);

    doc.setFontSize(14);
    doc.setTextColor(14, 165, 233);
    doc.text("Full Stack Web Developer", 20, 28);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(80, 80, 80);
    doc.text("Sargodha, Punjab 40010  |  zarrar768@gmail.com  |  +92 325 092 0503", 20, 35);

    doc.setDrawColor(200, 200, 200);
    doc.line(20, 40, 190, 40);

    let yPos = 50;

    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.text("Professional Summary", 20, yPos);
    yPos += 7;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.setTextColor(60, 60, 60);
    const summary = "Detail-oriented Full Stack Web Developer with 3 years of experience in developing and maintaining web applications using .NET framework, C#, React JS and ASP.NET. Proficient in designing database schemas and creating efficient queries for SQL Server and Oracle. Collaborated with cross-functional teams to implement responsive designs and integrate RESTful APIs.";
    const splitSummary = doc.splitTextToSize(summary, 170);
    doc.text(splitSummary, 20, yPos);
    yPos += splitSummary.length * 5 + 8;

    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.text("Work Experience", 20, yPos);
    yPos += 8;

    const experiences = [
      {
        role: "Full Stack Web Developer",
        company: "Xinfo-Tech - Sargodha",
        date: "March 2024 - December 2025",
        details: [
          "Developed and maintained web applications using .NET framework, C#, and ASP.NET.",
          "Designed and implemented database schemas using SQL Server or Oracle databases.",
          "Collaborated with UI/UX designers to implement responsive designs.",
          "Integrated RESTful APIs for data retrieval and manipulation.",
        ],
      },
      {
        role: "Backend Developer",
        company: "Freelancing - Islamabad",
        date: "February 2022 - May 2024",
        details: [
          "Developed and maintained Java applications ensuring high performance and scalability.",
          "Optimized code for improved efficiency, reducing application response time by 70%.",
          "Debugged and resolved complex issues in production environments.",
          "Performed code reviews to identify areas for improvement.",
        ],
      },
      {
        role: "Algorithm Developer",
        company: "Freelancing - Islamabad",
        date: "February 2022 - May 2022",
        details: [
          "Created unit tests using JUnit framework to ensure quality.",
          "Implemented security measures such as encryption algorithms.",
          "Utilized agile methodologies to deliver projects within strict timelines.",
        ],
      },
    ];

    experiences.forEach((exp) => {
      doc.setFont("helvetica", "bold");
      doc.setFontSize(11);
      doc.setTextColor(0, 0, 0);
      doc.text(exp.role, 20, yPos);

      doc.setFont("helvetica", "italic");
      doc.setFontSize(10);
      doc.setTextColor(100, 100, 100);
      doc.text(exp.date, 190, yPos, { align: "right" });

      yPos += 5;

      doc.setFont("helvetica", "normal");
      doc.setFontSize(10);
      doc.setTextColor(50, 50, 50);
      doc.text(exp.company, 20, yPos);
      yPos += 6;

      doc.setFontSize(9);
      doc.setTextColor(80, 80, 80);
      exp.details.forEach((detail) => {
        doc.text("• " + detail, 25, yPos);
        yPos += 5;
      });
      yPos += 5;
    });

    if (yPos > 240) {
      doc.addPage();
      yPos = 20;
    }

    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.text("Skills", 20, yPos);
    yPos += 8;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.setTextColor(60, 60, 60);

    const skillsList = [
      "ASP.NET Core", "React Native", "C#", "TypeScript", "Node.js",
      "Java", "Python", "SQL Server", "MySQL", "HTML/CSS",
      "Git", "Jira", "UI Development",
    ];

    const columns = 4; 
    const colWidth = 45; 
    const rowHeight = 6; 

    skillsList.forEach((skill, index) => {
      const colIndex = index % columns;
      const rowIndex = Math.floor(index / columns);
      const x = 20 + colIndex * colWidth;
      const y = yPos + rowIndex * rowHeight;
      doc.text(`• ${skill}`, x, y);
    });

    yPos += Math.ceil(skillsList.length / columns) * rowHeight + 10;

    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.text("Education", 20, yPos);
    yPos += 8;

    const education = [
      { school: "National University Of Sciences and Technology", degree: "Computer Science (Bachelor's)", year: "2021 - 2025" },
      { school: "BUH Tech - Sargodha", degree: "Web Development (Bootcamp)", year: "2023 - 2024" },
      { school: "Punjab Group of Colleges", degree: "Intermediate School Education", year: "2019 - 2021" },
    ];

    education.forEach((edu) => {
      doc.setFont("helvetica", "bold");
      doc.setFontSize(10);
      doc.text(edu.school, 20, yPos);
      doc.setFont("helvetica", "italic");
      doc.text(edu.year, 190, yPos, { align: "right" });
      yPos += 5;
      doc.setFont("helvetica", "normal");
      doc.text(edu.degree, 20, yPos);
      yPos += 8;
    });

    doc.save("Muhammad_Zarrar_Shabbir_Resume.pdf");
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-32 pb-20">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          <div className="reveal w-full md:w-1/3 flex justify-center order-1 md:order-2">
            <div className="relative w-64 h-64 md:w-80 md:h-80 profile-img-container rounded-full p-1 bg-white dark:bg-dark-bg">
              <img src={avatar} alt="Muhammad Zarrar Shabbir" className="w-full h-full object-cover rounded-full border-4 border-white dark:border-slate-800 shadow-2xl" />
              <div className="absolute top-4 right-0 glass-panel px-4 py-2 rounded-full text-xs font-bold shadow-lg animate-bounce flex items-center gap-2 text-brand">
                <i className="ph-fill ph-code text-brand"></i> Full Stack
              </div>
              <div className="absolute bottom-8 left-0 glass-panel px-4 py-2 rounded-full text-xs font-bold shadow-lg animate-bounce flex items-center gap-2 text-green-500">
                <i className="ph-fill ph-check-circle text-green-500"></i> Open to Work
              </div>
            </div>
          </div>

          <div className="w-full md:w-2/3 text-center md:text-left order-2 md:order-1">
            <div className="reveal inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand/20 bg-brand/5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-xs font-bold text-brand tracking-wide uppercase">Sargodha, Pakistan</span>
            </div>

            <h1 className="reveal font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
              Hello, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-purple-600 dark:from-white dark:to-brand-light">
                Muhammad Zarrar.
              </span>
            </h1>

            <p className="reveal text-slate-600 dark:text-slate-400 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed font-light">
              A detail-oriented <b>Full Stack Web Developer</b> with 3+ years of experience crafting high-performance applications using .NET, C#, React, and Python. I build scalable solutions that merge complex
              backend logic with sleek frontend design.
            </p>

            <div className="reveal flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
              <a href="#projects" className="w-full sm:w-auto px-8 py-4 bg-brand text-white font-bold rounded-full hover:bg-brand-dark transition-all flex items-center justify-center gap-2 shadow-lg shadow-brand/25">
                View Projects
              </a>
              <button onClick={onJobMatchClick} className="w-full sm:w-auto px-8 py-4 bg-purple-600 text-white font-bold rounded-full hover:bg-purple-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-purple-500/25">
                <i className="ph-bold ph-briefcase"></i> Job Match
              </button>
              <button onClick={downloadResume} className="w-full sm:w-auto px-8 py-4 glass-card rounded-full hover:bg-slate-100 dark:hover:bg-white/10 transition-all flex items-center justify-center gap-2 text-slate-800 dark:text-white font-medium">
                <i className="ph ph-file-pdf text-xl"></i> Resume
              </button>
            </div>

            <div className="reveal mt-10 flex items-center justify-center md:justify-start gap-4 text-2xl text-slate-400">
              <a href="https://www.linkedin.com/in/muhammad-zarrar-s-2665b4284/" target="_blank" className="hover:text-brand transition-colors"><i className="ph-fill ph-linkedin-logo"></i></a>
              <a href="https://github.com/Zarrar48" target="_blank" className="hover:text-brand transition-colors"><i className="ph-fill ph-github-logo"></i></a>
              <a href="https://discord.com/users/1159004435951927308" target="_blank" className="hover:text-brand transition-colors"><i className="ph ph-discord-logo"></i></a>
              <a href="mailto:zarrar768@gmail.com" className="hover:text-brand transition-colors"><i className="ph-fill ph-envelope-simple"></i></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;