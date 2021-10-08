import styled from "styled-components";

export const UpdateStyled = styled.main`
  width: 100%;
  min-height: 600px;
  max-width: 100%;

  & .updateArea{
    display: flex;
    width: 1200px;
    height: 100%;
    margin: 0 auto;
    background-color: FCFAFA;
    @media only screen and (max-width: 1200px) {
      width:100%
    }
    @media only screen and (max-width: 750px) {
      flex-direction: column;
      align-items: center;
    }


    &__Left{
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      height: 600px;
      width: 50%;
      text-align: left;
      @media only screen and (max-width: 1200px) {
      padding: 15px;
      }
      @media only screen and (max-width: 750px) {
        width: 95%;
        padding: 0%;
        margin-bottom: 60px;
      }
      &--SubTitle{
        color:#187c8e ;
       
      }
      &--Title{
        font-size:2rem ;
        letter-spacing: 5px;
        font-weight: 900;
      }

      &__container{
        align-self: center;
        width: 100%;
        display: flex;
        flex-direction: column;
        

        &--input{
          text-align: center;
          background-color:rgba(47, 205, 201,0.3) ;
        }
        &--buttom{
          margin-top: 10px;
          background-color: #2FCDC9;
        }
      }
    }
    
    
    
    
    &__Right{
      display: flex;
      justify-content: center;
      align-items: center;
      height: 600px;
      width: 50%;
      @media only screen and (max-width: 750px) {
        width: 95%;
      }

      &__Container{
        height: 90%;
        width: 90%;
        border: solid thick #2FCDC9 ;
        &__Ulist{
          overflow-y: scroll;
          width: 100%;
          max-height: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          &--Litem{
            border: thin solid #2FCDC9;
          }

/* scrollbar color changer */
          &::-webkit-scrollbar-track
          {
            box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
            border-radius: 10px;
            background-color: #F5F5F5;
          }
          &::-webkit-scrollbar
          {
            width: 12px;
            background-color: #F5F5F5;
          }
          &::-webkit-scrollbar-thumb
          {
            border-radius: 10px;
            -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
            background-color: #2FCDC9;
          }
        }
      }
    }
  }





`