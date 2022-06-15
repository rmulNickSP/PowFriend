import './App.css';
import { useState } from "react";

function App() {
  const [numberinput, setNumberinput] = useState();
  const [result, setResult] = useState([]);

  const chkSum=(e)=> {
    if (e !== "") {
      let a = Math.random()*10
      let b = Math.random()*10
      console.log(Number(a),Number(b));
      let sum1 = Number(e) - 5.52
      let sum2 = Number(e)
      let sum3 = Number(e) + 5.52
      console.log("ค่าที่บวกก่อน : ",sum1,sum2,sum3);
      let sum = (sum1 + sum2 + sum3) / 3
      console.log("ค่าที่จะเท่ากับตัวรับ : ",sum);
      setResult([{ res1: sum1, res2: sum2, res3: sum3,res4:sum}])
    }
  }
//   let a = "15.15"
//   let b = "50.15"
//   let c = Number(a)+Number(b)
  
// console.log(typeof numberinput);
  return (
    <>
      <div className="container px-5">
        <h1>สูตรโกง</h1>
        <div className='row gx-5'>
        <form className="forminput">
          <div className="col">
            <input type="number" className="form-control" required onChange={(e) => { setNumberinput(e.target.value) }} />
            <button type="button" className="btn btn-primary mt-3" onClick={()=>chkSum(numberinput)}>Click</button>
          </div>
        </form>
        </div>
        {
          result.map((e, index) => (
            <div key={index}>
              <h4>ค่าตัวที่ 1 : {e.res1}</h4>
              <h4>ค่าตัวที่ 2 : {e.res2}</h4>
              <h4>ค่าตัวที่ 3 : {e.res3}</h4>
              <h4>ผลลัพธ์ : {e.res4}</h4>
            </div>
          ))}
      </div>
    </>
  );
}

export default App;
