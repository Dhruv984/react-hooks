 import React, {useReducer} from 'react'
 const reducer=(state,action)=>{
   switch(action.type){
     case 'increment':
     return {count:state.count+1};
     case 'decrement':
     return {count:state.count-1};
     case 'reset':
     return {count:0};
     default:
     return state;
   }   
 }
 function App() {
   const [state, dispatch]=useReducer(reducer,{count:0})
   const incrementCounter=()=>{
     dispatch({type:'increment'})
   }
   const decrementCounter=()=>{
     dispatch({type:'decrement'})
   }
   const resetCounter=()=>{
     dispatch({type:'reset'})
   }
   return (
     <div>
       <div>{state.count}</div>
       <button onClick={incrementCounter}>increment</button>
       <button onClick={decrementCounter}t>decrement</button>
       <button onClick={resetCounter}>reset</button>
     </div>
   )
 }
 
 export default App
 