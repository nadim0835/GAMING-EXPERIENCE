import React from 'react'
import "./Live.css"
import Container from 'react-bootstrap/Container';

const Live = () => {
  return (
    <>
   <section id="live">
    <Container>
        <h1>
        LIVE STREAMIN VIDEO BY HANCOK
        </h1>
        <div className="flex row">
          <div className=" col-lg-4">
            <div className="item_box bone">
              <div className="one">
                <img src="images/1.png" alt="" />
              </div>
              <h4>
              HORIZON ZERO | DAWN
              </h4>
              <div className="lflex d-flex justify-content-between">
              <h5>
              Guerrilla Games
              </h5>
              <h6>
                Live
              </h6>

              </div>
             

            </div>

          </div>
          <div className=" col-lg-4">
            <div className="item_box btwo">
              <div className="one">
                <img src="images/1.png" alt="" />
              </div>
              <h4>
              HORIZON ZERO | DAWN
              </h4>
              <div className="lflex d-flex justify-content-between">
              <h5>
              Guerrilla Games
              </h5>
              <h6>
                Live
              </h6>

              </div>
             

            </div>

          </div>
          <div className=" col-lg-4">
            <div className="item_box bthree">
              <div className="one">
                <img src="images/1.png" alt="" />
              </div>
              <h4>
              HORIZON ZERO | DAWN
              </h4>
              <div className="lflex d-flex justify-content-between">
              <h5>
              Guerrilla Games
              </h5>
              <h6>
                Live
              </h6>

              </div>
            </div>

          </div>
        </div>
        <div className="end">
        <h3>
        PREVIOUS MATCHES
        </h3>
        <div className="flex">
          <div className="one tfast">
          <div className="d-flex justify-content-between align-items-center">
              <img src="images/teamone.png" alt="img" />
              <h2>TEAM DELTA</h2>
            </div>
          </div>
          <div className="two">
          <h2 className='time'>
            9:12
            </h2>
          </div>
          <div className="three tlast">
          <div className="d-flex justify-content-between align-items-center">
            <h2>TEAM ALPHA</h2>
              <img src="images/teamtwo.png" alt="img" />  
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="one tfast">
          <div className="d-flex justify-content-between align-items-center">
              <img src="images/teamthree.png" alt="img" />
              <h2>TEAM DEVILS</h2>
            </div>
          </div>
          <div className="two">
          <h2 className='time'>
          17:8
            </h2>
          </div>
          <div className="three tlast">
          <div className="d-flex justify-content-between align-items-center">
            <h2>TEAM NINJA</h2>
              <img src="images/teamfour.png" alt="img" />  
            </div>
          </div>
        </div>
        </div>
    </Container>
   </section>
    </>
  )
}

export default Live