import styled from "styled-components";


export const CarouselStyle = styled.div`
  height: 300px;
  width: 100%;
  overflow-x: hidden;
  & .CarouselConatiner{
    position: relative;
    height: 100%;
    width: 1200px;
    margin:0px auto;
    overflow-x: hidden;
    @media only screen and (max-width: 900px) {
			width:100%
		}
    &__Slider{
      display: flex;
      position: absolute;
      left: -300px;
      width: 2400px;
      height: 300px;
      transition: 1s;
      &--Quotes{
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: 300px;
        height: 100%;
      }
      
    }
  }
`