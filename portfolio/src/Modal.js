import React from 'react'
import styled from 'styled-components'
import { MdClose } from 'react-icons/md';


const ModalContent = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 2vw;
  color: greysmoke;
  h1 {
    font-size: 2.5vw;
    font-weight: bold;
    font-family: 'Playfair Display', serif;
    margin-bottom: 1vw;
  }
  p {
    margin: auto;
  }
  button {
    padding: 11px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;<
  width: 32px;
  height: 32px;
  padding: 0;

`;
const Background = styled.div`
width: 320px;
height: 320px;
background: rgba(0, 0, 0, 0.8);
position: fixed;
top: 1vw;
display: flex;
justify-content: center;
align-items: center;
`;
const ModalImg = styled.img`
  
 
  border-radius: 10px 0 0 10px;
  background: orange;
 
`;
const ModalWrapper = styled.div`
width: 300px;
height: 300px;
box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
background: #fff;
color: #000;
display: grid;
grid-template-rows: 1fr 1fr;
position: relative;
z-index: 10;
border-radius: 10px;
img{
  
  width: 150px;
  height: 110px;
  border-radius: 10px;
  margin:  auto;
}
`;


export const Modal = ({modal, setModal}) => {

 

  return (
   <>
{modal ?  (
    <Background>
        <ModalWrapper modal={modal} >
            <ModalImg src={require('./images/budget.png')}/>
             <ModalContent>
                <h1>Expense Tracker</h1>
                <p>
                Expense tracker is an application where the user creates an account and can keep track of their expenses. It is a mobile app. Created with Ruby on Rails.
                </p>
                </ModalContent>
                <CloseModalButton onClick={() => setModal(prev => !prev)}/>

        </ModalWrapper >

       </Background>
) : null}

   </>
  )
}
