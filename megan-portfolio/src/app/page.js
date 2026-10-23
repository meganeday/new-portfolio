import Image from "next/image";
import SkillHand from "./SkillHand";
import HeroFan from "./Herofan";
import SmoothScrollLink from "./SmoothScrollLink";
 
function Ticker({ items, dark }) {
  const loop = [...items, ...items];
  return (
    <div className={"tick" + (dark ? " dark" : "")} aria-hidden="true">
      <div>
        {loop.map((t, i) => <span key={i}>{t}</span>)}
      </div>
    </div>
  );
}
 
const topItems = ["communications and digital content specialist", "*", "storytelling", "*", "photography", "*", "web development & design", "*", "marketing", "*", "copywriting", "*"];
const midItems = ["multi-disciplinary", "*", "creative", "*", "versatile", "*", "adaptable", "*", "curious", "*", "collaborative", "*"];
 
export default function Home() {
  return (
    <>
      <Ticker items={topItems} dark={true} />
 
      <header className="hero">
        <div className="wrap">
          <div>
            <h1>Megan Hubbert</h1>
            <span className="tag script">I'm sort of a jack of all trades</span>
            <p>
              I’m a storyteller at heart, and I love to create digital ecosystems across formats from newsletters and articles to photography, video, web, and socials. My passion lies in helping people share their work with the world in ways that are clear, compelling, and impactful.
            </p>
            <p>
              While I work in communications now, I spent several years as a Frontend Web Developer, and I still love to code and build things whenever I can (I built this site myself!). I’m a multi-disciplinary creative who thrives on variety, collaboration, and learning new things.
            </p>
            <div className="btns">
              <SmoothScrollLink className="btn" href="#hand-h">Take a peak at my hand</SmoothScrollLink>
              <SmoothScrollLink className="btn alt" href="#touch">Say hi!</SmoothScrollLink>
            </div>
          </div>
          <HeroFan />
        </div>
      </header>
      <div className="scallop" aria-hidden="true"></div>
 
      <section>
        <div className="wrap">
          <div className="intro">
            <h2 id="hand-h" tabIndex={-1}>Cards I keep in my back pocket</h2>
            <span className="script">see how I've applied each skill in my work</span>
            <p>Tap on a card to see each skill in action.</p>
          </div>
          <SkillHand />
        </div>
      </section>

      <div className="awning t" aria-hidden="true"></div>

  
      <section className="about" id="about" tabIndex={-1}>
        <div className="wrap">
          <div className="id tape">
            <h2><span className="chip">the basics</span></h2>
            <div className="row"><b>Name:</b><span>Megan Hubbert</span></div>
            <div className="row"><b>Current Role:</b><span>Communications Specialist @ Siebel Center for Design</span></div>
            <div className="row"><b>Lives in:</b><span>Champaign, Illinois</span></div>
            <div className="row"><b>Education:</b><span>BA in Writing for Performance from Columbia College Chicago</span></div>
            <div className="row"><b>Weakness:</b><span>Lavender Chai Lattes</span></div>
            <div className="row"><b>Hobbies:</b><span>Baking Sourdough, Reading, Crochet, Pickleball</span></div>
          </div>
          <div className="polaroid tape">
            <div className="ph">            
              <Image
                src="/megan.jpg"
                alt={`Megan smiling for a photo at Bethesda Terrace in New York City`}
                width={1000}
                height={1400}
                sizes="260px"
                priority
              /></div>
            <div className="cap">Hi, I'm Megan!</div>
          </div>
        </div>
      </section>
 
      <Ticker items={midItems} dark />
 
      <section className="touch" id="touch" tabIndex={-1}>
        <div className="wrap">
          <div className="ticket">
            <h2>Let’s keep in touch</h2>
            {/* <p>I’m open to communications and content roles with an emphasis on storytelling, where range is an asset.</p> */}
            <div className="btns" style={{ justifyContent: "center" }}>
              <a className="btn" href="mailto:meghubbert@gmail.com">meghubbert@gmail.com</a>
              <a className="btn" href="https://www.linkedin.com/in/meganhubbert">LinkedIn</a>
            </div>
          </div>
        </div>
      </section>
      <footer>made with love in Champaign, Illinois</footer>
    </>
  );
}
