// UserDataForm.js

import { useState } from "react"

// import React, { useState } from 'react';
// import { useDispatch,useSelector } from 'react-redux';
// import { setUserData } from './store/reducers/userslice';
//  import Showdata from './showdata';
// const UserDataForm = () => {
//   const dispatch = useDispatch();
//   const [name, setName] = useState('');
//   const [fatherName, setFatherName] = useState('');
//   const [profession, setProfession] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(setUserData({ name, fatherName, profession }));
//   };
  

//   return (
//      <>
//     <form onSubmit={handleSubmit}>
//       <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
//       <input type="text" value={fatherName} onChange={(e) => setFatherName(e.target.value)} placeholder="Father Name" />
//       <input type="text" value={profession} onChange={(e) => setProfession(e.target.value)} placeholder="Profession" />
//       <button type="submit">Save</button>
       
//     </form>
//   <Showdata/>


//       </>
//   );
// };

// export default UserDataForm;






 import { ATM_PIN } from "./store2/actyionType";
  import { useDispatch } from "react-redux";

 function SendData (){

   const[Name,setName]= useState('');
  const dispatch =useDispatch()
   const updateName =(e)=>{
    e.preventDefault()
    setName(e.target.value)

   } 
   const  getData=(e)=>{
    alert("asdf")
    // it avoid to reloading your page
     dispatch(
      {
      type:ATM_PIN,
      payload:{Name}


      }
     )


   }


 return(
  <div>

 <input onChange={updateName}/>
  <button onClick={getData}>senddata</button>



  </div>

 )


 }
 export default SendData


























// Counter.js
//  import { useState } from "react";
// import { useDispatch } from "react-redux";
// import  {INCREMENT_COUNTER} from './store/action/actionType'
//  import Other from "./other";
// function Counter() {
//      const [Name,setName]=useState()

//   const dispatch = useDispatch();

//   const handleIncrement = () => {
//     dispatch({
//          type:INCREMENT_COUNTER,
//          payload:{Name}
//     });
//   };
   
//    const updatedName=(e)=>{
//      e.preventDefault();
//      setName(e.target.value)
      


//    }

//   return (
//     <div>
//     <Other/>

//        <input onChange={updatedName}/>
//       <button onClick={handleIncrement}>Increment com1</button>
//     </div>
//   );
// }

// export default Counter;
