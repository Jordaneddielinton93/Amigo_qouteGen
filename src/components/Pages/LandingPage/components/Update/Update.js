import { collection, getDocs,addDoc } from 'firebase/firestore/lite';
import { useEffect, useRef, useState } from "react";
import { db } from '../../../../Firebase/Firebase';
import { UpdateStyled } from "./Update.style";

const Update = () => {

  // 0️⃣1️⃣2️⃣3️⃣ follow  the numbers starting from 0





  const collections = collection(db, "qoutes");
// get documents from database
  let [data,setdata]=useState([{qoutes:["Success Drives",<br/>, "Transformation"]}])

  let [updateDb,setUpdateDb] = useState(0) // << updates the db when its statechanges


  // added both text data and its id to the use stateabove from the function below
  useEffect(()=>{
    async function getListOfQouteS() {
      const response = await getDocs(collections);
      
      setdata(response.docs.map((data)=>{
  
        return {...data.data(),id:data.id}
      }))
    }
    getListOfQouteS()
  },[updateDb])
// on render update the data useState with text and its id 0️⃣


  
  let newQuoteValue = useRef()
// get the state of the users input and let them know if its wrong
  let [showUserTheError,setShowUserTheError] = useState("none")

  async function AddNewQuote(){
    // if the value of the users input is smaller then 3 give error else add quote to db 3️⃣
    if(newQuoteValue.current.value.length<3){
      setShowUserTheError("flex")
    }else{
      setShowUserTheError("none")
      await addDoc(collections, {qoutes:newQuoteValue.current.value})
      newQuoteValue.current.value=""
      setUpdateDb(updateDb+1)
    }


  }


  return ( 
    <UpdateStyled>
      <div className="updateArea">
        <section className="updateArea__Left">

          <h4 className="updateArea__Left--SubTitle">Why Not Add your own Quote?</h4>

          <h1 className="updateArea__Left--Title">The way that Quotes change is <span className="span">
              <span className="changing">changing </span> 
              <span className="greenline"></span>
           </span> 
           
          </h1>

          <h4 className="updateArea__Left--SubTitle">Why not check the Api Quotes page too on the navbar that using Fetch & Aync Await</h4>


          <div className="updateArea__Left__container">

            <p style={{display:showUserTheError}}
            >length has to be longer then 3 characters</p>

            <input ref={newQuoteValue}
            placeholder="Type more then 3 characters and then refresh"
            className="updateArea__Left__container--input"
            type="text" />
            {/* added a new quote by getting input ref state and updating the db with updateDb usestate 2️⃣ */}
            <button data-testid="callnewQuote"
             onClick={AddNewQuote}
            className="updateArea__Left__container--buttom"
            >Add New Qoute</button>

          </div>
        

        </section>

          {/* right side of screen show list from database 1️⃣*/}
        <section className="updateArea__Right">
          <aside className="updateArea__Right__Container">
            <ul className="updateArea__Right__Container__Ulist">
              {data.map((list,index)=>{
                return <li id={list.id} data-testid="listItem10" className="updateArea__Right__Container__Ulist--Litem">
                  <q id={`${index}`}>{list.qoutes}</q>
                  </li>
              })}
            </ul>
          </aside>
        </section>

      </div>
    </UpdateStyled>
   );
}
 
export default Update;