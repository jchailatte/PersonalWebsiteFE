import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';


import Background from '../components/background';
import Sidebar from '../components/sidebar';

const useStyles = makeStyles((theme) => ({
    fontstyle:{
        color: 'white',
        textShadow: '0 0 5px black, 0 0 5px black', 
    },
    outline:{
        outlineStyle: 'solid',
    },
    background: {
        display: 'flex',
        justifyContent: 'center',

        // backgroundImage: `url(/graphics/logo.png)`,
        // backgroundSize: '40vh 40vh',
        // backgroundPosition: '60% 20%',
        // backgroundRepeat: 'no-repeat',
    }
}));

export default function About(props){
    const classes = useStyles();

    return(
        <Background height={true}>
            <Sidebar selected={'About'} blur={true}>
                <Grid container spacing={1} style={{minHeight:'100vh'}}>
                    <Grid container item xs={9} space={3} >
                        <Grid container item direction="column" >
                            <Grid item container xs={12} space={3}>
                                <Grid item xs={4}>
                                    <Typography variant='h1' className={classes.fontstyle}>
                                    Hi!
                                    </Typography>
                                </Grid>
                                <Grid item xs={7}>
                                    <br></br>
                                    <Typography variant="h5" className={classes.fontstyle}>
                                        My name is Jonathan Chai (the picture is me) and I'm a New Grad software developer located in 
                                        {<a style={{textDecoration: 'none'}} href='https://goo.gl/maps/KPfPaK18PKnvLbBr8'> Fremont, CA</a>}. 
                                        I have experience in front-end and back-end web development primarily using React and Java. 
                                    </Typography>
                                </Grid>
                            </Grid>

                        </Grid>
                    </Grid>
                    <Grid item xs={3} space={3} >
                        <Card className={classes.background}>
                            <img src="/graphics/me.png" style={{height:'90vh'}}></img>
                        </Card>
                    </Grid>
                </Grid>
            </Sidebar>
        </Background>
    )
}






