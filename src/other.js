 


  import { useSelector } from "react-redux"
  function CheckData (){
     const mydata = useSelector(state =>state)
  return (
     <div>
        showdata{mydata.Name}

        </div>
  )

   
  }
   export default CheckData






//   import { useSelector } from "react-redux"
//   function Other(){
//      const mydata = useSelector((state =>state))
//   return (
//     <div>
//       Other Compoent <h2>{mydata.Name}</h2>
//     </div>

//   )



//   }
//    export default Other