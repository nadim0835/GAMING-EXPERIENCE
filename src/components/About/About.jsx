import "./About.css"
import Container from 'react-bootstrap/Container';
import { FaCheck } from "react-icons/fa";
import { FaAngleDoubleRight} from "react-icons/fa";

const About = () => {
  return (
    <>
    <section id='about'>
        <Container>
            <h1>
            ABOUT THE BIGGEST HANCOK COMMUNITY
            </h1>
            <div className="row flex">
                <div className="flex_left col-lg-7">
                  <img src="images/aimg.png" alt="img" />
                </div>
                <div className="flex_right col-lg-5">
                  <div className="item">
                    <h3>
                    MOST POPULAR GAMING PLATFORM.
                    </h3>
                    <h4>
                      <span>
                      <FaCheck />

                      </span>
                      World Bigghest Community & Gaming Server
                    </h4>
                    <h4>
                      <span>
                      <FaCheck />

                      </span>
                      Friendly Clan & Mates
                    </h4>
                    <h4>
                      <span>
                      <FaCheck />
                      </span>
                      Largest Online Gaming Community & Shop                    </h4>
                    <h4>
                      <span>
                      <FaCheck />

                      </span>
                      World Bigghest Community & Gaming Server
                    </h4>
                    <h4>
                      <span>
                      <FaCheck />

                      </span>
                      Hancok reaches more than 150 million monthly users
                    </h4>
                    <h4>
                      <span>
                      <FaCheck />

                      </span>
                      We are leading global media brand for games
                    </h4>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex illo sed odio 
temporibus magni quia eveniet odit placeat repellat quod ipsum modi 
necessitatibus, dolorum officia!
                    </p>
                      <a href="#">
                View More
               <span>
               <FaAngleDoubleRight  />
               </span>
                </a>
                  </div>
                </div>
            </div>
            <div className="last">
              <div className="row flex_las">
                <div className=" col-lg-3">
                  <div className="item">
                    <div className="box">
                    <div className=" d-flex justify-content-center align-items-lg-center gap-2 ">
                      <h2>
                      112k
                      </h2>
                      <div className="circle">
                      </div>

                      </div>
                      <p>
                      Community Earning
                      </p>
                    </div>
                  </div>
                </div>
                <div className=" col-lg-3">
                  <div className="item">
                    <div className="box">
                    <div className=" d-flex justify-content-center align-items-lg-center gap-2 ">
                      <h2>
                      12M
                      </h2>
                      <div className="circle">
                      </div>

                      </div>
                      <p>
                      Total Member
                      </p>
                    </div>
                  </div>
                </div>
                <div className=" col-lg-3">
                  <div className="item">
                    <div className="box">
                    <div className=" d-flex justify-content-center align-items-lg-center gap-2 ">
                      <h2>
                      100k
                      </h2>
                      <div className="circle">
                      </div>

                      </div>
                      <p>
                      Streams Complete
                      </p>
                    </div>
                  </div>
                </div>
                <div className=" col-lg-3">
                  <div className="item">
                    <div className="box">
                      <div className=" d-flex justify-content-center align-items-lg-center gap-2 ">
                      <h2>
                      844
                      </h2>
                      <div className="circle">
                      </div>

                      </div>
                     
                      <p>
                      Total Sponsers
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </Container>
    </section>
    </>
  )
}

export default About