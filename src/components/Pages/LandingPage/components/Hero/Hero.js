import { collection, getDocs } from 'firebase/firestore/lite';
import { useState } from "react";
import { db } from '../../../../Firebase/Firebase';
import { HeroStyled } from "./Hero.style";
const Hero = () => {



  // get the firebase database named qoutes 0️⃣
  const collections = collection(db, "qoutes");

  // 1️⃣
  // have changeable state init set to suscces drives Transformation
  let [data,setdata]=useState([{qoutes:"Success Drives Transformation"}])


  

  async function getNewQoute() {
    // call the data from the collection from the db, map through it and set the new state to the returned arrayObj 2️⃣
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
          {/* get a random qoute from the arrayobject state based on its length starting at 0 3️⃣ */} 
        </h1>
        <h3 className="HeroCont--SubTitle">Amigo gives enterprises a better way to change, in less time,<br /> with less cost and less risk.</h3>
        </div>


        <button onClick={getNewQoute} //*️⃣call the call api
        className="HeroCont--Button">Show New Quote Via Firebase </button>
      </div>
    </HeroStyled>
   );
}
 
export default Hero;





