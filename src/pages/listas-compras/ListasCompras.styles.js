import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const CalendarWrapper = styled.div`
  padding-top:40px;
`;

export const CalendarBox = styled.div`

 /* .rbc-row-segment {
  
 } */

  
 background: var(--green_light);
 
 .sc-olbas  {
  background: var(--green_dark) ;

  .rbc-time-column {
    color: #2c3333;
  }

  .rbc-row .rbc-month-header{
    color: red;
  }

 rbc-event{
    color: red;
 }
 }
`;

// class="rbc-calendar"

export const Absolute = styled.div`
  position: absolute;
  background: #e7f6f2;
  width: 100%;
  z-index: 600;
  height: 200px;
  margin-top: -20px;
`