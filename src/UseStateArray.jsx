import React, { useState } from 'react'


const UseStateArray =() =>{

    const bioData = [
        {
        id:0, name:'Adarsh', age:21
    },{
        id:1, name:'Ranjna', age:24
    },{
        id:2, name:'Abhishek', age:21
    },
]

 const [myArray, setMyArray] = useState(bioData);
 const clearArray = () =>{
     setMyArray([])
 }

 const removeElem =(id) =>{
    const meNewArray = myArray.filter((curElem)=>{
        return curElem.id !== id;
    })
setMyArray(meNewArray)}

 
 
    return(
        <>
        {
            myArray.map((curElem)=> {
                return(
                <h1 className="h1style">Name:  {curElem.name} and 
                    age : {curElem.age}
                    <button className="btnInner" onClick={ ()=>removeElem(curElem.id)}>  remove </button>
                </h1>
                
             ) })
        }

        <button className="btn" onClick = {clearArray} > Click</button>
        </>
    )
}

export default UseStateArray