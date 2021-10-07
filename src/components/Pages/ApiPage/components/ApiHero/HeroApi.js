
import { useEffect, useRef, useState } from "react";
import { HeroApiStyled } from "./HeroApi.style";

const HeroApi = () => {

//  use Api to set the qoutes
  let [textArr,setTextArr]= useState([])

  async function getQuoteApi(){
    let response = await fetch("https://type.fit/api/quotes")
    let data = await response.json()
    
    let smallerData = data.map((item,index)=>index<10?item:false)
    setTextArr(smallerData)
  }

  useEffect(()=>{
    getQuoteApi()
    // useEffect to call on inistial render
  },[])


  // deleted the itex based of its index in the list
  function deleteClicked(indexDeleted){
    let newArr = textArr.filter((item,index)=>{
      return index===indexDeleted?null:item
    })
    setTextArr(newArr)
  }


// show an error message if the text is lower then 3 char
  let [showErrorMessage,setErrorMessage] = useState(false)
  let UsersQoute = useRef()
  function addNewQote(){
    if(UsersQoute.current.value<3){
      setErrorMessage(true)
    }else{
      setTextArr([
        {author:"username",text:UsersQoute.current.value},
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

          <div>
            <p style={{display:showErrorMessage?"flex":"none"}}>
              Please type a character longer then 3 characters
            </p>
            <input 
             type="text" ref={UsersQoute} />
          </div>

          <button className="HeroApi__left__container--button"
           onClick={addNewQote}>Add Quote</button>



        </section>
        <section className="HeroApi__right">

          <ul className="HeroApi__right__List">
            {textArr.map((text,index)=>{
             
              return index<10?(
                <li key={index}
                className="APIqoute">
                  <div>
                    <q>{text.text}</q>
                    <h3>{text.author}</h3>
                    <button className="APIqouteBtn"
                    onClick={()=>deleteClicked(index)}>
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