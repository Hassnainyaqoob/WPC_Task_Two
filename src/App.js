import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import SMinputs from './components/inputs';

function App() {

  const [first, setFirst] = useState("")


  useEffect(() => {
    console.log("useEfeectt runing");
    axios.get("https://jsonplaceholder.typicode.com/todos/200").then((response) => {
      // setFirst(response.data.title)
      console.log(response.data);
      // var explain = 
      if (first == response.data.title) {
        // setFirst(explain)
        // console.log("explainnnnn==========>", explain);
        console.log("matchhhhhhhhhhhhhh");
        console.log(first);
      } else {
        console.log("nooo matcccchhhhh");
      }

    }).catch((err) => {
      console.log(err);
    })
    // console.log(first);

  }, [first])




  return (
    <div className="App">
      <SMinputs placeholder="Search Name" onChange={(e) => { setFirst(e.target.value) }} />
      <p>{first}</p>

    </div>
  );
}

export default App;
