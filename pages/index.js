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
    },
    titlebackground: {
        backgroundImage: `url(/graphics/stroke.png)`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
        textAlign: 'center',
    },
    sumbackground:{
        backgroundImage: `url(/graphics/flatstroke.png)`,
        backgroundSize: '100% 100%',
    },
    container:{
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

export default function Index(prop) {
    const classes = useStyles();

    return(
        <Background height={true}>
            <Sidebar selected={'Home'}>
                <Grid container direction="column" className={classes.container}>
                    <Grid item sm={4} xs={12} className={classes.titlebackground}>
                        <Typography variant="h2" className={classes.fontstyle}>
                            Jonathan Chai
                        </Typography>
                    </Grid>
                    <Grid item sm={6} xs={12} className={classes.sumbackground}>
                        <Typography variant="h3" className={classes.fontstyle}>
                        I'm a video game-playing, book-reading, aesthetic-fanatic techie located in the SF Area.                         </Typography>
                    </Grid>
                </Grid>
            </Sidebar>
        </Background>
    )
}
