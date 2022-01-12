import { ADD_NOTE, EDIT_NOTE, DELETE_NOTE } from "./actions";
import { NotesActionTypes, NoteModel } from "./types";

const initialState: NoteModel[] = [
    {
        id: 1,
        title: 'Длинный заголовок заметки номер 1',
        comment: 'Комментарий к заявке',
        subTitle: '01 января 2021'
    },
    {
        id: 2,
        title: 'Длинный заголовок заметки номер 2',
        comment: 'Комментарий к заявке',
        subTitle: '01 января 2021'
    },
    {
        id: 3,
        title: 'Длинный заголовок заметки номер 3',
        comment: 'Комментарий к заявке',
        subTitle: '01 января 2021'
    },
    {
        id: 4,
        title: 'Длинный заголовок заметки номер 4',
        comment: 'Комментарий к заявке',
        subTitle: '01 января 2021'
    },
    {
        id: 5,
        title: 'Длинный заголовок заметки номер 5',
        comment: 'Комментарий к заявке',
        subTitle: '01 января 2021'
    },
    {
        id: 6,
        title: 'Длинный заголовок заметки номер 6',
        comment: 'Комментарий к заявке',
        subTitle: '01 января 2021'
    },
    {
        id: 7,
        title: 'Длинный заголовок заметки номер 7',
        comment: 'Комментарий к заявке',
        subTitle: '01 января 2021'
    },
    {
        id: 8,
        title: 'Длинный заголовок заметки номер 8',
        comment: 'Комментарий к заявке',
        subTitle: '01 января 2021'
    }
];

const NoteItems = (
    state: NoteModel[] = initialState,
    action: NotesActionTypes
): NoteModel[] => {
    switch (action.type) {
        case ADD_NOTE:
            return [
                ...state,
                {...action.noteInfo },
            ];
        case EDIT_NOTE:
            return state.map((note: NoteModel) =>
                note.id === action.noteInfo.id ? { ...action.noteInfo } : note
            );
        case DELETE_NOTE:
            return state.filter((note: NoteModel) =>
                note.id !== action.id
            );
    }
    return state;
};

export default NoteItems;