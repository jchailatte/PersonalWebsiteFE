import React from 'React';
import clsx from 'clsx';
import {makeStyles, useTheme} from '@material-ui/core/Styles';

import Background from '../components/background';
import Sidebar from '../components/sidebar';

const useStyles = makeStyles((thene)=>(
{

}));

export default function About(props){
    const classes = useStyles();

    return(
        <Background height={true}>
            <Sidebar selected={'About'}>
            </Sidebar>
        </Background>
    )
}






