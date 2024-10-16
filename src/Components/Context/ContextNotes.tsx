import { createContext}  from "react"
import {Note,NoteContextType} from '../TodoList/Item'


export const ThemeContext = createContext<NoteContextType|null>(null);

