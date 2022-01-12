import React from 'react';
import '../App.css'
import {ReactComponent as BackArrowIcon} from "../icons/back_arrow.svg";
import {ReactComponent as EditIcon} from "../icons/edit.svg";
import {CustomButton} from "../components/CustomButton";
import {Divider} from "@mui/material";
import {useNavigate, useParams} from "react-router-dom";
import {ReactComponent as DeleteIcon} from "../icons/delete.svg";
import {useDispatch, useSelector} from "react-redux";
import {NoteModel, RootState} from "../redux/types";
import {deleteNote} from "../redux/actions";


export const NoteInfo: React.FC = () => {

    const navigate = useNavigate()
    const params = useParams()
    const noteInfo = useSelector<RootState, NoteModel>(state => state.noteItems.filter(note => note.id === Number(params.noteId))[0])
    const dispatch = useDispatch()

    const backNavigate = () => {
        navigate(-1)
    }

    const onDeleteNote = (id: number) => {
        navigate(-1)
        dispatch(deleteNote(id))
    }

    return (
        <div className='note-info__wrapper'>
            <BackArrowIcon onClick={backNavigate} className='note-info__back-arrow-layout'/>
            <div className='note-info__title-layout'>
                <h1 className='notes__title'>
                    {noteInfo?.title}
                </h1>
                <CustomButton onClick={() => {}} startIcon={<EditIcon />} title='Править заметку'/>
            </div>
            <div className='notes__user-comment'>
                {noteInfo?.comment}
            </div>

            <div className='notes__subtitle-layout'>
                <div className='notes__created-date'>
                    {noteInfo?.subTitle}
                </div>
                <DeleteIcon onClick={() => onDeleteNote(noteInfo?.id)} className='note__delete-icon' />
            </div>
            <Divider color='#EDEEF2' />
        </div>
    );
};