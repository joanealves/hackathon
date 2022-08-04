import styled from "styled-components";

export const Container = styled.div`
  width: 375px;
  margin: 0 auto;
  color: var(--green_dark);
`;

export const Form = styled.form`
  padding: 20px 0;
`;

export const Div = styled.div`
  padding: 20px 0px;
`;

export const FlexColumnDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0px;
`;

export const InputTextDiv = styled.div`
  position: relative;
  padding: 15px 0 0;
  margin-top: 10px;
  width: 50%;
`;

export const Input = styled.input`
  font-family: inherit;
  width: 100%;
  border: 0;
  border-bottom: 2px solid var(--green_dark);
  outline: 0;
  font-size: 1.3rem;
  color: var(--gray);
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;
  &:placeholder {
    color: transparent;
  }
`;

export const InputNumber = styled(Input)`
  width: 25%;
  padding-left: 10%;
`;

export const InputDate = styled.input`
  width: 82%;
  background: var(--shape);
  color: var(--green_dark);
  font-size: 1.3rem;
  padding: 10px 15px;
  outline: 0;
  border-radius: 13px;
  border: 2px solid var(--green_dark);
  &:hover {
    color: var(--green_dark);
    background: var(--green_light);
  }
`;

export const Select = styled.select`
  display: inline-block;
  margin-bottom: 15px;
  width: 100%;
  font-size: 1.3rem;
  display: inline-block;
  width: 100%;
  cursor: pointer;
  padding: 10px 15px;
  outline: 0;
  border: 2px solid var(--green_dark);
  border-radius: 13px;
  background: var(--shape);
  color: var(--green_dark);
  &:hover {
    color: var(--green_dark);
    background: var(--green_light);
  }
  &:disabled {
    opacity: 0;
    pointer-events: none;
  }
`;

export const Label = styled.label`
  font-size: 1.3em;
  margin-left: 5px;
`;

export const Button = styled.button`
  width: 100%;
  float: right;
  background: var(--green_dark);
  color: var(--white);
  border: 2px solid var(--green_dark);
  box-shadow: #000 0 5px 5px -5px;
  font-size: 1.5em;
  padding: 0.25em 1em;
  border-radius: 10px;
  margin-top: 20px;
  &:hover {
    background: var(--green_light);
    color: var(--green_dark);
  }
`;
