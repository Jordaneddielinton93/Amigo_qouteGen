import styled from "styled-components";

export const MyGoalStyled = styled.div`
  height: 300px;
  width: 100%;
  background-color: white;
  display: flex;
  align-items: center;
  & .mainGoal{
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width:1200px;
    height: 200px;
    margin: 0px auto;

    font-size: 4rem;
    &__container{
      position: relative;
      height: 100px;
      width: 100px;

      &-title{
        top: 0%;
        left: 0%;
        position: absolute;
        font-size: 1.3rem;
        color: black;
        z-index: 2;
      }
      &-Subtitle{
        top: 0%;
        left: 0%;
        position: absolute;
        opacity: 0.3;
        color: rgba(47,205,201,0.7);

        
      }
    }
    @media only screen and (max-width: 1200px) {
		  width:100%;
		}
  }
`