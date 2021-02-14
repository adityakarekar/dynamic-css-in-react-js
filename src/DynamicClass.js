import './Aditya.css';
import React, {useState} from  'react';

function DynamicClass() {

 const[myCondition,ChangeCondition]=useState(false);


const ToggleFunc=()=>
{

    ChangeCondition(!myCondition);
}
 let myclass=[];
 let myScreen='';
 if(myCondition)
 {
     myScreen=(
         <div className="myDiv">
             <h1> This is MY DIV </h1>
    
         </div>
        
        
     );
     myclass.push('green');
     myclass.push('my-align');
 }

 else 
 {
    myclass.push('red');
    myclass.push('my-align');
 }


  return(
<div>


<button onClick={ToggleFunc} className={myclass.join(' ')}> Toggle </button>

{myScreen}
</div>


  );

}

export default DynamicClass;
