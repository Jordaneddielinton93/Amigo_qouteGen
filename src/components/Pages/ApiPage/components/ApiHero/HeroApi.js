
import { useRef, useState } from "react";
import useFetch from "../../../../useFetch/useFetch";
import { HeroApiStyled } from "./HeroApi.style";

const HeroApi = () => {

// Followw the number structure starting at 0 

// 0️⃣ get the api call on render with custom hook re-useable
  let {textArr,setTextArr}=useFetch("https://type.fit/api/quotes")

  // deleted the item based of its index in the list
  function deleteClickedItem(indexDeleted){
    let newArr = textArr.filter((item,index)=>{
      return index===indexDeleted?null:item
    })
    setTextArr(newArr)
  }


// show an error message if the text is lower then 3 char
  let [showErrorMessage,setErrorMessage] = useState(false)
  let UsersQoute = useRef()

  function addNewQote(){
    // Check if the input is less then 3 if less then 3 tell the user with err msg2️⃣
    if(UsersQoute.current.value<3){
      setErrorMessage(true)
    }else{
      // else reset Error msg and add new quote to Api list from useRef Amigo2️⃣
      setTextArr([
        {author:"Amigo",text:UsersQoute.current.value},
        ...textArr
      ]) 
      UsersQoute.current.value=""
      setErrorMessage(false)
    }
  }


  return ( 
    <HeroApiStyled>
      <main className="HeroApi">
        <section className="HeroApi__left">
          
          <h1 >Add your own Quote</h1>

          <div className="HeroApi__left--inputContainer">
            {/* if error with length show the error message else dont */}
            <p style={{display:showErrorMessage?"flex":"none"}}>
              Please type a character longer then 3 characters
            </p>
            <input className="HeroApi__left--inputContainer--Uinput"
             type="text" ref={UsersQoute} placeholder="Type your quote here" style={{textAlign:"center"}}/>
          </div>

          <button className="HeroApi__left__container--button"
           onClick={addNewQote}>Add Quote</button>
        {/* Call the Add new qoute function 1️⃣ */}

     
        </section>
        <section className="HeroApi__right">

          <ul className="HeroApi__right__List">
            {/* mapp through the items set from the api call 1️⃣ */}
            {textArr.map((text,index)=>{
             
              return index<10?(
                <li key={index}
                className="APIqoute">
                  <div>
                    <q>{text.text}</q>
                    <h3>{text.author}</h3>
                    <button className="APIqouteBtn"
                    onClick={()=>deleteClickedItem(index)}>
                      Delete
                    </button>
                  </div>
                  
                </li>
              ):null
            })}
          </ul>

        </section>
      </main>
    </HeroApiStyled>
   );
}
 
export default HeroApi;