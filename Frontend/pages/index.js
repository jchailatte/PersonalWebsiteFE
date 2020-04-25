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
        backgroundImage: `url(/graphics/stroke.png)`,
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
        width: '65vw',
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
            <Sidebar
                selected={'Home'}
                quote={"Making a choice doesn't have to have any meaning, but it might have some. We live on Earth, not for any meaning, but to be meaningful."}
                by={"Jiang Ye"}
            >
                <Grid container direction="column" className={classes.container}>
                    <Grid item sm={4} xs={12} className={classes.titlebackground}>
                        <Typography variant="h2" className={classes.fontstyle}>
                             Welcome~
                        </Typography>
                    </Grid>
                    <Grid item sm={4} xs={12} className={classes.sumbackground}>
                        <Typography variant="h3" className={classes.fontstyle}>
                        to my little dev sand-box.
                        </Typography>
                    </Grid>
                </Grid>
            </Sidebar>
        </Background>
    )
}
