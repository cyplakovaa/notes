import React from 'react';
import '../App.css'
import {ReactComponent as BackArrowIcon} from "../icons/back_arrow.svg";
import {ReactComponent as EditIcon} from "../icons/edit.svg";
import {CustomButton} from "../components/CustomButton";
import {Divider} from "@mui/material";
import {useNavigate} from "react-router-dom";


export const NoteInfo: React.FC = () => {

    const navigate = useNavigate()

    const backNavigate = () => {
        navigate(-1)
    }

    return (
        <div className='note-info__wrapper'>
            <BackArrowIcon onClick={backNavigate} className='note-info__back-arrow-layout'/>
            <div className='note-info__title-layout'>
                <h1 className='notes__title'>
                    Длинный заголовок заметки номер 4
                </h1>
                <CustomButton onClick={() => {}} startIcon={<EditIcon />} title='Править заметку'/>
            </div>
            <div className='notes__user-comment'>
                Комментарий пользователя к заметке
            </div>
            <div className='notes__created-date'>
                01 января 2021
            </div>
            <Divider color='#EDEEF2' />
        </div>
    );
};