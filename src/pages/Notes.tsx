import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {CustomButton} from "../components/CustomButton";
import {ReactComponent as AddIcon} from "../icons/add.svg";
import {NoteModel, RootState} from "../redux/types";
import {useSelector} from "react-redux";
import {CreateOrEditNoteModal} from "../components/CreateOrEditNoteModal";

export const Notes = () => {
    const notes = useSelector<RootState, NoteModel[]>(state => state.noteItems)

    const [openCreateModal, setOpenCreateModal] = useState(false);

    const handleClickOpen = () => {
        setOpenCreateModal(true);
    };

    const handleClose = () => {
        setOpenCreateModal(false);
    };


    return (
        <>
            <div className='notes__header-layout'>
                <h1 className='notes__title'>
                    Заметки
                </h1>
                <CustomButton onClick={handleClickOpen} startIcon={<AddIcon />} title='Добавить заметку'/>
            </div>
            <div className='notes__notes-layout'>
                {notes &&
                    notes.map(note => (
                        <Link key={note.id} to={'/note/' + note.id} className='link__reset'>
                            <div className='notes__card-layout'>
                                <h3 className='notes__card-title'>
                                    {note.title}
                                </h3>
                                <h6 className='notes__card-subtitle'>
                                    {note.subTitle}
                                </h6>
                            </div>
                        </Link>
                    ))
                }
            </div>
            <CreateOrEditNoteModal visible={openCreateModal} onClose={handleClose} />
        </>

    );
};