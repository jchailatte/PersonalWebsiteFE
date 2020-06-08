import React, {useState, useEffect, useRef} from 'react';
import { makeStyles, useTheme} from '@material-ui/core/styles';
import NoSSR from '@material-ui/core/NoSsr';

import Sidebar from '../components/sidebar';
import Brushstroke from '../components/brushengine/brushstroke';
  
const useStyles = makeStyles((theme)=>(
{

}));

function IndexContent(props) {
    const classes = useStyles();
    const theme = useTheme();

    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    const didMountRef = useRef(false);

    const draw = () =>
    { 
        const optionsBackground = {
            canvas: document.getElementById('test'),
            ctx: document.getElementById('test').getContext('2d'),
            duration: 20,
            inkAmount: 5,
            lifting: true,
            queue: false,
            width: width,
            height: height
        };
        const bs = new Brushstroke(optionsBackground);
        bs.draw();
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