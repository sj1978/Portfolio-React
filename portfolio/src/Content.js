import React from 'react'
import styled from 'styled-components'
import img1 from './images/budget.png'
import img2 from './images/covid.png'
import img3 from './images/reservify.png'
import img4 from './images/ozone.png'
import {FaArrowRight} from 'react-icons/fa'
import {FaArrowLeft} from 'react-icons/fa'

const Content = () => {
  return (
    <ContenedorPrincipal>
      <ContenedorSlideshow>
      <Slide>
        <a href='#'>
          <img src={img1} alt='budget app photo' />
        </a>
        <TextoSlide>
          <p>
        Budget app
          </p>
         </TextoSlide>
      </Slide>
      <Slide>
        <a href='#'>
          <img src={img2} alt='covid app photo' />
        </a>
        <TextoSlide>
          <p>
       Covid App
          </p>
         </TextoSlide>
      </Slide>
      <Slide>
        <a href='#'>
          <img src={img3} alt='reservify photo' />
        </a>
        <TextoSlide>
          <p>
        Reservify
          </p>
         </TextoSlide>
      </Slide>
      <Slide>
        <a href='#'>
          <img src={img4} alt='ozono app photo' />
        </a>
        <TextoSlide>
          <p>
        Ozono App
          </p>
         </TextoSlide>
      </Slide>
      </ContenedorSlideshow>
      <Controles>
        <Boton>
          <FaArrowLeft />
        </Boton>
        <Boton >
       <FaArrowRight />
        </Boton>
      </Controles>
    </ContenedorPrincipal>

  )
}
const ContenedorPrincipal = styled.div`
position: relative;`
const ContenedorSlideshow = styled.div`
  display: flex;
  flex-wrap: nowrap;

`
const Slide = styled.div`
min-width: 100%;
height: 100%;
overflow: hidden;
transition .3s ease all;
z-index: 10;
max-height: 230px;
position: relative;
img {
  width: 100%;
  height: 100%;
  vertical-align: top;
}

`
const TextoSlide = styled.div`
background: rgba(0,0,0,.5);
color: white;
width: 100%;
padding: 10px 60px
text-align: center;
position: absolute;
bottom: 0;
@media (max-width: 700px) {
  position: relative;
  background: #000;
 }`
const Controles = styled.div`
posation: absolute;
top:0;
z-index: 20;
width: 100%;
height: 100%;
pointer-events: none;  
`
const Boton = styled.button`
pointer-events: all;`


export default Content