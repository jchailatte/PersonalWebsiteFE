import React, { useState } from 'react';
import Head from 'next/head';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';

import Brushstroke from '../components/brushengine/brushstroke';
import Canvas from '../components/canvas';

const useStyles = makeStyles((theme) => ({
    fontstyle:{
        color: 'white',
        textShadow: '0 0 5px black, 0 0 5px black', 
        fontFamily: "'Caveat', cursive"
    },
    background: {
        display: 'flex',
        justifyContent: 'center',
        backgroundImage:`url(https://i.pinimg.com/originals/02/ab/cf/02abcf44eca37fe51be10527a9ce31d6.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',

        [theme.breakpoints.up('md')]:{
            height:'85vh',
        },
        [theme.breakpoints.down('xs')]:{
            height: '20vh',
            width: '20vh',
        }
    },
    background2: {
        height:'20vw',
        width: '20vw',
    },
    portrait:{
        height: '85vh'
    },
    titlebackground: {
        backgroundImage: `url(/graphics/stroke.png)`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
        textAlign: 'center',
    },
    itemstyle1:
    {
        [theme.breakpoints.down('md')]:{
            marginTop: '5vh',
            order: '-1'
        }
    },
    border:{
        borderStyle: 'solid',
        borderWidth: 'thick',
    },
    index:{
        zIndex: 1
    }
}));

export async function getStaticProps(context){
    return{
        props:{
            selected: 'About',
            quote: "Potions had a cooldown. What was the best way to drink potions to keep up your endurance during battle? That itself was a type of knowledge.",
            by: "The King's Avatar",
        }
    }
}

export default function About(props){
    const classes = useStyles();
    const [value, setValue] = useState(0);       
    const bs = new Brushstroke({
        duration: 1.5, 
        inkAmount: 10,
        size: 40,
        lifting: true,
        queue: true
    });
    const items=[
        'The site was built using: React, Material UI, Next.js, Redux',
        'The backend is build using: Spring Boot and Java',
        'The everything is running using: Digital Ocean, Docker, and Nginx',
        'The artwork was drawn(by me) using: Krita, Wacom Intuos Drawing Tablet',
        'Hobbies I have: Light Novels, Anime/Manga, League of Legends, TeamFight Tactics, and recently Valorant' 
    ];

    return(
        <React.Fragment>
            <Head>
                <title key="title">Jonathan Chai - About</title>
            </Head>
            <Grid container spacing={3}>
                <Grid container item lg={9} spacing={3} alignItems="center">
                    <Grid item sm={7} xs={12} className={classes.titlebackground}>
                        <Typography variant='h2' className={classes.fontstyle} >
                            Jonathan Chai
                        </Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Hidden only={['xs','lg','xl']} implementation="css">
                            <Card className={`${classes.background} ${classes.background2}`}>
                                <img src="/graphics/me.png" className={classes.portrait}></img>
                            </Card>
                        </Hidden>
                    </Grid>
                    <Grid container item xs={12}>
                        <Canvas 
                            id={'about_canvas1'}
                            container={'container1'}
                            bs={bs}
                        ></Canvas> 
                        <div id="container1" className={classes.index} style={{display:'flex'}}>
                                <Grid item md={2} sm={false}>
                                    <Hidden smDown implementation="css" className={classes.index}>
                                        <Typography variant='h1' className={classes.fontstyle}>
                                            Hi!
                                        </Typography>
                                    </Hidden>
                                </Grid>
                            <Grid item md={9} sm={12} xs={12} className={classes.index}>
                                <Typography variant="h4" className={classes.fontstyle}>
                                    I'm a somewhat shy somewhat artsy sofware engineer located in the SF Area. 
                                    Recently graduated from the University of Southern California with a Computer Science B.S., 
                                    I'm currently looking for a full-time job (or freelance job if it's interesting 😄). 
                                </Typography>
                            </Grid>
                        </div>
                    </Grid>
                    <Grid item xs={12} style={{display:'flex'}} id="container2">
                        <Canvas 
                            id={'about_canvas2'}
                            container={'container2'}
                            bs={bs}
                        ></Canvas> 
                        <div className={classes.index}>
                            <Typography variant="h5" className={classes.fontstyle}>
                            For those of you that are curious...
                            </Typography>
                            <ul>
                                {items.map((item,index)=>(
                                <li key={item} className={classes.fontstyle}>
                                    <Typography variant="h6" className={classes.fontstyle}>
                                        {item}
                                    </Typography>
                                </li>))}
                            </ul>
                        </div>
                    </Grid>
                </Grid>
                <Grid item sm={3} xs={12} className={classes.itemstyle1} align="center">
                    <Hidden only={['sm','md']} implementation="css">
                    <Card className={classes.background}>
                        <img src="/graphics/me.png" className={classes.portrait}></img>
                    </Card>
                    </Hidden>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}