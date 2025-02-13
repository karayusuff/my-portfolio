import profileImg from '../assets/profile.jpeg';
import "../styles/Home.css";

function Home() {
  return (
    <section id="home">
      <div className="home-container">
        <div className="home-left">
          <img src={profileImg} alt="Yusuf Kara" className="profile-img" />
        </div>
        <div className="home-right">
          <h1>Yusuf Kara</h1>
          <h2>Full Stack <br /> Software Engineer</h2>
          <div className="social-links">
            {/* <span className="link-icon">🔗</span> */}
            <a href="https://github.com/karayusuff" target="_blank" rel="noopener noreferrer">Github</a>
            <a href="https://linkedin.com/in/karayusuff" target="_blank" rel="noopener noreferrer">Linkedin</a>
            <a href="https://drive.google.com/file/d/1A8fa8kYCVeSl9_ZyaM3LsfyTXSxItdnt/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;