import { useSelector } from "react-redux";
function CheckData() {
  const mydata = useSelector((state) => state);
  const mystyle = {
    color: "#16A085",
    padding: "10px",
    fontFamily: "Arial",
    fontSize: "25px",
    fontWeight: "700",
    textTransform: "uppercase",
  };
  return (
    <div>
      <h3>Show Data:</h3>
      <p style={mystyle}>{mydata.Name}</p>
    </div>
  );
}
export default CheckData;

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
