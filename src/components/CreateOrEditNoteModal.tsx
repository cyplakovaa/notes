import React from 'react';
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField} from "@mui/material";
import '../App.css'
import styled from "@emotion/styled";
import {ReactComponent as CloseIcon} from "../icons/close.svg";
import {Controller, useForm} from "react-hook-form";
import {CustomTextField} from "./CustomTextFild";
import {ReactComponent as AddIcon} from "../icons/add.svg";
import {CustomButton} from "./CustomButton";

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


export const CreateOrEditNoteModal: React.FC<CreateOrEditNoteModalProps> = (props) => {

    const { control, handleSubmit } = useForm();
    const onSubmit = (data: any) => console.log(data);

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
                        defaultValue=""
                        render={({ field }) => <CustomTextField {...field} label='Название заметки' placeholder='Введите заголовок заметки' />}
                    />
                    <Controller
                        name="comment"
                        control={control}
                        defaultValue=""
                        render={({ field }) => <CustomTextField {...field} multiline rows={3} label='Комментарий' placeholder='Введите комментарий' />}
                    />
                    <CustomButton  onClick={() => {}} title='Добавить' centered/>
                </form>
            </div>

        </CustomizedDialog>
    );
};