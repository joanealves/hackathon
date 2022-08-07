import styled from "styled-components";

export const Container = styled.div`
 padding: 20px;
 height: calc(100vh - 80px);
 
 h2 {
       color: white;
       background: #2e61d5;
       width: 40px;
       height: 40px;
       display: flex;
       align-items: center;
       justify-content: center;
       border-radius: 50%;
    
   }
`;

export const CalendarWrapper = styled.div`
 padding-top:40px;
`;

export const CalendarBox = styled.div`
 
`;

export const Section = styled.section`
 margin-top: 20px;
 background: var(--green_light);
 padding: 4px;
 display: flex;
 flex-direction: column;
 gap: 8px;
`

export const Produto = styled.div`
   background: #e7f6f2;
   height: 39px;
   display: flex;
   align-content: center;
   padding: 4px;
   align-items: center;
  
`

export const Absolute = styled.div`
 position: absolute;
 background: #e7f6f2;
 width: 100%;
 z-index: 600;
 height: 200px;
 margin-top: -20px;
`
export const ContainerBtn = styled.div`
  
`

export const BtnPagination = styled.button`
  cursor: pointer;
  background: var(--green_dark);
  border: unset;

  svg {
    width: 30px;
    height: 30px;
  }
  
`