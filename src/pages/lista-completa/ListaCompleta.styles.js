import styled from "styled-components";

export const Container = styled.div`
 padding: 20px;
 height: calc(100vh - 80px);
 display: flex;
 align-items: center;
 flex-direction: column;
 
 h2 {
       color: white;
       background: var(--green_dark);
       width: 40px;
       height: 40px;
       display: flex;
       align-items: center;
       justify-content: center;
       border-radius: 50%;
       margin: 16px 0 4px;
   }

   span {
    font-size: 20px;
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
 margin: 16px 0;
 width: 100%;
 border-radius: 5px;
`

export const Produto = styled.div`
   background: #e7f6f2;
   height: 39px;
   display: flex;
   align-content: center;
   justify-content: space-between;
   padding: 4px;
   align-items: center;
   width: 100%;
  
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
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin: 16px 0;
`

export const BtnPagination = styled.button`
  cursor: pointer;
  background: var(--green_dark);
  border: unset;
  padding: 4px;
  border-radius: 4px;
  width: 40px;

  svg {
    width: 30px;
    height: 30px;
  }
  
`
export const CheckmarkButton = styled.button`
   background: var(--green_light);
  border: unset;
  padding: 4px;
  border-radius: 4px;
  width: 40px;
  
   svg {
    width: 20px;
    height: 20px;
    color: var(--green_dark)
  }
`