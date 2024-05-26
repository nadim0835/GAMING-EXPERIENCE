import React from 'react';
import "./Populer.css"
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
// 
const Populer = () => {
  return (
    <>
    <section id="populer">
        <Container>
            <div className="text">
            <h1>
            POPULAR GAMES AROUND THE WORLD
            </h1>
            </div>
           

              {/* slider */}
              <div className="slider">
              <Carousel fade>
      <Carousel.Item>
      <div className="flex row">
                <div className=" col-lg-6">
                    <div className="item">
                        <img src="images/vio.png" alt=""className='fast' />
                    </div>
                </div>
                <div className=" col-lg-6">
                    <div className="item">
                        <img src="images/trend.png" alt=""  className='last'/>
                    </div>
                </div>
            </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className="flex row">   
                <div className=" col-lg-6">
                    <div className="item">
                        <img src="images/trend.png" alt=""  className='last'/>
                    </div>
                </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className="flex row">
                <div className=" col-lg-6">
                    <div className="item">
                        <img src="images/vio.png" alt=""className='fast' />
                    </div>
                </div>
    </div>       
     </Carousel.Item>
     </Carousel> 
    
              </div>
              {/* slider */}

        </Container>
    </section>
    </>
  )
}

export default Populer