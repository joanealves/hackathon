import styled from "styled-components";

export const Container = styled.div`
  width: 375px;
  background-color: var(--withe);
  color: var(--green_dark);
`;

export const Form = styled.form`
  background-color: var(--shape);
  padding: 20px;
`;

export const FlexDiv = styled.div`
  display: flex;
`;

export const WeekButtons = styled.a`
  cursor: pointer;
  display: inline-block;
  border-radius: 50%;
  width: 100%;
  padding: 10px;
  margin: 3px;
  background: var(--green_dark);
  color: var(--withe);
`;

export const FlexColumnDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
