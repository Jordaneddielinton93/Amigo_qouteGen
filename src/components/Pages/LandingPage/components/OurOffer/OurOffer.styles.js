import styled from "styled-components";

export const OurOfferStyled = styled.div`
  max-width: 100%;
  width: 100%;
  background-color:rgb(47, 205, 201) ;
  & .OurOffer__Container{
    display: flex;
    justify-content: space-evenly;
    max-width: 1200px;
    min-height: 400px;
    flex-direction: column;
    padding: 80px;
    margin: 0px auto;
    @media only screen and (max-width: 500px) {
      padding: 40px;
    }
    &--OurOffer{
      width: 100%;
      text-align: left;
    }
    &--OurAimTitle{
      width: 100%;
      text-align: left;
      margin:30px 0px;
      font-weight: 900;
      text-shadow: 4px 4px 2px rgba(150, 150, 150, 1);

    }
    &--Para{
      width: 400px;
      text-align: left;
      margin:30px 0px;
      @media only screen and (max-width: 500px) {
          width: 250px;
      }
    }
    &--Button{
      margin-top: 30px;
      border-radius: 20px;
      width: 120px;
      height: 50px;
      background-color: white;
      font-weight: 700;
      cursor: pointer;
      &:hover{
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      }
    }
    &__textIMGContainer{
      min-height: 200px;
      display: flex;
      justify-content: center;
      width: 100%;

      &--bigText{
        font-size: 8rem;
        align-self: center;
        color: white;
      
        font-weight: 900;
        @media only screen and (max-width: 1250px) {
          font-size: 9vw;
        }
        @media only screen and (max-width: 900px) {
          font-size: 7.5vw;
        }
        @media only screen and (max-width: 700px) {
          font-size: 6vw;
        }
      }
      &--HandsIMG{
        max-height:200px ;
        @media only screen and (max-width: 700px) {
          max-height: 100px;
        }
      }
      
    }
    
  }
`