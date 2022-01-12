import React from 'react';
import '../App.css'
import {ReactComponent as BackArrowIcon} from "../icons/back_arrow.svg";
import {ReactComponent as EditIcon} from "../icons/edit.svg";
import {CustomButton} from "../components/CustomButton";
import {Divider} from "@mui/material";
import {useNavigate, useParams} from "react-router-dom";
import {ReactComponent as DeleteIcon} from "../icons/delete.svg";
import {useSelector} from "react-redux";
import {NoteModel, RootState} from "../redux/types";


export const NoteInfo: React.FC = () => {

    const navigate = useNavigate()
    const params = useParams()
    console.log(params)
    const noteInfo = useSelector<RootState, NoteModel>(state => state.noteItems.filter(note => note.id === Number(params.noteId))[0])

    const backNavigate = () => {
        navigate(-1)
    }

    return (
        <div className='note-info__wrapper'>
            <BackArrowIcon onClick={backNavigate} className='note-info__back-arrow-layout'/>
            <div className='note-info__title-layout'>
                <h1 className='notes__title'>
                    {noteInfo.title}
                </h1>
                <CustomButton onClick={() => {}} startIcon={<EditIcon />} title='Править заметку'/>
            </div>
            <div className='notes__user-comment'>
                {noteInfo.comment}
            </div>

            <div className='notes__subtitle-layout'>
                <div className='notes__created-date'>
                    {noteInfo.subTitle}
                </div>
                <DeleteIcon className='note__delete-icon' />
            </div>
            <Divider color='#EDEEF2' />
        </div>
    );
};