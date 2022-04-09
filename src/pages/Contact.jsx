import pm from "../media/img/pm.png";
import github from "../media/img/github.png";
import linkedin from "../media/img/linkedin.png";
import Navbar from "../components/Navbar.jsx";
import Copyright from "../components/Copyright.jsx";

export default function Contact() {
  return (
    <>
      <Navbar />
      <div id="Contact" className="tabContent">
        <h3>Contact</h3>
        <p>Questions?</p>
        <p>Comments?</p>
        <p>Reach out to me!</p>
        <a href="https://www.linkedin.com/in/theiancannon/">
          <img alt="LinkedIn" className="Icon" id="LinkedIn" src={linkedin} />
        </a>
        <a href="https://github.com/TheIanCannon/">
          <img alt="GitHub" className="Icon" id="GitHub" src={github} />
        </a>
        <a href="mailto: ian.cannon@protonmail.com">
          <img alt="ProtonMail" className="Icon" id="ProtonMail" src={pm} />
        </a>
      </div>
						<footer id="copyright">
								<Copyright />
						</footer>
    </>
  );
}
