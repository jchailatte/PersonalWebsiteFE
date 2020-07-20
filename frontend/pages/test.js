import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';

import Brush from '../components/brushengine/brush';
import Brushstroke from '../components/brushengine/brushstroke';
import {useResize} from '../utils/hooks/useResize';

const useStyles = makeStyles((theme) => ({
    fontstyle:{
//        color: 'white',
        textShadow: '0 0 5px white, 0 0 5px black', 
        fontFamily: "'Caveat', cursive"
    },
    scrollCanvas: {
        position: 'absolute'
    },
    background: {
        display: 'flex',
        justifyContent: 'center',
    },
    portrait:{
        height: '85vh'
    },
    index:{
        zIndex: 1
    },
    spacing:{
        height: "200px"
    },
    container: {
        marginTop: '40px',
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
    const [y, setY] = useState(100);
    const [x, setX] = useState(300);
    const dimensions = useResize("container")

    const [canvas, setCanvas] = useState(null);
    var context = null;

    var timeout;

    const brush = new Brush(x,y,'#000000', 30, 5);
    const bs = new Brushstroke({
        duration: 2, 
        inkAmount: 5, 
        size: 30,
        color: '#000000',
        animation: 'points'
    })

    useEffect(()=> {
        window.addEventListener('scroll', handleScroll, false);
        brush.startStroke(x,y);

        return _ => {
            window.removeEventListener('scroll', handleScroll, false);
        }
    },[]);

    useEffect(()=>{
        console.log('in');
//        brush.render(document.getElementById('scroll').getContext('2d'), x, window.scrollY + window.innerHeight*0.5)
    },[x]);

    const handleScroll = () => {
        if(timeout){
            window.cancelAnimationFrame(timeout);
        }

        timeout = window.requestAnimationFrame(function(){
            console.log(window.scrollY);
            brush.render(document.getElementById('scroll').getContext('2d'), x, window.scrollY + window.innerHeight*0.5)

            // if(window.scrollY>50 && window.scrollY<1000){
            //     setX(window.scrollY/5 + 300);
            // }

            // else(
            //     setX(prevState=>prevState)
            // )
        })
    }

    const initialDraw = () =>{
        bs.draw({
            points:[0,0]
        });
    }

    //ok i might have gotten lazy and brute forced it
    return(
        <React.Fragment>
            <Head>
                <title key="title">Jonathan Chai - About</title>
            </Head>
            <canvas id='scroll' width={dimensions.width} height={dimensions.height} className={classes.scrollCanvas}>
            </canvas>
            <Grid container item spacing={3} xs={12} md={7} className={classes.container} id="container" alignItems="center">
                <Grid item xs={2}></Grid>
                <Grid item xs={2}>
                    Scroll down!👇
                </Grid>
                <Grid item xs={4}></Grid>
                <Grid item xs={4}>
                    <Typography variant='h1' className={classes.fontstyle}>
                        Hi!
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <div className={classes.spacing}></div>
                </Grid>
                <Grid item xs={2}></Grid>
                <Grid item xs={6}>
                    <Typography variant='h3' className={classes.fontstyle}>
                        My name is Jonathan Chai
                    </Typography>
                </Grid>
                <Grid item xs={4}></Grid>
                <Grid item xs={12}>
                    <div className={classes.spacing}></div>
                </Grid>
                <Grid item xs={4}>
                    <Typography variant='h4' className={classes.fontstyle}>
                        Yup, that's me 👉
                    </Typography>
                </Grid>
                <Grid item xs={2}></Grid>
                <Grid item xs={6}>
                    <Card className={classes.background}>
                        <img src="/graphics/me.png" className={classes.portrait}></img>
                    </Card>
                </Grid>
                <Grid item xs={12}>
                    <div className={classes.spacing}></div>
                </Grid>
                <Grid item xs={2}></Grid>
                <Grid item xs={6}>
                    <Typography variant='h4' className={classes.fontstyle}>
                        I'm a somewhat shy, somewhat artsy software engineer located in the SF area.
                    </Typography>
                </Grid>
                <Grid item xs={4}></Grid>
                <Grid item xs={12}>
                    <div className={classes.spacing}></div>
                </Grid>
                <Grid item xs={2}></Grid>
                <Grid item xs={4}>
                    <Typography variant='h4' className={classes.fontstyle}>
                        I recently graduated from the University of Southern California and am currently looking for a full-time job...
                    </Typography>
                </Grid>
                <Grid item xs={6}></Grid>
                <Grid item xs={8}></Grid>
                <Grid item xs={4}>
                    <Typography variant='h3' className={classes.fontstyle}>
                        or a fun freelance job 😄
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <div className={classes.spacing}></div>
                </Grid>
                <Grid item xs={4}></Grid>
                <Grid item xs={6}>
                    <Typography variant='h4' className={classes.fontstyle}>
                        Some hobbies that I have include reading light novels and playing video games
                    </Typography>
                </Grid>
                <Grid item xs={4}></Grid>
                <Grid item xs={12}>
                    <div className={classes.spacing}></div>
                </Grid>
                <Grid item xs={2}></Grid>
                <Grid item xs={4}>
                    <Typography variant='h4' className={classes.fontstyle}>
                        For those of you interested in the technical aspects of this site...
                    </Typography>
                </Grid>
                <Grid item xs={6}></Grid>
                <Grid item xs={12}>
                    <div className={classes.spacing}></div>
                </Grid>
                <Grid item xs={8}></Grid>
                <Grid item xs={4}>
                    <Typography variant='h4' className={classes.fontstyle}>
                        The frontend is built using React, Material UI, Next.js and Redux
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <div className={classes.spacing}></div>
                </Grid>
                <Grid item xs={6}></Grid>
                <Grid item xs={4}>
                    <Typography variant='h4' className={classes.fontstyle}>
                        The backend is built using Java and Spring Boot
                    </Typography>
                </Grid>
                <Grid item xs={4}></Grid>
                <Grid item xs={12}>
                    <div className={classes.spacing}></div>
                </Grid>
                <Grid item xs={6}></Grid>
                <Grid item xs={6}>
                    <Typography variant='h4' className={classes.fontstyle}>
                        And everything is running on a Digital Ocean droplet with Docker containers and a Nginx reverse proxy
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <div className={classes.spacing}></div>
                </Grid>
                <Grid item xs={2}></Grid>
                <Grid item xs={3}>
                    <Typography variant='h4' className={classes.fontstyle}>
                        Thanks for scrolling to the end!
                    </Typography>
                </Grid>
                <Grid item xs={3}></Grid>
                <Grid item xs={4}>
                    <Typography variant='h4' className={classes.fontstyle}>
                        As a little extra, I'll also tell you that all the artwork on the site is drawn by me 😋
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <div className={classes.spacing}></div>
                </Grid>
            </Grid>

        </React.Fragment>
    )
}