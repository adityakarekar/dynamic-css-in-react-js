function Person1(props)
{
return(

    <div>
    <h1> Welcome {props.my_name}</h1>

    <button onClick={props.PersonButton}>
        Click here
    </button>
    </div>
);

}
 export default Person1;