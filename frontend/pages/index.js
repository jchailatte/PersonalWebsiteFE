import React, {useState, useEffect, useRef} from 'react';
import { makeStyles, useTheme} from '@material-ui/core/styles';
import Fade from '@material-ui/core/Fade';
import Grid from '@material-ui/core/Grid';
import Grow from '@material-ui/core/Grow';
import Typography from '@material-ui/core/Typography';

import Sidebar from '../components/sidebar';
import Brushstroke from '../components/brushengine/brushstroke';

const useStyles = makeStyles((theme)=>(
{
    fontstyle:{
        color: 'white',
        textShadow: '0 0 5px black, 0 0 5px black', 
        fontFamily: "'Caveat', cursive",
        textAlign: 'center',
    },
    container:{
        zIndex: 1,
        [theme.breakpoints.up('md')]:{
            width: '10vw'
        },
        [theme.breakpoints.down('md')]:{
            width: '20vw'
        },
        [theme.breakpoints.up('xs')]:{
            width: '25vw'
        },
        [theme.breakpoints.down('xs')]:{
            width: '40vw'
        }
    },
    canvas:{
        position: 'absolute',
    },
    index: {
        zIndex:1,
    }

}));

function IndexContent(props) {
    const classes = useStyles();

    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [paint, setPaint] = useState(false);
    const [bs, setBs] = useState(undefined);

    useEffect(()=>{
        setWidth(document.getElementById('container').offsetWidth);
        setHeight(document.getElementById('container').offsetHeight);
        setBs(new Brushstroke({
            canvas: document.getElementById('index_canvas'),
            ctx: document.getElementById('index_canvas').getContext('2d'),
            inkAmount: 3,
            size: 45,
            lifting: true,
            queue: false,
        }));
    },[]);

    //issue is probably somehwere below here -.-

    useEffect(()=>{
        window.addEventListener('resize', handleResize);
    });

    const handleResize = () => {
        //console.log('resized to: ', window.innerWidth, 'x', window.innerHeight);
        setHeight(document.getElementById('container').offsetHeight);
        setWidth(document.getElementById('container').offsetWidth);
    }

    useEffect(()=>{
        console.log("hit");
        if(bs != undefined){
            bs.draw({duration:2,width:width, height: height})

            setTimeout(()=>{            
                setPaint(true);
            }, 2000);
        }
    },[width]);

    return(
        <Grid container direction="column" className={classes.container} id="container">
            <canvas id='index_canvas' height={height} width={width} className={classes.canvas}></canvas>
                <div className={classes.index}>
                    <Grid item xs={12}>
                        <Grow in={paint}>
                            <Typography variant="h2" className={`${classes.fontstyle} ${classes.titlebackground}`}>
                                Welcome~
                            </Typography>
                        </Grow>
                    </Grid>
                    <Grid item xs={12}>
                        <Grow in={paint}>
                            <Typography variant="h3" className={`${classes.fontstyle} ${classes.sumbackground}`}>
                            to my website.
                            </Typography>
                        </Grow>
                    </Grid>
                </div>
        </Grid>
    )
};

export default function Index(props) {
    return(
        <Sidebar
            selected={'Home'}
            quote={"Making a choice doesn't have to have any meaning, but it might have some. We live on Earth, not for any meaning, but to be meaningful."}
            by={"Jiang Ye"}
        >
            <IndexContent></IndexContent>
        </Sidebar>
    )
}