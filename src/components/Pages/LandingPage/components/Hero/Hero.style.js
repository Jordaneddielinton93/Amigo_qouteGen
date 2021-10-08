import styled from "styled-components";

export const HeroStyled = styled.main`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(
-45deg,#FFB819,#F64B7F,#188194,#2FCDC9);
background-size: 400% 400%;
animation: gradient 35s ease infinite;
@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
& .HeroCont{
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	color: white;
	max-width: 800px;
	min-height: 65vh;

	&--Title{
		font-size: 6rem;
		line-height: 110px;
		@media only screen and (max-width: 900px) {
			font-size: 10vw;
		}
		
	}
	&--SubTitle{
		font-size: 1.6rem;
		justify-self: flex-start;
		align-self: flex-start;
		@media only screen and (max-width: 900px) {
			font-size: 3vw;
		}
	}
	&--Button{
		align-self: center;
		margin-top: 20px;
		background-color: transparent;
		border: none;
		font-size: 1.5rem;
		font-weight: 900;
		color: white;
		cursor: pointer;
		border: thin ridge white;
		border-radius: 10px;
		width: 80%;
		&:hover{
			transition: 1s;
			background-color:#2FCDC9 ;
			box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
		}
	}
}



`