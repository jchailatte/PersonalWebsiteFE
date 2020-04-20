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
        fontFamily: "'Caveat', cursive",
    },
    background: {
        display: 'flex',
        justifyContent: 'center',
        [theme.breakpoints.up('md')]:{
            height:'90vh',
        },
        [theme.breakpoints.down('md')]:
        {
            display:'none',
        },
        [theme.breakpoints.down('xs')]:{
            display:'flex',
            height: '20vh',
            width: '20vh',
        }

    },
    background2: {
        display: 'flex',
        justifyContent: 'center',
        height:'20vh',
        width: '20vh',
        [theme.breakpoints.up('md')]:{
            display:'none'
        },
        [theme.breakpoints.down('md')]:
        {
            display:'flex'
        },
        [theme.breakpoints.down('xs')]:
        {
            display:'none'
        }
    },
    portrait:{
        height: '90vh'
    },
    titlebackground: {
        backgroundImage: `url(/graphics/stroke.png)`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
        textAlign: 'center',
    },
    listbackground:{
        backgroundImage: `url(/graphics/flatstroke.png)`,
        backgroundSize: '100% 100%'
    },
    sumbackground:{
        backgroundImage: `url(/graphics/flatstroke.png)`,
        backgroundSize: '100% 100%',
    },
    itemstyle1:
    {
        [theme.breakpoints.down('md')]:{
            order: '-1'
        }
    },
    hide:{
        [theme.breakpoints.down('sm')] : {
            display:'none'
        }
    }

}));

const items=[
    'All art on this site was done by me (the background alone took me around 1.5 weeks)',
    'The site was built using: React, Material UI, Next.js',
    'The artwork was drawn using: Krita, Intuos Drawing Tablet',
    'Hobbies I have: Light Novels, Anime/Manga, League of Legends, and recently Valorant'
];


export default function About(props){
    const classes = useStyles();

    function Ulr()
    {
        return(
            items.map((item,index)=>(
                <li key={item} className={classes.fontstyle}>
                    <Typography variant="h6" className={classes.fontstyle}>
                        {item}
                    </Typography>
                </li>
            )));
    };
    
    return(
        
        <Background height={true}>
            <Sidebar selected={'About'} blur={true}>
                <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap" rel="stylesheet"></link>
                <Grid container spacing={1} style={{justifyContent:'center'}}>
                    <Grid container item lg={9} alignItems="center">
                        <Grid item sm={8} xs={12} className={classes.titlebackground}>
                            <Typography variant='h2' className={classes.fontstyle} >
                                Jonathan Chai
                            </Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Card className={classes.background2}>
                                <img src="/graphics/me.png" className={classes.portrait}></img>
                            </Card>
                        </Grid>
                        <div style={{display:'flex'}} className={classes.sumbackground}>
                        <Grid item xs={2} className={classes.hide}>
                            <Typography variant='h1' className={classes.fontstyle}>
                            Hi!
                            </Typography>
                        </Grid>
                        <Grid item md={9} xs={12} >
                            <br></br>
                            <Typography variant="h4" className={classes.fontstyle}>
                                I'm a video game-loving, book-consuming, graphic-fanatic techie located in 
                                {<a style={{textDecoration: 'none', color: '#0000FF'}} href='https://goo.gl/maps/KPfPaK18PKnvLbBr8'> Fremont, CA</a>}. 
                                Recently graduated from the University of Southern California with a Computer Science B.S. I'm currently looking for a full-time job. 
                                <br></br>
                                <br></br>
                            </Typography>
                        </Grid>
                        </div>
                        <Grid item xs={1}></Grid>
                        <Grid item xs={12} className={classes.listbackground}>
                            <Typography variant="h5" className={classes.fontstyle}>
                            For those of you that are curious...
                            <br></br>
                            </Typography>
                            <ul>
                                <Ulr items={items}></Ulr>
                            </ul>
                        </Grid>
                    </Grid>
                    <Grid item sm={3} xs={6} space={3} className={classes.itemstyle1}>
                        <Card className={classes.background}>
                            <img src="/graphics/me.png" className={classes.portrait}></img>
                        </Card>
                    </Grid>
                </Grid>
            </Sidebar>
        </Background>
    )
}






