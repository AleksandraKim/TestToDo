import React,{FC,ChangeEvent} from 'react';
import { Note,NoteContextType } from '../Item';
import { ThemeContext } from "../../Context/ContextNotes";
import './ItemNote.css'

interface TodoProps{
    note:Note;
}
   
let ItemNote: FC<TodoProps>=({note})=>{
const{notes,setNotes}=React.useContext(ThemeContext) as NoteContextType;

function DeleteNote(e: React.MouseEvent, id: string){
  setNotes(notes.filter(elem => elem.id !== id))
}
function ChangeNote(e: React.MouseEvent, id: string){
    setNotes(notes.map(elem=>{
        if(elem.id===id){
        elem.flag=!elem.flag;
        }
        return elem
        }))
}
function DobavNote(e: React.MouseEvent, id: string){
    setNotes(notes.map(elem=>{
        if(elem.id===id){
        elem.flag=!elem.flag;
        }
        return elem
        }))}
function ChangeChecking(e:React.ChangeEvent<HTMLInputElement>, id: string){
    setNotes(notes.map(elem=>{
        if(elem.id===id){
        elem.checked=!elem.checked;}
        return elem
        }))}
function ChangeInputHandlerValue(e:ChangeEvent<HTMLInputElement>,id:string){
    setNotes(notes.map(elem=>{
        if(elem.id===id){
        elem.value=e.target.value;
        }
        return elem
        }))}

return (<div key={note.id} className="Main-Test-page-body-list-item">
        {note.flag?
                    <div className="Main-Test-page-body-list-item-change">
                       <input className="Main-Test-page-body-list-item-input" 
                              onChange={(e) => ChangeInputHandlerValue(e,note.id)} 
                              value={note.value}/>
                        <button onClick={(e) => DobavNote(e,note.id)} 
                                className="Main-Test-page-body-list-item-button">✓</button>
                    </div>
                    :
                    <div className="Main-Test-page-body-list-item-text">
                        <input type="checkbox" 
                               checked={note.checked} 
                               onChange={(e) => ChangeChecking(e,note.id)}/>
                        <label style={note.checked?
                            {textDecoration:'line-through'}
                            :
                            {textDecoration:'none'}} 
                            className="Main-Test-page-body-list-item-label">{note.value}</label>
                        <button onClick={(e) => DeleteNote(e,note.id)} 
                                className="Main-Test-page-body-list-item-button-delete">x</button>
                        <button onClick={(e) => ChangeNote(e,note.id)}
                                className="Main-Test-page-body-list-item-button-create">🖉</button>
                    </div>}</div>)}

export default ItemNote;