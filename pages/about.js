import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
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
        backgroundImage:`url(https://i.pinimg.com/originals/02/ab/cf/02abcf44eca37fe51be10527a9ce31d6.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',

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
        height: '85vh'
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
    },
    tabs:{
        backgroundImage: `url(/graphics/stroke.png)`,
        backgroundSize: '100% 100%'
    },
    restyle:{
        display: 'flex',
        paddingTop: '5vh',
        width: '100%',
        justifyContent: 'center',
        backgroundImage: `url(/graphics/flatstroke.png)`,
        backgroundSize: '100% 90%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundOrigin: 'content-box'
    },
    border:{
        borderStyle: 'solid',
        borderWidth: '10px'
    }
}));

const items=[
    'All art on this site was done by me (the background alone took me around 1.5 weeks)',
    'The site was built using: React, Material UI, Next.js',
    'The site is being hosted by: Digital Ocean and running on Nginx and PM2',
    'The artwork was drawn using: Krita, Intuos Drawing Tablet',
    'Hobbies I have: Light Novels, Anime/Manga, League of Legends, TeamFight Tactics, and recently Valorant' 
];


export default function About(props){
    const classes = useStyles();
    const [tab, setTab] = React.useState(0);

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
            <Grid container spacing={1} >
                <Grid container item lg={9} alignItems="center">
                    <Grid item sm={7} xs={12} className={classes.titlebackground} >
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
                        <Typography variant="h4" className={classes.fontstyle}>
                            I'm a video game-playing, book-reading, aesthetic-fanatic techie located in the SF Area. 
                            Recently graduated from the University of Southern California with a Computer Science B.S. I'm currently looking for a full-time job. 
                        </Typography>
                    </Grid>
                    </div>
                    <Grid item xs={12} className={classes.listbackground}>
                        <Typography variant="h5" className={classes.fontstyle}>
                        For those of you that are curious...
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
                        <Page pageNumber={1} className={classes.border}></Page>
                    </Document>
                }
            </React.Fragment>
        );
    }
    
    return(
        <Background height={true}>
            <Sidebar selected={'About'} blur={true}>
            <Tabs
            value={tab}
            onChange = {changeTab}
            variant="standard"
            >
                <Tab label="Info" tab={0} className={`${classes.fontstyle} ${classes.tabs}`}></Tab>
                <Tab label="Resume" tab={1} className={`${classes.fontstyle} ${classes.tabs}`}></Tab>
            </Tabs>
                <TabPanel1></TabPanel1>
                <Tabpanel2></Tabpanel2>
            </Sidebar>
        </Background>
    )
}






