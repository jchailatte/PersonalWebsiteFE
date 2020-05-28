import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

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
        display: 'flex',
        justifyContent: 'center',
        height:'20vh',
        width: '20vh',
        backgroundImage:`url(https://i.pinimg.com/originals/02/ab/cf/02abcf44eca37fe51be10527a9ce31d6.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
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
    tabs:{
        backgroundImage: `url(/graphics/stroke.png)`,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat'
        
    },
    restyle:{
        display: 'flex',
        paddingTop: '5vh',
        justifyContent: 'center',
        backgroundImage: `url(/graphics/stroke4.png)`,
        backgroundSize: '110% auto',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    },
    border:{
        borderStyle: 'solid',
        borderWidth: 'thick',
    },
}));

const items=[
    'The site was built using: React, Material UI, Next.js',
    'The site is being hosted by: Digital Ocean and running on Nginx and PM2',
    'The artwork was drawn(by me) using: Krita, Wacom Intuos Drawing Tablet',
    'Hobbies I have: Light Novels, Anime/Manga, League of Legends, TeamFight Tactics, and recently Valorant' 
];

function AboutContent(props){
    const classes = useStyles();
    const [tab, setTab] = React.useState(0);       
    const [width, setWidth] = React.useState(0);

     useEffect(()=>{
        setWidth(window.innerWidth);
    });

    const changeTab = (event, newTab) => {
        setTab(newTab);
    };

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

    function TabPanel1()
    {
        return(
            <React.Fragment>
            {tab === 0 && 
            <Grid container spacing={3}>
                <Grid container item lg={9} spacing={3} alignItems="center">
                    <Grid item sm={7} xs={12} className={classes.titlebackground}>
                        <Typography variant='h2' className={classes.fontstyle} >
                            Jonathan Chai
                        </Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Hidden only={['xs','lg','xl']} implementation="css">
                        <Card className={classes.background2}>
                            <img src="/graphics/me.png" className={classes.portrait}></img>
                        </Card>
                        </Hidden>
                    </Grid>
                    <div style={{display:'flex'}} className={classes.sumbackground}>
                    <Grid item xs={2}>
                        <Hidden smDown implementation="css">
                        <Typography variant='h1' className={classes.fontstyle}>
                        Hi!
                        </Typography>
                        </Hidden>
                    </Grid>
                    <Grid item md={9} xs={12} >
                        <Typography variant="h4" className={classes.fontstyle}>
                            I'm a video game-playing, book-reading, aesthetic-fanatic techie located in the SF Area. 
                            Recently graduated from the University of Southern California with a Computer Science B.S., I'm currently looking for a full-time job (or freelance job if it's interesting). 
                        </Typography>
                    </Grid>
                    </div>
                    <Grid item xs={12}></Grid>
                    <Grid item xs={12} className={classes.sumbackground}>
                        <Typography variant="h5" className={classes.fontstyle}>
                        For those of you that are curious...
                        </Typography>
                        <ul>
                            <Ulr items={items}></Ulr>
                        </ul>
                    </Grid>
                </Grid>
                <Grid item sm={3} xs={12} className={classes.itemstyle1} align="center">
                    <Hidden only={['sm','md']} implementation="css">
                    <Card className={classes.background}>
                        <img src="/graphics/me.png" className={classes.portrait}></img>
                    </Card>
                    </Hidden>
                </Grid>
            </Grid>}
            </React.Fragment>
        );
    }

    function Tabpanel2()
    {
        return(
            <React.Fragment>
                {tab === 1 && 
                    <Document file="/doc/res.pdf" className={classes.restyle}>
                        <Page 
                        pageNumber={1} 
                        className={classes.border}
                        width={0.6*width}
                        ></Page>
                    </Document>
                }
            </React.Fragment>
        );
    }
    
    return(
        <React.Fragment>
            <Tabs
            value={tab}
            onChange = {changeTab}
            variant="standard"
            indicatorColor="primary"
            >
                <Tab label="Info" tab={0} className={`${classes.fontstyle} ${classes.tabs}`}></Tab>
                <Tab label="Resume" tab={1} className={`${classes.fontstyle} ${classes.tabs}`}></Tab>
            </Tabs>
                <TabPanel1></TabPanel1>
                <Tabpanel2></Tabpanel2>
        </React.Fragment>
    )
}

export default function About(props)
{
    return(
        <Background>
            <Sidebar 
                selected={'About'} 
                blur={true}
                quote={"Potions had a cooldown. What was the best way to drink potions to keep up your endurance during battle? That itself was a type of knowledge."}
                by={"The King's Avatar"}    
            >
                <AboutContent></AboutContent>
            </Sidebar>
        </Background>
    )
}






