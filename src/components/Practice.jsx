import { useState } from "react";
import React from "react";


function Practice()
{
    const [value, setValue] = useState(Array(9).fill('.....'));
    console.log(value);
    const OB = value.slice();

    const [check,setCheck] = useState(true);
    let val ;
    const ans = check ? val='X' : val ='O';
    const [current, setCurrent] = useState(0);
    function clickMe()
    {
        current >=8 && setCurrent(-1);
        value[current] = val;
        setCheck(!check);
        setCurrent((current) => current + 1);
    }
    const shoot = (a) =>{
        alert('shootout...' + a);
    }
    const [values, setName] = useState('');
    const [error, setError] = useState('ERORR');

    function handleChange(e)
    {
        const target = e.target ;
        const name = target.name ;
        const value = target.type === "checkbox" ? target.checked : target.value ;
        setName(values =>({...values,[name] : value}));
    }
    return (
        <>
            <p>Inserted Name : {values.first}  {values.last} {values.city} {values.gender} {values.development && "development"} {values.management && "management"} {values.testing && "testing"}</p>
            <p>{error}</p>
            <h1>heloo {OB}</h1>
            <h3>Check {ans}</h3>
            <button onClick={clickMe}>{val}</button> <br />
            <button onClick={()=>shoot('heee!')}> Shoot</button>

            {/* <h1>{squares}</h1> */}

            <form action="">
               Enter First Name <input type="text" name="first" id="first" onChange={handleChange} /> <br />
               Enter Last  Name <input type="text" name="last" id="last" onChange={handleChange} /> <br />
               Select City <select name= "city" onChange={handleChange}>
                    <option value="Surat">Surat</option>
                    <option value="Vapi">Vapi</option>
                    <option value="Navsari">Navsari</option>
                    <option value="Ahmedabad">Ahmedabad</option>
               </select> <br />
               Select Gender 
               <input type="radio" name="gender" id="male" value="male " onChange={handleChange}/> Male 
               <input type="radio" name="gender" id="female" value="female " onChange={handleChange}/> Female 
               <input type="radio" name="gender" id="other" value="other " onChange={handleChange}/> Other  <br />

               Select Interest 
               <input type="checkbox" name="development" id="development" value="development" onChange={handleChange} />Development
               <input type="checkbox" name="management" id="management" value="management" onChange={handleChange} /> Management
               <input type="checkbox" name="testing" id="testing" value="testing" onChange={handleChange} /> Testing 
            </form>
        </>
    )
}   

export default Practice;