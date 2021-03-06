import styled from "styled-components";

export const HeroApiStyled = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
  min-height: 100vh;
  background: linear-gradient(
-45deg,#FFB819,#F64B7F,#188194,#2FCDC9);
background-size: 400% 400%;
animation: gradient 35s ease infinite;
position: relative;
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

& .HeroApi{
	position: absolute;
	top: 200px;
	width: 1200px;
	display: flex;
	@media only screen and (max-width: 1200px) {
		width: 100%;
	}
	@media only screen and (max-width: 900px) {
		flex-direction: column;
		top: 100px;
	}
	&__left{
		width: 50%;
		height: 60vh;
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		flex-direction: column;
		@media only screen and (max-width: 900px) {
		height: 25vh;
		width: 100%;
		}
		&--inputContainer{
			width: 100%;
			&--Uinput{
				width: 90%;
			}
		}

		& .HeroApi__left__container--button{
			background-color: white;
			padding: 2px;
			border-radius: 10px;
			font-size: 1.2rem;
			color: black;
			width: 120px;
			height: 50px;
			cursor: pointer;
			&:hover{
				box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
				background-color:#2FCDC9 ;
			}
		}
	}







	&__right{
		display: flex;
		justify-content: center;
		height: 60vh;
		width: 50%;
		max-height: 40vh;
		align-self: center;
		@media only screen and (max-width: 900px) {
		width:100%;
		}
		&__List{
			width: 95%;
			height: 95%;
			overflow-y: scroll;
			
			& .APIqoute{
				font-size:0.8rem;
				padding:30px 0px;
				border: solid thin #2FCDC9;
				background-color: white;
				& .APIqouteBtn{
					background-color: #2FCDC9;
					padding: 2px;
					border-radius: 10px;
					color: white;
				}
			}


			
		}
		
	}
}
& .HeroApi__right__List::-webkit-scrollbar-track
		{
			box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
			border-radius: 10px;
			background-color: #F5F5F5;
		}
		& .HeroApi__right__List::-webkit-scrollbar
		{
			width: 12px;
			background-color: #F5F5F5;
		}

		& .HeroApi__right__List::-webkit-scrollbar-thumb
		{
			border-radius: 10px;
			-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
			background-color: #2FCDC9;
		}

`