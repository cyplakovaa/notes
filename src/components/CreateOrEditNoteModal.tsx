import React from 'react';
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField} from "@mui/material";
import '../App.css'
import styled from "@emotion/styled";
import {ReactComponent as CloseIcon} from "../icons/close.svg";
import {Controller, useForm} from "react-hook-form";
import {CustomTextField} from "./CustomTextFild";
import {ReactComponent as AddIcon} from "../icons/add.svg";
import {CustomButton} from "./CustomButton";
import {NoteModel} from "../redux/types";
import {useDispatch} from "react-redux";
import {addNote} from "../redux/actions";

interface CreateOrEditNoteModalProps {
    visible: boolean
    onClose: () => void
}

const CustomizedDialog = styled(Dialog)(() => ({
    '& .MuiPaper-root': {
        padding: '25px 65px 40px',
        minWidth: 470
    }
}));

const defaultFormValues = {
    title: '',
    comment: ''
}

export const CreateOrEditNoteModal: React.FC<CreateOrEditNoteModalProps> = (props) => {

    const { control, handleSubmit } = useForm({defaultValues: defaultFormValues});

    const dispatch = useDispatch()


    const onSubmit = (data: typeof defaultFormValues) => {

        const timeElapsed = Date.now();
        const today = new Date(timeElapsed);

        const noteItem: NoteModel = {
            id: Math.floor(Math.random() * 160000),
            title: data.title,
            comment: data.comment,
            subTitle: today.toDateString()
        }

        dispatch(addNote(noteItem))
        props.onClose()
    };

    return (
        <CustomizedDialog open={props.visible} onClose={props.onClose}>
            <CloseIcon onClick={props.onClose} className='modal_close-icon' />
            <div className='modal__content-wrapper'>
                <h2 className='modal__title'>
                    Добавить заметку
                </h2>
                <form className='form__layout' onSubmit={handleSubmit(onSubmit)}>
                    <Controller
                        name="title"
                        control={control}

                        render={({ field }) => <CustomTextField {...field} label='Название заметки' placeholder='Введите заголовок заметки' />}
                    />
                    <Controller
                        name="comment"
                        control={control}
                        render={({ field }) => <CustomTextField {...field} multiline rows={3} label='Комментарий' placeholder='Введите комментарий' />}
                    />

                    <CustomButton type='submit' title='Добавить' centered/>
                </form>
            </div>

        </CustomizedDialog>
    );
};