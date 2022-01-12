import { ADD_NOTE, EDIT_NOTE, DELETE_NOTE } from "./actions";
import rootReducer from "./rootReducer";

export interface AddNoteAction {
    type: typeof ADD_NOTE;
    noteInfo: NoteModel
}

export interface EditNoteAction {
    type: typeof EDIT_NOTE;
    noteInfo: NoteModel

}

export interface DeleteNoteAction {
    type: typeof DELETE_NOTE;
    id: number;
}


export interface NoteModel {
    id: number,
    title: string,
    comment: string,
    subTitle: string
}

export type NotesActionTypes = AddNoteAction | EditNoteAction | DeleteNoteAction;

export type RootState = ReturnType<typeof rootReducer>;