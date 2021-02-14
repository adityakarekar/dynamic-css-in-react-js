
import React,{useState} from 'react';

function App()
{

const[my_condition,ChangeCondition]=useState(false);


const ToggleMyDivFunc=()=>
{
  let a='my_condition';
  ChangeCondition(!my_condition);
}

let style={

backgroundcolor:'red',
color:'white'
}



let myDesign='';


if(my_condition)
{ myDesign=(
  <div className="mainDiv">
    <h1>This is Div</h1>
  </div>
 );
 style.backgroundColor="green";
}
else
{
  style.backgroundColor="red";
}


return(
<div>

<button style={style} className="ToggleBTN" onClick={ToggleMyDivFunc}>  Toggle button </button>

{myDesign}
</div>


);

}

export default App;