import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

import Sidebar from '../components/sidebar';

import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

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
            marginTop: '5vh',
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
    const [value, setValue] = useState(0);       
    const [width, setWidth] = useState(0);

    useEffect(()=>{
        setWidth(window.innerWidth);
    },[]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    TabPanel.propTypes = {
        children: PropTypes.node,
        index: PropTypes.any.isRequired,
        value: PropTypes.any.isRequired,
    };

    function TabPanel(props) {
        const { children, value, index, ...other } = props;
      
        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`tabpanel-${index}`}
                aria-labelledby={`tab-${index}`}
                {...other}
            >
                {value === index && (
                    <React.Fragment>
                        {children}
                    </React.Fragment>
                )}
            </div>
        );
    }

    function tabProps(index) {
        return {
            id: `tab-${index}`,
            'aria-controls': `tabpanel-${index}`,
        };
    }

    const TabPanel1 = () => {
        return(
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
            </Grid>
        );
    };

    const TabPanel2 = () => {
        return(
            <Document file={"/doc/res.pdf"} className={classes.restyle}>
                <Page 
                    pageNumber={1} 
                    className={classes.border}
                    width={0.6*width}
                ></Page>
            </Document>
        );
    }
    
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
        <React.Fragment>
            <Tabs
                value={value}
                onChange = {handleChange}
                variant="standard"
                indicatorColor="primary"
            >
                <Tab label="Info" {...tabProps(0)} className={`${classes.fontstyle} ${classes.tabs}`}></Tab>
                <Tab label="Resume" {...tabProps(1)} className={`${classes.fontstyle} ${classes.tabs}`}></Tab>
            </Tabs>
            <TabPanel value={value} index={0}>
                <TabPanel1></TabPanel1>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <TabPanel2></TabPanel2>
            </TabPanel>
        </React.Fragment>
    )
}

export default function About(props)
{
    return(
        <Sidebar 
            selected={'About'} 
            blur={true}
            quote={"Potions had a cooldown. What was the best way to drink potions to keep up your endurance during battle? That itself was a type of knowledge."}
            by={"The King's Avatar"}    
        >
            <AboutContent></AboutContent>
        </Sidebar>
    )
}






