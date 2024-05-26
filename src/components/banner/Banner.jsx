import React from 'react'
import "./Banner.css"
import Container from 'react-bootstrap/Container';
import { FaAngleDoubleRight,FaFacebook, FaLinkedin} from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { IoLogoInstagram } from "react-icons/io5";

const Banner = () => {
  return (
    <>
    <section id='banner'>
         <Container>
            <div className="text">
                <h4>
                LIFE TIME
                </h4>
                <h1>
                GAMING EXPERIENCE
                </h1>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae alias voluptas optio. 
Veritatis recusandae pariatur qui dignissimos dolore similique ad adipisci eum. Quos 
aliquid fugiat magni illum eius?
                </p>
                <a href="#">
                View More
               <span>
               <FaAngleDoubleRight  />
               </span>
                </a>
            </div>
            <div className="iconlast">
            <FaFacebook className='icon '/>
            <FaLinkedin className='icon '/>
            <AiFillTwitterCircle className='icon '/>
            <IoLogoInstagram className='icon '/>

            </div>
          
        </Container>

    </section>
   
    </>
  )
}

export default Banner