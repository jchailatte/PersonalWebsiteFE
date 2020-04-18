import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import Typography from '@material-ui/core/Typography';

import AccountBoxIcon from '@material-ui/icons/AccountBox';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import CodeIcon from '@material-ui/icons/Code';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoomRounded';
import ForumIcon from '@material-ui/icons/Forum';
import GithubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import HomeIcon from '@material-ui/icons/Home';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import {TweenLite, gsap} from 'gsap';

const drawerWidth = 250;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    menuButton: {
        marginRight: 36,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    paperstyle:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        background: '#FCFCFC',
    },
    drawerOpen: {
        [theme.breakpoints.up('md')]:{
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            })
        },
        [theme.breakpoints.down('md')]:{
            width: theme.spacing(7) +1,
        },
    },
    drawerClose: {
        transition: theme.transitions.create('width', 
        {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('md')]: {
            width: theme.spacing(7) + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
    opennested:{
        [theme.breakpoints.down('md')]:
        {
            paddingLeft: theme.spacing(2),
        }
    },
    nestedbackground: {
        background: '#F2F2F2',
    },
    hide:{
        display:'none'
    },
    closehide: {
        [theme.breakpoints.down('md')]:
        {
            display: 'none',
        }
    },
    iconbutton:{
        [theme.breakpoints.down('md')]:
        {
            pointerEvents: 'none',
            opacity: '0.4',
        },
    },
    fontstyle:{
        fontFamily: "'Source Sans Pro', sans-serif",
        fontSize: '18px',
    },
    quote:{
        whiteSpace:'normal',
        fontFamily:"'Long Cang', cursive",
        fontSize: '16px',
    },
    logo:{
        marginTop: '10px',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3)
    },
}));

const sbitems =
[
    {
        text: 'Home',
        icon: <HomeIcon/>,
        href: '/',
    },
    {
        text: 'About',
        icon: <AccountBoxIcon/>
    },
    {
        text: 'Projects',
        icon: <CodeIcon/>,
        href: '/projects',
    },
    {
        text: 'Rooms',
        icon: <MeetingRoomIcon/>
    },
    {
        text: 'Thoughts',
        icon: <ForumIcon/>,
        disable: true
    },
    {
        text: 'Riot',
        icon: <HomeIcon/>,
        nested: true,
        disable: false,
        children: 
        [
            {
                text: 'League of Legends',
                icon: <HomeIcon/>
            },
            {
                text: 'TeamFight Tactics',
                icon: <HomeIcon/>
            }
        ]
    }
];

const footer =
[
    {
        text: 'GitHub',
        icon: <GithubIcon/>,
        href: 'https://github.com/jchailatte'
    },
    {
        text: 'LinkedIn',
        icon: <LinkedInIcon/>,
        href: 'https://www.linkedin.com/in/jchailatte/'
    }
];

export default function MiniDrawer(prop) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const [openCollapse, setOpenCollapse] = React.useState(false);

    var handleDrawerOpen = () => {
        setOpen(true);
    };

    var handleDrawerClose = () => {
        setOpen(false);
    };

    const handleOpenSetting = () => { 
        setOpenCollapse(!openCollapse);
    }

function Itemsr({items,depth})
{
    return(
        items.map((item,index) => (
        <React.Fragment key={item.text}>
        {!item.nested ? (
        <ListItem button component='a' href={item.href}
            selected={prop.selected == item.text} 
            className={clsx(classes.opennested,{[classes.nested]: open && depth>0},{[classes.nestedbackground]:depth>0})}
            disabled={item.disable}
        >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} className={classes.fontstyle} disableTypography></ListItemText>
        </ListItem>
        ):(
        <React.Fragment key={item.text}>
        <ListItem button onClick={handleOpenSetting} disabled={item.disable}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} className={classes.fontstyle} disableTypography/>
            {openCollapse ? <ExpandLessIcon/> : <ExpandMoreIcon/>}
        </ListItem>
            <Collapse in={openCollapse} timeout="auto" unmountOnExit>
                <List disablePadding>
                <Itemsr items={item.children} depth={depth+1}></Itemsr>
                </List>
            </Collapse>
        </React.Fragment>
        )}
        </React.Fragment>
        )));
}

return (
    <div className={classes.root}>
    <link href="https://fonts.googleapis.com/css2?family=Muli:wght@300&family=Source+Sans+Pro:wght@300&display=swap" rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/css2?family=Long+Cang&display=swap" rel="stylesheet"></link>
        <CssBaseline />
        <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
        })}
        classes={{
            paper: clsx({
                [`${classes.drawerOpen} ${classes.paperstyle}`]: open,
                [`${classes.drawerClose} ${classes.paperstyle}`]: !open,
            }),
        }}
        >
        <div>
            <div className={clsx(classes.toolbar/*,{[classes.direction]:!open}*/)}>
                <a href="/"id='logo'>
                    <img src={"graphics/logo.png"} alt='logo' height="40" width="40" className={classes.logo}></img>
                </a>
                <div style={{width:60}}></div>
                <IconButton onClick={open ? handleDrawerClose : handleDrawerOpen} className={classes.iconbutton}>
                {!open ? <ChevronRightIcon/> : <ChevronLeftIcon/>}
                </IconButton>
            </div>
            <ListItem className={clsx(classes.closehide,{[classes.hide]: !open})}>
                <Divider />
                <ListItemText >
                    <Typography gutterBottom color={'textSecondary'} className={classes.quote} align={"left"}>
                        Snow can only live in the winter. 
                        When it nears a fire, it dies. 
                        That is its life. It may yearn for summer, but, it can only
                        desire it. In my hand, the snow
                        becomes water, because this
                        is not its world...
                    </Typography>
                    <Typography className={classes.quote} color={'textSecondary'} align={"right"}>-ISSTH </Typography>
                </ListItemText>
            </ListItem>
            <Divider />
            <List id='mainsb'>
                <Itemsr items={sbitems} depth={0}></Itemsr>
            </List>
        </div>
        <div>
            <Divider/>
            <List>
                <Itemsr items={footer} depth={0}></Itemsr>
            </List>
        </div>
        </Drawer>
        <main className ={classes.content}>
            {prop.children}
        </main>
    </div>
    );
}