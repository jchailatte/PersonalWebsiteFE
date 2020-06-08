import { useState, useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles} from '@material-ui/core/styles';

import Brushstroke from './brushengine/brushstroke';

const useStyles = makeStyles((theme)=>(
{
    elcanvas: {
        position: 'fixed'
    }
}));

export default function canvas(props) {
    const classes = useStyles();

    const [height, setHeight] = useState(0);
    const [width, setWidth] = useState(0);

    useEffect(()=>{
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    },[]);
  
    return(
        <canvas height={height} width={width} className={classes.elcanvas} id="blackout">
        </canvas>
    )
}