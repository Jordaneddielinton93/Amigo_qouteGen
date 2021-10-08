import styled from "styled-components";

export const SpanGreenTextStyle=styled.span`

    position: relative;

    & .changing{
      position: relative;
      z-index: 10;

    }
    & .greenline{
      position: absolute;
      left: 0;
      bottom: 8px;
      width: 100%;
      height: 9px;
      background-color: #2FCDC9;
      z-index: 1;
    }
        
`