import React, { useState, useRef,ChangeEvent } from "react";
import Todo from "./Todo/Todo";
import uuid from "react-uuid";
import { NoteContextType } from './Item';
import { ThemeContext } from "../Context/ContextNotes";
import './TodoItem.css';


export function TodoItem() {
const{notes,setNotes}=React.useContext(ThemeContext) as NoteContextType
const ref=useRef<any>(null);
const [value,setValue]=useState<string>('');
const [change,setChange]=useState<string>('all');


function ChangeInputHandler(e:ChangeEvent<HTMLInputElement>){
    setValue(e.target.value);
}
function DobavInputHandler(e: React.MouseEvent, value: string){
    if(value!==''){
    const newNote = {id: uuid(),value: value,checked:false,flag:false};
    setNotes([...notes, newNote]);
    ref.current.value=''
    setValue('')}
}
const ChangingPages = (e: React.MouseEvent, mood: string) => {
    e.preventDefault();
    setChange(mood);
}


return   (<div className="Main-Test-page-body">
                <div className="Main-Test-page-body-input">
                    <input ref={ref} onChange={ChangeInputHandler} className="Main-Test-page-body-input-text" />
                    <button onClick={(e)=>DobavInputHandler(e,value)} className="Main-Test-page-body-input-button">+</button>
                </div>
                <div className="Main-Test-page-body-options">
                <div className="ChangingPages">
                    <button onClick={(e)=>ChangingPages(e,'all')} className="ChangingPagesAll">ALL</button> 
                    <button onClick={(e)=>ChangingPages(e,'nezav')} className="ChangingPagesNez">UNFINISHED</button> 
                    <button onClick={(e)=>ChangingPages(e,'zav')} className="ChangingPagesZav">FINISHED</button> 
                </div>
            </div>
            <div className="Main-Test-page-body-list">
                <Todo change={change}/>
            </div>
          </div>)}
