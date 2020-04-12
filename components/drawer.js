import React from 'react';
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
    background: '#DBCDC6',
  },
  drawerOpen: {
    [theme.breakpoints.up('md')]:{
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      })},
    [theme.breakpoints.down('md')]:
    {
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
    [theme.breakpoints.down('md')]:
    {
      pointerEvents: 'none',
      opacity: '0.4',
    },
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
  hide: {
    opacity: 0,
  }, 
  iconcolor:{
  },
  fontstyle:{
    fontFamily: "'Karla', sans-serif",
    fontSize: '18px',
  },
}));

export default function MiniDrawer(prop) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [openCollapse, setOpenCollapse] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleOpenSetting = () => { 
    setOpenCollapse(!openCollapse);
  }

  const sbitems =
  [
    {
      text: 'Home',
      icon: <HomeIcon/>
    },
    {
      text: 'About',
      icon: <AccountBoxIcon/>
    },
    {
      text: 'Projects',
      icon: <CodeIcon/>
    },
    {
      text: 'Rooms',
      icon: <MeetingRoomIcon/>
    },
    {
      text: 'Thoughts',
      icon: <ForumIcon/>
    },
    {
      text: 'Riot',
      icon: <HomeIcon/>,
      nested: true,
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

  function Itemsr({items})
  {
    return(
    items.map((item,index) => (
      <React.Fragment>
      {!item.nested ? (
          <ListItem button component='a' href={item.href} key={item.text} selected={prop.selected == item.text}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} className={classes.fontstyle} disableTypography></ListItemText>
          </ListItem>
        ):(
        <>
          <ListItem button onClick={handleOpenSetting}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} className={classes.fontstyle} disableTypography/>
            {openCollapse ? <ExpandLessIcon/> : <ExpandMoreIcon/>}
          </ListItem>
          <Collapse in={openCollapse} timeout="auto" unmountOnExit>
            <List disablePadding>
              <Divider variant={'middle'}  className={{[classes.hide]: open}}/>
              <Itemsr items={item.children}></Itemsr>
            </List>
          </Collapse>
        </>
      )}
      </React.Fragment>
    )));
  }

  return (
    <div className={classes.root}>
      <link href="https://fonts.googleapis.com/css2?family=La+Belle+Aurore&display=swap" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css2?family=Karla&family=La+Belle+Aurore&display=swap" rel="stylesheet"></link>
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
            <IconButton onClick={open ? handleDrawerClose : handleDrawerOpen}>
              {!open ? <ChevronRightIcon className={classes.iconcolor} /> : <ChevronLeftIcon className={classes.iconcolor} />}
            </IconButton>
          </div>
          <Divider />
          <List>
            <Itemsr items={sbitems}></Itemsr>
          </List>
        </div>
        <div>
          <Divider/>
          <List>
            <Itemsr items={footer}></Itemsr>
          </List>
        </div>
      </Drawer>
    </div>
  );
}