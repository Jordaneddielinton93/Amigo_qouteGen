import styled from "styled-components";

export const NavBarStyled = styled.header`
  width: 100%;
  height:100px ;
  display:flex;
  position: absolute;
  top: 0;

  & .Nav{
    display: flex;
    width: 1200px;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
    justify-content: space-between;
    align-items: center;
    font-size: 1.2rem;
    position: relative;
    @media only screen and (max-width: 1200px) {
      width:100%
    }

    & a{
      color: white;
    }
  }
  & .Nav_IMGContainer{
    position: relative;
    width: 200px;
    height: 100%;
    & #header-logo{
      position: absolute;
      left: 0;
      
    }
    &__image{
      fill: aliceblue;
    }
  }


  & .Nav_Desk-list{
    position: absolute;
    right: 0;
    display: flex;
    justify-content: space-evenly;
    color: yellow;
    
    @media only screen and (max-width: 750px) {
      display: none;
    }

    &--li{
      padding-right:20px;
    }
  }

  

  & .burger{
    @media only screen and (min-width: 750px) {
      display: none;
    }
    position: relative;
    width: 30px;
    height: 20px;
    margin-right: 30px;
    z-index: 10;
    
    &--lineTop{
      top: 0;
      position: absolute;
      height: 5px;
      width: 100%;
      background-color: white;
      left: 0;
      transition: 0.5s;

    }
    &--lineBttm{
      position: absolute;
      left: 0;
      bottom: 0;
      height: 5px;
      width: 40%;
      background-color: white;
      transition: 0.5s;

    }
  }
  
  & .Nav_Mobi-list{
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color:rgba(38, 109, 125,0.9) ;
    transition:0.5s ;
    & a{
      color: whitesmoke;
    }
    @media only screen and (min-width: 750px) {
      display: none;
    }
    @media only screen and (max-width: 750px) {
      display: flex;
    }
  }
  
`