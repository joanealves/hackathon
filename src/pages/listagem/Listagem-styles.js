import styled from "styled-components";

export const Table = styled.div`
  margin: auto;
  min-height: 440px;
  width: 90%;
  max-width: 700px;
  margin-top: 50px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  background-color: #e7f6f2;
  h1 {
    margin: 0 4px;
    border-radius: 5px;
    background-color: #a5c9ca;
    padding: 5px;
    padding-left: 7px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
    /* border: 1px solid #2c3333; */
  }
`;

export const Back = styled.div`
  /* border: 1px solid #2c3333; */
  border-radius: 5px;
  margin: 0 5px;
  margin-top: 10px;
  background-color: #a5c9ca;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
  min-height: 400px;
`;

export const Line = styled.div`
  display: flex;
  align-items: center;
  margin: 8px;
  padding: 8px;
  border-radius: 5px;
  background-color: #e7f6f2;
  border: 1px solid #414141;
  font-weight: 500;
  p:nth-child(1) {
    letter-spacing: 2px;
    width: 10%;
  }
  p:nth-child(2) {
    font-size: 16px;
    letter-spacing: 1px;
    width: 1000%;
    text-align: center;
  }
  p:nth-child(3) {
    font-size: 16px;
    cursor: pointer;
    transition: 250ms;
  }
  p:nth-child(3):hover {
    color: #e04747;
  }
`;