import { useEffect, useState } from "react";

const useFetch = (url) => {

  // if the url changes then call the fetch
  let [textArr,setTextArr]= useState([])

  async function getQuoteApi(){
    let response = await fetch(url)
    let data = await response.json()
    
    let smallerDataApiResult = data.filter((item,index)=>index<10)
    // limit the result from 3600 texts obj to just 10 so user can add their own1️⃣
    setTextArr(smallerDataApiResult)
    // set the useState to the limited Result 2️⃣
  }

  useEffect(()=>{
    // 0️⃣ call the api on inistial render
    getQuoteApi()
  },[url])

  return {textArr,setTextArr};
}
 
export default useFetch;