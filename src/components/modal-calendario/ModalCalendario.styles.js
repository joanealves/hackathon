import styled from "styled-components";

export const ModalBox = styled.div`
    width: 100%;
    display: flex;
    margin: 0 auto;
    position: absolute;
    z-index: 500;

     h2 {
        color: var(--green_dark);
    }
`;

export const Modal = styled.div`    
    width: 500px;
    height:300px;
    margin: 0 auto;
    text-align: center;
    border: solid 2px var(--green_dark);
    border-radius: 8px;
    background: var(--green_light);
    padding: 16px;
`;

export const BoxButton = styled.div`    
    display: flex;
    gap: 8px;
    margin: 16px;
     justify-content: center;

  button{ 
    background: var(--green_dark);
    height: 40px;
    width: 50%;
    border: none;
    border-radius: 4px;
    padding: 4px;
  }

`;
