
import {BrowserRouter as Router} from "react-router-dom"
import Routess from './routes';
import { useEffect, useState } from 'react';
import RingLoader  from "react-spinners/RingLoader";

function App() {

  const [loading,setLoading] = useState(false)

  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{setLoading(false)},5000)
  },[])
  return (
   <div >
    { loading ?
    <div className='loading'>
      <RingLoader  color={"#04c0c7"} loading={loading}  size={150} />
    </div>
    :
    <Router>
      <Routess />
    </Router>}
   </div>
  );
}

export default App;
