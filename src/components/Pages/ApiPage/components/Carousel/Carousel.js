import { useEffect, useState } from "react";
import { CarouselStyle } from "./Carousel.style";

const Carousel = () => {

  let [posCounter,setPosCounter] = useState(1200)

  useEffect(()=>{

    setTimeout(()=>{

      posCounter<-1200?setPosCounter(0):setPosCounter(posCounter-300)
    },3000)


  },[posCounter])



  return ( 
    <CarouselStyle>
      <div className="CarouselConatiner">

        <main className="CarouselConatiner__Slider" style={{left:posCounter}}>
          <p className="CarouselConatiner__Slider--Quotes">
          “Ever tried. ...”
          </p>
          <p className="CarouselConatiner__Slider--Quotes">
          “Only I can change my life. ..”
          </p>
          <p className="CarouselConatiner__Slider--Quotes">
          “Start where you are. ...”
          </p>
          <p className="CarouselConatiner__Slider--Quotes">
          “If you can dream it <br />, you can do it”
          </p>
          <p className="CarouselConatiner__Slider--Quotes">
          “The purpose of our lives is to be happy.”
          </p>
          <p className="CarouselConatiner__Slider--Quotes">
          “Life is what happens when you’re busy making other plans.”
          </p>
          <p className="CarouselConatiner__Slider--Quotes">
          “You only live once, but if you do it right, once is enough.”
          </p>
          <p className="CarouselConatiner__Slider--Quotes">
          “Many of life’s failures are people who did not realize how close they were to success when they gave up.”
          </p>
          <p className="CarouselConatiner__Slider--Quotes">
          “Money and success don’t change people; they merely amplify what is already there.”
          </p>
          

        </main>

      </div>
    </CarouselStyle>
   );
}
 
export default Carousel;