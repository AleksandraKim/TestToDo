import React,{FC,useState,ChangeEvent} from 'react';
import {NoteContextType } from '../Item';
import { ThemeContext } from "../../Context/ContextNotes";
import ItemNote from '../ItemNote/ItemNote';

interface TodoProps{
 change:string;
}

let Todo: FC<TodoProps>=({change})=>{
const{notes}=React.useContext(ThemeContext) as NoteContextType;

const res=notes.map(note=>{
            if(change==='all'){
                return <ItemNote note={note}/>}
            else if(change==='zav' && note.checked===true){
                return <ItemNote note={note}/>
            }else if(change==='nezav' && note.checked===false){
                return <ItemNote note={note}/>
            }
            })

return (<div>{res}</div>)
}

export default Todo;