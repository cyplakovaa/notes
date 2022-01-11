import React from 'react';
import {Link, Outlet} from 'react-router-dom';
import {CustomButton} from "../components/CustomButton";
import {ReactComponent as AddIcon} from "../icons/add.svg";

const notes = [
    {
        id: 1,
        title: 'Длинный заголовок заметки номер 1',
        subTitle: '01 января 2021'
    },
    {
        id: 2,
        title: 'Длинный заголовок заметки номер 2',
        subTitle: '01 января 2021'
    },
    {
        id: 3,
        title: 'Длинный заголовок заметки номер 3',
        subTitle: '01 января 2021'
    },
    {
        id: 4,
        title: 'Длинный заголовок заметки номер 4',
        subTitle: '01 января 2021'
    },
    {
        id: 5,
        title: 'Длинный заголовок заметки номер 5',
        subTitle: '01 января 2021'
    },
    {
        id: 6,
        title: 'Длинный заголовок заметки номер 6',
        subTitle: '01 января 2021'
    },
    {
        id: 7,
        title: 'Длинный заголовок заметки номер 7',
        subTitle: '01 января 2021'
    },
    {
        id: 8,
        title: 'Длинный заголовок заметки номер 8',
        subTitle: '01 января 2021'
    }
]


export const Notes = () => {
    return (
        <>
            <div className='notes__header-layout'>
                <h1 className='notes__title'>
                    Заметки
                </h1>
                <CustomButton startIcon={<AddIcon />} title='Добавить заметку'/>

            </div>
            <div className='notes__notes-layout'>
                {notes &&
                    notes.map(note => (
                        <Link to={'/note/' + note.id} className='link__reset'>
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

        </>

    );
};