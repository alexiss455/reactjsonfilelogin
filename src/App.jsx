import React, { useState } from "react";
import "./App.css";
import Loginuser from "./assets/HelloUser";
import Userlog from "./assets/Login";
import reqUser from "./Iflogin";
import cars from "./Cardetail";


const [honda, tesla ] = cars

console.log(honda.speedStats.topSpeed)
console.log(honda.speedStats.zeroToSixty)
console.log(honda.coloursByPopularity[2].goodcolors[0])

console.log(tesla.speedStats.topSpeed)
console.log(tesla.speedStats.zeroToSixty)
console.log(tesla.coloursByPopularity[2].goodcolors[0])


var TextisLine = true;
const sytle = { textDecoration: "line-through" };
function App() {
  
  const [count, setCount] = useState(0);
  function add() {
    return setCount(count + 1);
  }
  function minus() {
    return setCount(count - 1);
  }


  
  const [time, getTime] = useState("TIME")

  function newTime(){
    const currentTime1 = new Date().toLocaleTimeString();
    return( 
      getTime(currentTime1) 
    )
  }setInterval(newTime, 1000)
  
  return (
    <div className="App">
      {<Userlog isRegister={reqUser} />}

      <div>
        <h1>{count}</h1>
        <button onClick={minus}>
          <h1>-</h1>
        </button>
        <button onClick={add}>
          <h1>+</h1>
        </button>
      </div>


      <div>
        <h1>
          {time}
        </h1>
        <button onClick={newTime}><h1>Get Time</h1></button>
      </div>


      <div className="cars">
      <table>
        <tr>
          <th>Brand</th>
          <th>Top speed</th>
          <th>Top colour</th>
        </tr>
        <tr>
          <td>{honda.model}</td>
          <td>{honda.speedStats.topSpeed[2]}</td>
          <td>{honda.coloursByPopularity[2].goodcolors[0]}</td>
        </tr>
        <tr>
          <td>{tesla.model}</td>
          <td>{tesla.speedStats.topSpeed[4]}</td>
          <td>{tesla.coloursByPopularity[2].goodcolors[0]}</td>
        </tr>
      </table>


      </div>

    </div>
  );
}

export default App;
