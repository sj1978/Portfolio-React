import React, { useRef } from "react";
import { useState } from "react";
import {Modal} from './Modal'
import styled from "styled-components";
import img1 from "./images/budget.png";
import img2 from "./images/covid.png";
import img3 from "./images/reservify.png";
import img4 from "./images/ozone.png";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

const Content = () => {
  const [modal , setModal] = useState(false);

  const showModal = () => { 
    setModal(prev => !prev);
  }
  const siguiente = () => {
    if (slideshow.current.children.length > 0) {
      const primerElemento = slideshow.current.children[0];
      slideshow.current.style.transition = "300ms ease-out all";
      slideshow.current.style.transform = "translateX(-100%)";
      const transicion = () => {
        slideshow.current.style.transition = "none";
        slideshow.current.style.transform = "translateX(0)";
        slideshow.current.appendChild(primerElemento);
        slideshow.current.removeEventListener("transitionend", transicion);
      };
      slideshow.current.addEventListener("transitionend", transicion);
    }
  };
  const anterior = () => {
    if (slideshow.current.children.length > 0) {
      const index = slideshow.current.children.length - 1;
      const ultimoElemento = slideshow.current.children[index];
      slideshow.current.insertBefore(
        ultimoElemento,
        slideshow.current.firstChild
      );

      slideshow.current.style.transition = "none";
      const tamañoSlide = slideshow.current.children[0].offsetWidth;
      slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;

      setTimeout(() => {
        slideshow.current.style.transition = `300ms ease-out all`;
        slideshow.current.style.transform = `translateX(0)`;
      }, 30);
    }
  };
  const slideshow = useRef(null);
  return (
    <ContenedorPrincipal>
      <h1 className="latest">Latest Projects</h1>
      <ContenedorSlideshow ref={slideshow}>
        <Slide>
          <a href="#">
            <img src={img1} alt="budget app photo" />
          </a>
          <TextoSlide>
            <a href="https://github.com/sj1978/budget-app.git" target="_blank">
              Source
            </a>
            <p>Expense Tracker</p>
            <a
              href="https://gentle-headland-22451.herokuapp.com/"
              target="_blank"
            >
              See Live
            </a>
            <Button onClick={showModal}>Description</Button>
            <Modal modal={modal} setModal={setModal}  />
          </TextoSlide>
        </Slide>
        <Slide>
          <a href="#">
            <img src={img2} alt="covid app photo" />
          </a>
          <TextoSlide>
            <a href="https://github.com/sj1978/react-redux-capstone.git" target="_blank">Source</a>
            <p>Covid in South America</p>
            <a href="https://react-redux-capstone-sj1978.herokuapp.com/" target="_blank">See Live</a>
          </TextoSlide>
        </Slide>
        <Slide>
          <a href="#">
            <img src={img3} alt="reservify photo" />
          </a>
          <TextoSlide>
            <a href="https://github.com/Yothu/reservify-back-end.git" target="_blank">Source</a>
            <p>Reservify</p>
            <a href="https://reservify.netlify.app/" target="_blank">See Live</a>
          </TextoSlide>
        </Slide>
        <Slide>
          <a href="#">
            <img src={img4} alt="ozono app photo" />
          </a>
          <TextoSlide>
            <a href="https://github.com/sj1978/ozone-rails-app.git" target="_blank">Source</a>
            <p>Ozono App</p>
            <a href="https://airozonequality.herokuapp.com/" target="_blank">See Live</a>
          </TextoSlide>
        </Slide>
      </ContenedorSlideshow>
      <Controles>
        <Boton onClick={anterior}>
          <FaArrowLeft />
        </Boton>
        <Boton derecho onClick={siguiente}>
          <FaArrowRight />
        </Boton>
      </Controles>
    </ContenedorPrincipal>
  );
};

const Button = styled.button`
  min-width: 100px;
  padding: 3px 10px;
  border-radius: 4px;
  border: none;
  background: none;
  color: whitesmoke;
  font-size: 1.2rem;
  font-weight: bold;
  font-family: 'Playfair Display', serif;
  cursor: pointer;
 
`;

const ContenedorPrincipal = styled.div`
  position: relative;
`;
const ContenedorSlideshow = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;
const Slide = styled.div`
min-width: 100%;
height: 100%;
overflow: hidden;
transition .3s ease all;
z-index: 10;
max-height: 230px;
position: relative;
img {
  width: 82vw;
  height: 240px;
  vertical-align: top;
}

`;
const TextoSlide = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
background: rgba(0,0,0,.5);
color: whitesmoke;
font-size: 1.2rem;
font-weight: bold;
font-family: 'Playfair Display', serif;
width: 100%;
padding: 10px 60px
text-align: center;
position: absolute;
bottom: 0;
a {
  color: whitesmoke;
  font-size: 1.2rem;
  font-weight: bold;.
  font-family: 'Playfair Display', serif;
}
@media (max-width: 700px) {
  position: relative;
  background: #000;
 }`;
const Controles = styled.div`
  posation: absolute;
  top: 0;
  z-index: 20;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;
const Boton = styled.button`
  pointer-events: all;
  background: none;
  borer: none;
  cursor: pointer;
  outline: none;
  width: 50px;
  height: 40px;
  text-align: center;
  trasition: 0.3s ease all;

  ${(props) => (props.derecho ? "right: 0" : "left: 0")}
`;

export default Content;
