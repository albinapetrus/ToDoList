
import './App.css';

import { IoMdAddCircle } from "react-icons/io";

import { ImBin } from "react-icons/im";

import { FaUndoAlt } from "react-icons/fa";

function App() {
  return (
    <div className="App">
      <header>
       
      <IoMdAddCircle className='add'/>
     
      <ImBin className='add'/>
      
      <FaUndoAlt className='add' />
      </header>
      <main>
    <h1>To do list:</h1>
    </main>
    <footer>
      <h2>Plan your day with TO DO LIST!</h2>
    </footer>
    </div>
   
  );
}

export default App;
