import clsx from 'clsx';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import Collapse from '@material-ui/core/Collapse';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

import AccountBoxIcon from '@material-ui/icons/AccountBox';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import CodeIcon from '@material-ui/icons/Code';
import CopyrightIcon from '@material-ui/icons/Copyright';
import DescriptionIcon from '@material-ui/icons/Description';
import EmailIcon from '@material-ui/icons/Email';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ForumIcon from '@material-ui/icons/Forum';
import GithubIcon from '@material-ui/icons/GitHub';
import HomeIcon from '@material-ui/icons/Home';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoomRounded';

import { useOpen } from '../utils/hooks/useOpen';

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
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            })
        },
        [theme.breakpoints.down('sm')]: {
            width: theme.spacing(7) +1,
        },
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
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
        [theme.breakpoints.down('sm')]: {
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
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        }
    },
    iconbutton:{
        [theme.breakpoints.down('sm')]: {
            pointerEvents: 'none',
            opacity: '0.4',
        },
    },
    fontstyle:{
        fontFamily: "'Rock Salt', cursive",
        fontWeight: 'bold',
        fontSize: '14px',
    },
    quote:{
        whiteSpace:'normal',
        fontFamily:"'Raleway', sans-serif",
        fontSize: '14px',
    },
    logo:{
        marginTop: '10px',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    blur:{
        backdropFilter: 'blur(10px)',
        minHeight: '100vh'
    },
    title:{
        width:140,
        textAlign:'center',
        fontFamily: "'Rock Salt', cursive",
        fontWeight: 'bold',
        fontSize: '20px'
    }
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
        icon: <AccountBoxIcon/>,
        href: '/about',
    },
    {
        text: 'Resume',
        icon: <DescriptionIcon/>,
        href: '/resume',
    },
    {
        text: 'Projects',
        icon: <CodeIcon/>,
        href: '/projects',
    },
    {
        text: 'Contact Me',
        icon: <EmailIcon/>,
        href: '/contact',
    },
    // {
    //     text: 'Blog',
    //     icon: <ForumIcon/>,
    //     href: '/',
    //     disable: true
    // },
    // {
    //     text: 'Rooms',
    //     icon: <MeetingRoomIcon/>,
    //     href: '/',
    //     disable: true
    // },
    // {
    //     text: 'Riot',
    //     icon: <HomeIcon/>,
    //     nested: true,
    //     disable: true,
    //     children: 
    //     [
    //         {
    //             text: 'League of Legends',
    //             icon: <HomeIcon/>
    //         },
    //         {
    //             text: 'TeamFight Tactics',
    //             icon: <HomeIcon/>
    //         }
    //     ]
    // }
];

const footer =
[
    {
        text: 'GitHub',
        icon: <GithubIcon/>,
        href: 'https://github.com/jchailatte',
        target: "_blank"
    },
    {
        text: 'LinkedIn',
        icon: <LinkedInIcon/>,
        href: 'https://www.linkedin.com/in/jchailatte/',
        target: "_blank"
    }
];

export default function Sidebar(prop) {
    const classes = useStyles();
    const [openCollapse, setOpenCollapse] = React.useState(false);

    const { open, handleDrawerOpen, handleDrawerClose } = useOpen();

    const handleOpenSetting = () => { 
        setOpenCollapse(!openCollapse);
    }

// function Itemsr({items,depth})
// {
//     return(
//         items.map((item,index) => (
//         <React.Fragment key={item.text}>
//         {!item.nested ? (

//         ):(
//         <React.Fragment key={item.text}>
//         <ListItem button onClick={handleOpenSetting} disabled={item.disable}>
//             <ListItemIcon>{item.icon}</ListItemIcon>
//             <ListItemText primary={item.text} className={classes.fontstyle} disableTypography/>
//             {openCollapse ? <ExpandLessIcon/> : <ExpandMoreIcon/>}
//         </ListItem>
//             <Collapse in={openCollapse} timeout="auto" unmountOnExit>
//                 <List disablePadding>
//                 <Itemsr items={item.children} depth={depth+1}></Itemsr>
//                 </List>
//             </Collapse>
//         </React.Fragment>
//         )}
//         </React.Fragment>
//         )));
// }

return (
    <div className={classes.root}>
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
            <div className={classes.toolbar}>
                <Link href="/">
                    <img src={"graphics/logo.png"} alt='logo' height="40" width="40" className={classes.logo}></img>
                </Link>
                <div className={classes.title}>Ceus</div>
                <IconButton onClick={open ? handleDrawerClose : handleDrawerOpen} className={classes.iconbutton}>
                    {!open ? <ChevronRightIcon/> : <ChevronLeftIcon/>}
                </IconButton>
            </div>
            <ListItem className={clsx(classes.closehide,{[classes.hide]: !open})}>
                <Divider />
                <ListItemText >
                    <Typography gutterBottom color={'textSecondary'} className={classes.quote} align={"left"}>
                    {prop.quote}
                    </Typography>
                    <Typography className={classes.quote} color={'textSecondary'} align={"right"}> -{prop.by} </Typography>
                </ListItemText>
            </ListItem>
            <Divider />
            <List id='mainsb'>
                {sbitems.map((item,index)=>(
                    <Link href={item.href} key={index}>
                        <ListItem button component='a'
                            selected={item.text===prop.selected}
                            className={classes.opennested}
                            disabled={item.disable}
                        >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText 
                                disableTypography 
                                primary={item.text} 
                                className={classes.fontstyle}
                            >
                            </ListItemText>
                        </ListItem>
                    </Link>
                ))}
            </List>
        </div>
        <div>
            <Divider/>
            <List>
                {footer.map((item, index)=>(
                    <ListItem button component='a' 
                        href={item.href} 
                        target={item.target}
                        selected={item.text === prop.selected} 
                        className={classes.opennested}
                        disabled={item.disable}
                        key={index}
                    >
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.text} className={classes.fontstyle} disableTypography></ListItemText>
                    </ListItem>
                ))}
                <ListItem>
                    <ListItemIcon><CopyrightIcon fontSize="small"/></ListItemIcon>
                    <ListItemText>
                        <Typography color={'textSecondary'}>2020 Jonathan Chai</Typography>
                    </ListItemText>
                </ListItem>
            </List>
        </div>
        </Drawer>
        <main id="content" className ={clsx(classes.content,{[classes.blur]:prop.blur})}>
            {prop.children}
        </main>
    </div>
    );
}

Sidebar.propTypes = {
    selected: PropTypes.string,
    quote: PropTypes.string,
    by: PropTypes.string,
    blur: PropTypes.bool,
}