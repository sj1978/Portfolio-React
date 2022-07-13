import React from 'react'
import styled from 'styled-components'
import { MdClose } from 'react-icons/md';


const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  p {
    margin-bottom: 1rem;
  }
  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;

`;
const Background = styled.div`
width: 600px;
height: 600px;
background: rgba(0, 0, 0, 0.8);
position: fixed;
display: flex;
justify-content: center;
align-items: center;
`;
const ModalImg = styled.img`
  width: 300px
  height: 300px;
  border-radius: 10px 0 0 10px;
  background: #000;
`;
const ModalWrapper = styled.div`
width: 500px;
height: 500px;
box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
background: #fff;
color: #000;
display: grid;
grid-template-columns: 1fr 1fr;
position: relative;
z-index: 10;
border-radius: 10px;
`;


export const Modal = ({modal, setModal}) => {

 

  return (
   <>
{modal ?  (
    <Background>
        <ModalWrapper modal={modal} >
            <ModalImg src={require('./images/budget.png')}/>
            <ModalContent>
                <h1>Budget</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec euismod, nisl eget consectetur sagittis, nisl nunc
                    consectetur nisi, euismod aliquam nisl nunc euismod
                    aliquam.
                </p>
                </ModalContent>
                <CloseModalButton onClick={() => setModal(false)}/>

        </ModalWrapper >

       </Background>
) : null}

   </>
  )
}
