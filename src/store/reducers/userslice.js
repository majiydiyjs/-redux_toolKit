// userSlice.js

// import { createSlice } from '@reduxjs/toolkit';


// const initialState = {
//     name: '',
//     fatherName: '',
//     profession: ''
//   };
  

//   const userRedcuer= createSlice({
//    name :'user',
//     initialState,

//     reducers:{
//         setUserData:(state,action)=>{
//          const {name,fatherName,profession}=action.payload;
//            state.name=name;
//            state.fatherName=fatherName;
//            state.profession=profession

//         }

//     }
  


//   })
//  export const {setUserData}= userRedcuer.actions;
//   export default userRedcuer.reducer


// const initialState = {
//   name: '',
//   fatherName: '',
//   profession: '',
// };

// const userSlice = createSlice({
//   name: 'user',
//   initialState,
//   reducers: {
//     setUserData: (state, action) => {
//       const { name, fatherName, profession } = action.payload;
//       state.name = name;
//       state.fatherName = fatherName;
//       state.profession = profession;
//     },
//   },
// });

// export const { setUserData } = userSlice.actions;
// export default userSlice.reducer;













 import  {INCREMENT_COUNTER} from "../action/actionType"

  const initialState = {
    counter: 0,
  };
  
  const counterReducer = (state = initialState, action) => {
    switch (action.type) {
      case INCREMENT_COUNTER:
        return {
          ...state,
          counter: state.counter + 1,
           ... action.payload
        };
      default:
        return state;
    }
  };
  
  export default counterReducer;
  