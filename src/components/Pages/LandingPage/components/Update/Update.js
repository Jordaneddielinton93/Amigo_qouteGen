import { collection, getDocs,addDoc } from 'firebase/firestore/lite';
import { useEffect, useRef, useState } from "react";
import { db } from '../../../../Firebase/Firebase';
import { UpdateStyled } from "./Update.style";

const Update = () => {

  const collections = collection(db, "qoutes");

  let [data,setdata]=useState([{qoutes:["Success Drives",<br/>, "Transformation"]}])

  let [updateDb,setUpdateDb] = useState(0)
  useEffect(()=>{
    async function getListOfQouteS() {
      const response = await getDocs(collections);
      
      setdata(response.docs.map((data)=>{
  
        return {...data.data(),id:data.id}
      }))
    }
    getListOfQouteS()
  },[updateDb])



  
  let newQuoteValue = useRef()

  let [showUserTheError,setShowUserTheError] = useState("none")

  async function AddNewQuote(){

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

          <h4 className="updateArea__Left--SubTitle">Why not check the Api Quotes page too on the navbar</h4>


          <div className="updateArea__Left__container">

            <p style={{display:showUserTheError}}
            >length has to be longer then 3 characters</p>

            <input ref={newQuoteValue}
            placeholder="Type more then 3 characters and then refresh"
            className="updateArea__Left__container--input"
            type="text" />

            <button onClick={AddNewQuote}
            className="updateArea__Left__container--buttom"
            >Add New Qoute</button>

          </div>
        

        </section>

        
        <section className="updateArea__Right">
          <aside className="updateArea__Right__Container">
            <ul className="updateArea__Right__Container__Ulist">
              {data.map((list)=>{
                return <li id={list.id}  className="updateArea__Right__Container__Ulist--Litem">
                  <q>{list.qoutes}</q>
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