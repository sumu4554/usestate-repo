import "./App.css";
import { useState } from "react";

function App() {
  const [article, setarticle] = useState(true);
  const [article2, setarticle2] = useState(false);
  const [article3, setarticle3] = useState(false);
  const [loading, setloading] = useState(true);
  function event() {
    setarticle(true);
    setarticle2(false);
    setarticle3(false);
  }
  function event2() {
    setarticle(false);
    setarticle2(true);
    setarticle3(false);
  }
  function event3() {
    setarticle(false);
    setarticle2(false);
    setarticle3(true);
  }

  if (setloading == "true") {
    return <h2>loading...</h2>;
  } else {
    return (
      <>
        <div className="container">
          <div className="navbar">
            <ul>
              <li className="link" onClick={event}>
                TOMMY
              </li>
              <li className="link" onClick={event2}>
                BIGDROP
              </li>
              <li className="link" onClick={event3}>
                CUKER
              </li>
            </ul>
          </div>

          <div className="content-box">
            {article && (
              <article className="content">
                <h2 className="title">Full Stack Web Developer</h2>
                <h4 className="author">TOMMY</h4>
                <h5 className="exp">December 2015 - Present</h5>
                <p className="desc">
                  <ul type=">>">
                    <li>
                      Tote bag sartorial mlkshk air plant vinyl banjo
                      lumbersexual poke leggings offal cold-pressed brunch
                      neutra. Hammock photo booth live-edge disrupt.
                    </li>
                    <li>
                      Post-ironic selvage chambray sartorial freegan meditation.
                      Chambray chartreuse kombucha meditation, man bun four
                      dollar toast street art cloud bread live-edge heirloom.
                    </li>
                    <li>
                      Butcher drinking vinegar franzen authentic messenger bag
                      copper mug food truck taxidermy. Mumblecore lomo echo park
                      readymade iPhone migas single-origin coffee franzen cloud
                      bread tilde vegan flexitarian.
                    </li>
                  </ul>
                </p>
                <button className="btn">More info</button>
              </article>
            )}
            {article2 && (
              <article className="content">
                <h2 className="title">Front-End Engineer</h2>
                <h4 className="author">BIGDROP</h4>
                <h5 className="exp">May 2015 - December 2015</h5>
                <p className="desc">
                  <ul type=">>">
                    <li>
                      Hashtag drinking vinegar scenester mumblecore snackwave
                      four dollar toast, lumbersexual XOXO. Cardigan church-key
                      pabst, biodiesel vexillologist viral squid.
                    </li>
                    <li>
                      Franzen af pitchfork, mumblecore try-hard kogi XOXO roof
                      party la croix cardigan neutra retro tattooed copper mug.
                      Meditation lomo biodiesel scenester
                    </li>
                    <li>
                      Fam VHS enamel pin try-hard echo park raw denim unicorn
                      fanny pack vape authentic. Helvetica fixie church-key,
                      small batch jianbing messenger bag scenester +1
                    </li>
                    <li>
                      Fam VHS enamel pin try-hard echo park raw denim unicorn
                      fanny pack vape authentic. Helvetica fixie church-key,
                      small batch jianbing messenger bag scenester +1
                    </li>
                  </ul>
                </p>
                <button className="btn">More info</button>
              </article>
            )}
            {article3 && (
              <article className="content">
                <h2 className="title">Engineering Intern</h2>
                <h4 className="author">CUKER</h4>
                <h5 className="exp">May 2014 - September 2015</h5>
                <p className="desc">
                  <ul type=">>">
                    <li>
                      I'm baby woke mumblecore stumptown enamel pin. Snackwave
                      prism pork belly, blog vape four loko sriracha messenger
                      bag jean shorts DIY bushwick VHS. Banjo post-ironic hella
                      af, palo santo craft beer gluten-fr
                    </li>
                    <li>
                      YOLO drinking vinegar chambray pok pok selfies quinoa
                      kinfolk pitchfork street art la croix unicorn DIY. Woke
                      offal jianbing venmo tote bag, palo santo subway tile
                      slow-carb post-ironic pug ugh taxidermy squid.
                    </li>
                    <li>
                      Pour-over glossier chambray umami 3 wolf moon. Iceland
                      kale chips asymmetrical craft beer actually forage,
                      biodiesel tattooed fingerstache. Pork belly lomo man
                      braid, portland pitchfork locavore man bun prism.
                    </li>
                  </ul>
                </p>
                <button className="btn">More info</button>
              </article>
            )}
          </div>
        </div>
      </>
    );
  }
}

export default App;
