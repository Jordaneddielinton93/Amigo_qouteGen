import { useEffect, useState } from "react";
import { CarouselStyle } from "./Carousel.style";
import useFetch from "../../../../useFetch/useFetch"
const Carousel = () => {

  let [posCounter,setPosCounter] = useState(-1200)

  useEffect(()=>{

    setTimeout(()=>{

      posCounter<-1200?setPosCounter(0):setPosCounter(posCounter-300)
    },3000)


  },[posCounter])

  let {textArr,setTextArr}= useFetch("https://type.fit/api/quotes")


  return ( 
    <CarouselStyle>
      <div className="CarouselConatiner">

        <main className="CarouselConatiner__Slider" style={{left:posCounter}}>
          {textArr.map((obj)=>{
            return (
              <p className="CarouselConatiner__Slider--Quotes">
                  “{obj.text}”
              </p>
            )
          })}
        </main>

      </div>
    </CarouselStyle>
   );
}
 
export default Carousel;