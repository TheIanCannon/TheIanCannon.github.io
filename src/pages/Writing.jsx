import Navbar from "../components/Navbar.jsx";
import Copyright from "../components/Copyright.jsx";
import Tear from "../PDFs/Tear.pdf";
import Smoke from "../PDFs/Smoke.pdf";
import Give from "../PDFs/Give.pdf";

export default function Writing() {
  return (
    <>
      <Navbar />
      <div id="Writing" className="tabContent">
        <h3>Writing</h3>
        <p>
          I am the project manager and lead author of 
          <i>
            <a href="https://smile.amazon.com/Untitled-tbd/dp/1681884348/ref=sr_1_1?crid=2BU7F3Z3DDQTQ&keywords=The+Official+MacGyver+Manual&qid=1640155493&sprefix=the+official+macgyver+manua%2Caps%2C138&sr=8-1">
              The Official MacGyver Survival Manual
            </a>
          </i>
          , as well as of two children's education books: 
          <i>The Wonder of Space</i>, and <i>The Mighty World of Robots</i>.
        </p>
        <p>
          In addition, I am the project manager and ghostwriter for Ubisoft's 
          <a href="https://smile.amazon.com/Official-Far-Cry-Survival-Manual/dp/1647221501/ref=sr_1_1?crid=175FLQZRL8MOS&keywords=The+Official+Far+Cry+Manual&qid=1640155552&sprefix=the+official+far+cr+manual%2Caps%2C112&sr=8-1">
            <i>The Official Far Cry Survival Manual</i>
          </a>
          , working in concert with lead writer Josh Parker.
        </p>
        <p>
          Along with the above, my editorial work has involved contributing
          research and writing to more than 100 titles, many of them licensed to
          properties such as <i>STAR WARS</i> and <i>Star Trek</i>; other
          companies such as Gold's Gym and The Lonny Home/Livingly Media;
          podcasts including <i>Sawbones</i> and <i>Neuro Transmissions</i>; and
          Bonnier Media's magazines including <i>Field & Stream</i>,
          <i>Outdoor Life</i>, <i>Cycle World</i>, <i>Dirt Rider</i>,
          <i>Surf</i>, and others.
        </p>
        <div id="TechWriting">
										<p>
												As a budding Technical Writer, I have continued to write in less conversational, more structured formats. Click the links below to view samples in PDF format.
										</p>
          <ul className="WritingList">
												<li>
														<a href={Tear} target="_blank" type="application/pdf">Sample 1: The Science Behind Tear Gas: Conceptual/Reference Document</a>
												</li>
												<li>
														<a href={Smoke} target="_blank" type="application/pdf">Sample 2: MacGyver Smoke Powder lab procedure: Conceptual/Reference/Task Document</a>
												</li>
												<li>
														<a href={Give} target="_blank" type="application/pdf">Sample 3: Readme.MD for a charity app: Conceptual/List/Task Document</a>
												</li>
          </ul>
        </div>
      </div>
      <footer id="copyright">
        <Copyright />
      </footer>
    </>
  );
}
