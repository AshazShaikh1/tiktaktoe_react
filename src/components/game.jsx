import './css/game.css';
import { useState } from "react";
import Block from "./block";
function win(state){
  const winning = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]

  for(let i = 0;i<winning.length;i++){
    const [a,b,c] = winning[i];
    if(state[a]!==null && state[a]===state[b] && state[b] === state[c])return true;
  }
return false;
}
function Game(){
  const [state,setState] = useState([null,null,null,null,null,null,null,null,null]);
  const [currentTurn,setTurn] = useState("X");
  const handleclick = (index) =>{
    if(state[index] !== null)return;
  //setting state
    state[index] = currentTurn;
    //changing state
    setState(state);
    
  //set turns
  setTimeout(()=>{
    if(win(state)){
      alert(`${currentTurn} win`);
    }
    if(win(state)===false && !state.some(el=>el===null)){
      alert("Draw");
    }
  },500);
  
  
  setTurn(currentTurn==="X" ? "O" : "X")
  }
  return (
    <div className='board'> 
      <div className='row'>
      <Block handleclick={()=>handleclick(0)} value={state[0]}/>
      <Block handleclick={()=>handleclick(1)} value={state[1]} />
      <Block handleclick={()=>handleclick(2)} value={state[2]}/>
      </div>
      <div className='row'>
        <Block handleclick={()=>handleclick(3)} value={state[3]}/>
        <Block handleclick={()=>handleclick(4)} value={state[4]}/>
        <Block handleclick={()=>handleclick(5)} value={state[5]}/>

      </div>
      <div className='row'>
      <Block handleclick={()=>handleclick(6)} value={state[6]}/>
        <Block handleclick={()=>handleclick(7)} value={state[7]}/>
        <Block handleclick={()=>handleclick(8)} value={state[8]}/>
      </div>
    </div>
  );
}

export default Game;