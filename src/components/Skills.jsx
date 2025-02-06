import { IoLogoJavascript, IoLogoPython } from "react-icons/io5";
import { FaReact, FaNodeJs, FaAws, FaGitAlt, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiRedux, SiFlask, SiExpress, SiPostgresql, SiSequelize, SiSqlite, SiSqlalchemy } from "react-icons/si";
import "../styles/Skills.css";

const skills = [
  { name: "JavaScript", icon: <IoLogoJavascript size={50} color="#F7DF1E" /> },
  { name: "Python", icon: <IoLogoPython size={50} color="#3776AB" /> },

  { name: "", icon: <div style={{ width: 50, height: 50 }}></div> },

  { name: "HTML", icon: <FaHtml5 size={50} color="#E34F26" /> },
  { name: "CSS", icon: <FaCss3Alt size={50} color="#1572B6" /> },
  { name: "React", icon: <FaReact size={50} color="#61DAFB" /> },
  { name: "Redux", icon: <SiRedux size={50} color="#764ABC" /> },

  { name: "", icon: <div style={{ width: 50, height: 50 }}></div> },

  { name: "Flask", icon: <SiFlask size={50} color="#000000" /> },
  { name: "Node.js", icon: <FaNodeJs size={50} color="#68A063" /> },
  { name: "Express", icon: <SiExpress size={50} color="#808080" /> },

  { name: "", icon: <div style={{ width: 50, height: 50 }}></div> },

  { name: "PostgreSQL", icon: <SiPostgresql size={50} color="#336791" /> },
  { name: "SQLite", icon: <SiSqlite size={50} color="#003B57" /> },
  { name: "SQLAlchemy", icon: <SiSqlalchemy size={50} color="#D71F00" /> },
  { name: "Sequelize", icon: <SiSequelize size={50} color="#52B0E7" /> },

  { name: "", icon: <div style={{ width: 50, height: 50 }}></div> },

  { name: "AWS S3", icon: <FaAws size={50} color="#FF9900" /> },
  { name: "Git", icon: <FaGitAlt size={50} color="#F05032" /> },

  { name: "", icon: <div style={{ width: 50, height: 50 }}></div> }
];

function Skills() {
  return (
    <section id="skills">
      {/* <h2 className="section-title">Technologies</h2> */}
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            {skill.icon}
            <p className="skill-name">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;