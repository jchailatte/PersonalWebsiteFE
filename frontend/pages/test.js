import React, {useState, useEffect, useRef} from 'react';
import { makeStyles, useTheme} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import NoSSR from '@material-ui/core/NoSsr';

import Sidebar from '../components/sidebar';
import Brushstroke from '../components/brushengine/brushtroke';

const useStyles = makeStyles((theme)=>(
{

}));

function IndexContent(props) {
    const classes = useStyles();
    const theme = useTheme();
    const canvasRef = React.useRef(null);

    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    const didMountRef = useRef(false);

    const draw = () =>
    { 
        console.log('act');
        const optionsBackground = {
            canvas: document.getElementById('blackout'),
            ctx: document.getElementById('blackout').getContext('2d'),
            animation: 'points',
            inkAmount: 10,
            lifting: true,
            size: 300,
            frames:20,
            frameAnimation: true,
            width: width,
            height: height
        };
        const bs = new Brushstroke(optionsBackground);
        bs.draw({
            points: [width, height / 2, 0, height / 1.5 - 40,
                0, height / 2 - 40, width, height / 3]

        });
    }

    useEffect(()=>{
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    },[]);

    useEffect(() => {
        if (didMountRef.current) {
          draw();
        } else didMountRef.current = true
      });


    return(
        <canvas height={height} width= {width} id="test"/>
    )
};

export default function Index(props) {
    return(
        <NoSSR>
            <IndexContent></IndexContent>
        </NoSSR>
    )
}