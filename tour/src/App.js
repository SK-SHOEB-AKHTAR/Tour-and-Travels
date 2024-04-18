
import './App.css';
import data from './Data'
import Tour from './components/Tour'
import {useState}from 'react'

function App() {
  const[tours,setTours]=useState(data);

  if(tours.length===0){
    return(
      <div className='refresh'><h1>No More Place Left</h1>
      <button className='btn-white' onClick={()=>setTours(data)}>
        Refresh</button>
      </div>
    )
  }

  function removetour(id){
    const newTours = tours.filter(tour=>tour.id !== id);
    setTours(newTours)

  }
  return (
    <div className='App'>
      
      <Tour tours={tours} removetour={removetour}/>
      
    
    </div> 
  );
}

export default App;
