import React, {useState, Component} from 'react';
import { makeStyles, useTheme} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Sidebar from '../components/sidebar'

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
        //backgroundImage: `url(/graphics/stroke2.png)`,
        //backgroundSize: '100% 100%',

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
    }
}));

function IndexContent(props) {
    const classes = useStyles();
    const theme = useTheme();
    return(
        <Grid container direction="column" className={classes.container}>
            <Grid item xs={12}>
                <Typography variant="h2" className={`${classes.fontstyle} ${classes.titlebackground}`}>
                    Welcome~
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h3" className={`${classes.fontstyle} ${classes.sumbackground}`}>
                to my website.
                </Typography>
            </Grid>
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