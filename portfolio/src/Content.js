import React, {useRef} from 'react'
import styled from 'styled-components'
import img1 from './images/budget.png'
import img2 from './images/covid.png'
import img3 from './images/reservify.png'
import img4 from './images/ozone.png'
import {FaArrowRight} from 'react-icons/fa'
import {FaArrowLeft} from 'react-icons/fa'



const Content = () => {

const siguiente = () => {
  if(slideshow.current.children.length > 0){
    const primerElemento = slideshow.current.children[0]
    slideshow.current.style.transition = '300ms ease-out all'
    slideshow.current.style.transform = 'translateX(-100%)'
    const transicion = () => {  

    slideshow.current.style.transition = 'none'
    slideshow.current.style.transform = 'translateX(0)'
    slideshow.current.appendChild(primerElemento)
    slideshow.current.removeEventListener('transitionend', transicion);
      }
      slideshow.current.addEventListener('transitionend', transicion)
    

  }
  }
  const anterior = () => {
		if(slideshow.current.children.length > 0){
			// Obtenemos el ultimo elemento del slideshow.
			const index = slideshow.current.children.length - 1;
			const ultimoElemento = slideshow.current.children[index];
			slideshow.current.insertBefore(ultimoElemento, slideshow.current.firstChild);
			
			slideshow.current.style.transition = 'none';
			const tamañoSlide = slideshow.current.children[0].offsetWidth;
			slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;
		
			setTimeout(() => {
				slideshow.current.style.transition = `300ms ease-out all`;
				slideshow.current.style.transform = `translateX(0)`;
			}, 30);
		}
	}
  const slideshow = useRef(null)
  return (
    <ContenedorPrincipal>
      <ContenedorSlideshow ref={slideshow}>
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
        <Boton onClick={anterior}>
          <FaArrowLeft />
        </Boton>
        <Boton derecho onClick={siguiente}>
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
pointer-events: all;
background: none;
borer: none;
cursor: pointer;
outline: none;
width: 50px;
height: 100%;
text-align: center;
trasition: .3s ease all;


${props => props.derecho ? 'right: 0': 'left: 0'}

`



export default Content