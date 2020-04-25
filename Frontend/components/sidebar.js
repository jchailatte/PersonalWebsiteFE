import clsx from 'clsx';
import { makeStyles} from '@material-ui/core/styles';
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
import EmailIcon from '@material-ui/icons/Email';

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
        [theme.breakpoints.up('sm')]:{
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            })
        },
        [theme.breakpoints.down('sm')]:{
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
        [theme.breakpoints.down('sm')]:
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
        [theme.breakpoints.down('sm')]:
        {
            display: 'none',
        }
    },
    iconbutton:{
        [theme.breakpoints.down('sm')]:
        {
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
        fontWeight: 'bold',
        fontFamily:"'Shadows Into Light', cursive",
        
        fontSize: '16px',
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
        text: 'Projects',
        icon: <CodeIcon/>,
        href: '/projects',
    },
    {
        text: 'Contact Me',
        icon: <EmailIcon/>,
        disable: true,
    },
    {
        text: 'Rooms',
        icon: <MeetingRoomIcon/>,
        disable: true
    },
    {
        text: 'Thoughts',
        icon: <ForumIcon/>,
        disable: true
    },
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
        <ListItem button component='a' href={item.href} target={item.target}
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
    <link href="https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap" rel="stylesheet"></link>
    <link href="https://fonts.googleapis.com/css2?family=Rock+Salt&display=swap" rel="stylesheet"></link>
    <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap" rel="stylesheet"></link>
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
            <div className={classes.toolbar}>
                <a href="/" id='logo'>
                    <img src={"graphics/logo.png"} alt='logo' height="40" width="40" className={classes.logo}></img>
                </a>
                <div className={classes.title}>CaeCeus</div>
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
                    <Typography className={classes.quote} color={'textSecondary'} align={"right"}>-{prop.by} </Typography>
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
        <main className ={clsx(classes.content,{[classes.blur]:prop.blur})}>
            {prop.children}
        </main>
    </div>
    );
}