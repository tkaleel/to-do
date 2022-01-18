import React, { useState } from 'react';
import './App.css';
import ToDo from './components/ToDo';


function App() {
  const [newToDo, setNewToDo] = useState("");
  const [toDos, setToDos] = useState([]);



  const handleNewToDoSubmit = (e) => {
    e.preventDefault();

    if(newToDo.length === 0){
      return;
    }

    const toDoItem = {
      text: newToDo,
      complete: false
    }

    setToDos([...toDos, toDoItem]);
    setNewToDo("");
  };

  const handleDelete = (delIndex) => {
    const filteredToDos = toDos.filter((_toDo, i) => {
      return i !== delIndex;
    });

    setToDos(filteredToDos);
  }

  const handleComplete = (idx) => {
    const updatedToDos = toDos.map((toDo, i) => {
      if (idx === i){
        toDo.complete = !toDo.complete;

        //Above OR Below; Below avoids mutating toDo state directly
        // const updatedToDo = { ...toDo, complete: !toDo.complete};
        //return updatedToDo
      }
      return toDo;
    });
    setToDos(updatedToDos);
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>To-Do List</h1>
      <form onSubmit={(e) => { handleNewToDoSubmit(e) }}>
        <input type="text" value={newToDo} onChange={(e) => { setNewToDo(e.target.value) }} />
        
        <div >
          <button>Add</button>
        </div>
      </form>
      <hr />
      {toDos.map((toDo, i) => {
      
        return (
          <ToDo key= {i} toDo={toDo} handleComplete={handleComplete} handleDelete={handleDelete} i={i}/>
        );
      })}

    </div>
  );
}

export default App;
