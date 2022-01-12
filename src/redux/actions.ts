import {NoteModel, NotesActionTypes} from "./types";

export const ADD_NOTE = "ADD_NOTE";
export const EDIT_NOTE = "EDIT_NOTE";
export const DELETE_NOTE = "DELETE_NOTE";


export const addNote = (value: NoteModel): NotesActionTypes => ({
    type: ADD_NOTE,
    noteInfo: value
});

export const editNote = (value: NoteModel): NotesActionTypes => ({
    type: EDIT_NOTE,
    noteInfo: value,
});

export const deleteNote = (id: number): NotesActionTypes => ({
    type: DELETE_NOTE,
    id
});