import Navbar from "../components/Navbar.jsx";
import Copyright from "../components/Copyright.jsx";

export default function Welcome() {
  return (
    <>
      <Navbar />
      <div id="Welcome" className="tabContent">
        <h3>Welcome</h3>
        <p>
          Hello and well met! I am a full-stack software engineer and
          professional writer with an extensive background in publishing.
        </p>
        <p>
          Learning (and creating!) new things both inside and outside my career
          is a major passion of mine, as is sharing knowledge.
        </p>
        <p>
          The things that drive me most are Curiosity, Creativity, and
          Knowledge—and I enjoy inspiring others toward the same ideals.
        </p>
      </div>
      <footer id="copyright">
        <Copyright />
      </footer>
    </>
  );
}
