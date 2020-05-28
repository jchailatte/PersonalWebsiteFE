import React, {useState, Component} from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Sidebar from '../components/sidebar'
import Background from '../components/background';

const useStyles = makeStyles((theme)=>(
{
    fontstyle:{
        color: 'white',
        textShadow: '0 0 5px black, 0 0 5px black', 
        fontFamily: "'Caveat', cursive",
        textAlign: 'center'
    },
    titlebackground: {
        backgroundImage: `url(/graphics/flatstroke.png)`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
        textAlign: 'center',
    },
    sumbackground:{
        backgroundImage: `url(/graphics/flatstroke.png)`,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
    },
    container:{
        width: '20vw',
        //backgroundImage: `url(/graphics/stroke2.png)`,
        backgroundSize: '100% 100%',
        [theme.breakpoints.up('md')]:{
            transform: 'translate(5%,100%)',
        },
        [theme.breakpoints.down('md')]:{
            transform: 'translate(5%,70%)',
        },
        [theme.breakpoints.up('xs')]:{
            transform: 'translate(5%, 10%)',
        },
        [theme.breakpoints.down('xs')]:{
            transform: 'translate(5%,0)',
        }
    }
}));

function IndexContent(prop) {
    const classes = useStyles();
    return(
        <Grid container direction="column" className={classes.container}>
            <Grid item xs={12} className={classes.titlebackground}>
                <Typography variant="h2" className={classes.fontstyle}>
                        Welcome~
                </Typography>
            </Grid>
            <Grid item xs={12} className={classes.sumbackground}>
                <Typography variant="h3" className={classes.fontstyle}>
                to my little dev sandbox.
                </Typography>
            </Grid>
        </Grid>
    )
};

export default function Index(prop) {
    return(
        <Background>
            <Sidebar
                selected={'Home'}
                quote={"Making a choice doesn't have to have any meaning, but it might have some. We live on Earth, not for any meaning, but to be meaningful."}
                by={"Jiang Ye"}
            >
                <IndexContent></IndexContent>
            </Sidebar>
        </Background>
    )
}