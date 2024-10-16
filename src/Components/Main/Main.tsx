import React,{useState} from 'react';
import { TodoItem } from '../TodoList/TodoItem';
import { Note } from '../TodoList/Item';
import './Main.css';
import { ThemeContext } from '../Context/ContextNotes';


function Main() {
const [notes,setNotes]=useState<Note[]>([])

return (<div className="Main_Test-page">
            <div className="Main-Test-page-head">
               <h1>Список дел</h1>
            </div>
            <ThemeContext.Provider value={{notes,setNotes}}>
            <TodoItem/>
            </ThemeContext.Provider>
         </div>);
  }
  
export default Main;