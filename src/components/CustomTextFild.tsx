import React, { forwardRef } from 'react';
import {styled} from "@mui/material/styles";
import TextField from '@mui/material/TextField';



const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: '#8ADD37',
    },
    '& .MuiOutlinedInput-root': {
        '&.Mui-focused fieldset': {
            borderColor: '#8ADD37',
        },
        borderRadius: 25,
        backgroundColor: '#F8F8F8',
        fontSize: '15px',
        lineHeight: '100%',
        weight: '400',

    },
    '& .MuiOutlinedInput-notchedOutline': {
        border: 'none'
    },
    '& .MuiInputLabel-outlined.MuiInputLabel-shrink': {
        transform: 'translate(24px, -28px) scale(0.85) !important'
    },
});


export const CustomTextField = forwardRef<HTMLDivElement, any>((props, ref) => {

    return (
        <CssTextField
            {...props}

            error={props?.error}
            helperText={props?.helperText}
            variant='outlined'
        />
    );
})
