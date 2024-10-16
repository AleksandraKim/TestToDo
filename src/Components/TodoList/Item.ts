export interface Note {
    id: string;
    value: string;
    checked:boolean;
    flag:boolean;
  }
  export type NoteContextType = {
    notes:Note[]
    setNotes:(value:Note[])=>void;
  };