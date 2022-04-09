import Navbar from "../components/Navbar.jsx";
import ProjectCarousel from "../components/ProjectCarousel.jsx";
import Copyright from "../components/Copyright.jsx";

export default function Coding() {
  return (
    <>
      <Navbar />
      <div id="Coding" className="tabContent">
        <h3>Coding</h3>
        <p>
          Here are a sampling of the various types of projects I have developed,
          ranging from purely front-end to full MERN-stack.
        </p>
        <ProjectCarousel />
      </div>
      <footer id="copyright">
        <Copyright />
      </footer>
    </>
  );
}
