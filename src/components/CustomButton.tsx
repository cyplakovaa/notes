import * as React from 'react';
import {styled} from '@mui/material/styles';
import Button from '@mui/material/Button';
import {ReactElement} from "react";

interface CustomButtonProps {
    title: string
    startIcon: ReactElement<any, any>
}

const StyledButton = styled(Button)(({theme}) => ({
    color: 'white',
    backgroundColor: '#8ADD37',
    '&:hover': {
        backgroundColor: '#32CD32'
    },
    borderRadius: 25,
    width: 230,
    height: 50,
}));

export const CustomButton: React.FC<CustomButtonProps> = (props) => {
    return (
        <StyledButton variant="contained" startIcon={props.startIcon} >{props.title}</StyledButton>
    );
}