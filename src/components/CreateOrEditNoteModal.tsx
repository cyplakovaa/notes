import React from 'react';
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField} from "@mui/material";
import '../App.css'
import styled from "@emotion/styled";
import {ReactComponent as CloseIcon} from "../icons/close.svg";

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
    return (
        <CustomizedDialog open={props.visible} onClose={props.onClose}>
            <CloseIcon className='modal_close-icon' />
            <div className='modal__content-wrapper'>
                <h2 className='modal__title'>
                    Добавить заметку
                </h2>
            </div>

        </CustomizedDialog>
    );
};