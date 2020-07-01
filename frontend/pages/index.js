import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Grow from '@material-ui/core/Grow';
import Typography from '@material-ui/core/Typography';

import Brushstroke from '../components/brushengine/brushstroke';
import Canvas from '../components/canvas';

const useStyles = makeStyles((theme)=>(
{
    fontstyle:{
        fontFamily: "'Caveat', cursive",
        textAlign: 'center',
        color: 'white',
        textShadow: '0 0 5px black, 0 0 5px black', 
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
    index: {
        zIndex:1,
    }

}));

export async function getStaticProps(context){
    return{
        props:{
            selected: 'Home',
            quote: "Making a choice doesn't have to have any meaning, but it might have some. We live on Earth, not for any meaning, but to be meaningful.",
            by: 'Jiang Ye',
        }
    }
}

export default function Index(props) {
    const classes = useStyles();

    const [display1, setDisplay1] = useState(false);
    const [display2, setDisplay2] = useState(false);
    const bs = new Brushstroke({
        inkAmount: 3,
        duration: 1.5,
        size: 45,
        lifting: true,
    });

    useEffect(()=>{
        setTimeout(()=>{            
            setDisplay1(true);
        }, 1000);

        setTimeout(()=>{            
            setDisplay2(true);
        }, 1500);
    },[]);

    return(
        <Grid container direction="column" className={classes.container}>
            <Canvas
                id={'index_canvas'}
                container={'container'}
                bs={bs}
            ></Canvas>
            <div className={classes.index} id="container">
                <Grid item xs={12}>
                    <Grow in={display1}>
                        <Typography variant="h2" className={classes.fontstyle}>
                            Welcome
                        </Typography>
                    </Grow>
                </Grid>
                <Grid item xs={12}>
                    <Grow in={display2}>
                        <Typography variant="h3" className={classes.fontstyle}>
                            to my website.
                        </Typography>
                    </Grow>
                </Grid>
            </div>
        </Grid>
    )
};
