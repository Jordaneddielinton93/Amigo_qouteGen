import { collection, getDocs } from 'firebase/firestore/lite';
import { useState } from "react";
import { db } from '../../../../Firebase/Firebase';
import { HeroStyled } from "./Hero.style";

const Hero = () => {

  const collections = collection(db, "qoutes");

  let [data,setdata]=useState([{qoutes:"Success Drives Transformation"}])


  

  async function getNewQoute() {

    const response = await getDocs(collections);
    setdata(response.docs.map((data)=>{

      return {...data.data()}
    }))
    
  }


  return ( 
    <HeroStyled>
      <div className="HeroCont">
        <div>
        <h1 className="HeroCont--Title">
          {data[Math.floor(Math.random() * (data.length-1))].qoutes}
        </h1>
        <h3 className="HeroCont--SubTitle">Amigo gives enterprises a better way to change, in less time,<br /> with less cost and less risk.</h3>
        </div>


        <button onClick={getNewQoute}
        className="HeroCont--Button">Show New Quote Via Firebase </button>
      </div>
    </HeroStyled>
   );
}
 
export default Hero;





