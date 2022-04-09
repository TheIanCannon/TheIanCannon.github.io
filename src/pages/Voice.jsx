import Navbar from "../components/Navbar.jsx";
import VideoCarousel from "../components/VideoCarousel.jsx";
import Copyright from "../components/Copyright.jsx";

export default function Voice() {
  return (
    <>
      <Navbar />
      <div id="Voice" className="tabContent">
        <h3>Voice</h3>
        <p>
          I've always enjoyed reading for others, and multiple times I've been
          told that I have a good voice for it. Some years ago, at the
          suggestions of colleagues, I studied a few courses with{" "}
          <a href="http://www.voiceone.com">Voice One</a> and lent my vocal
          training and talents to a series of marketing promos for several of
          Weldon Owen's books.
        </p>
        <p>
          Production values were somewhere between "modest" and "DIY", but
          Gonzalo Ferreyra and the marketing team at Weldon Owen managed to make
          it work, and it was a good way to demonstrate some range and show off
          a few titles I'd taken part in creating.
        </p>
        <p>
          In addition, this set of voiceovers not only gave me experience
          working directly with sales and marketing, but allowed me a chance to
          display them hereusing ReactJS.
        </p>
        <div id="voList">
          <VideoCarousel />
        </div>
      </div>
      <footer id="copyright">
        <Copyright />
      </footer>
    </>
  );
}
