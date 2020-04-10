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

// import { ThemeProvider } from '@material-ui/styles';
// import { createMuiTheme } from '@material-ui/core/styles';
// import purple from '@material-ui/core/colors/purple';
// import green from '@material-ui/core/colors/green';


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
  }
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

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={open ? handleDrawerClose : handleDrawerOpen}>
            {!open ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem button key={"Home"} selected={prop.selected == 'Home'}>
            <ListItemIcon><HomeIcon/></ListItemIcon>
            <ListItemText primary={"Home"}/>
          </ListItem>
          <ListItem button key={"About"} selected={prop.selected == 'About'}>
            <ListItemIcon><AccountBoxIcon/></ListItemIcon>
            <ListItemText primary={"About"}/>
          </ListItem>
          <ListItem button key={"Projects"} selected={prop.selected == "Projects"}>
            <ListItemIcon><CodeIcon/></ListItemIcon>
            <ListItemText primary={"Projects"}/>
          </ListItem>
          <ListItem button key={"Rooms"} selected={prop.selected == "Rooms"}>
            <ListItemIcon><MeetingRoomIcon/></ListItemIcon>
            <ListItemText primary={"Rooms"}/>
          </ListItem>
          <ListItem button key={"Thoughts"} selected = {prop.selected == "Thoughts"}>
            <ListItemIcon><ForumIcon/></ListItemIcon>
            <ListItemText primary={"Thoughts"}/>
          </ListItem>
          <ListItem button onClick={handleOpenSetting}>
            <ListItemIcon><HomeIcon/></ListItemIcon>
            <ListItemText primary="Riot" />
              {openCollapse ? <ExpandLessIcon/> : <ExpandMoreIcon/>}
          </ListItem>
          <Collapse in={openCollapse} timeout="auto" unmountOnExit>
          <List disablePadding>
            <Divider variant={'middle'}  className={{[classes.hide]: open}}/>
              <ListItem button className={{[classes.nested]: open,}}>
                <ListItemIcon><HomeIcon /></ListItemIcon>
                <ListItemText primary="League of Legends" />
              </ListItem>
              <ListItem button className={{[classes.nested]: open}}>
                <ListItemIcon><HomeIcon/></ListItemIcon>
                <ListItemText primary="Teamfight Tactics"/>
              </ListItem>
            </List>
          </Collapse>
        </List>
        <Divider />
        <List>
          <ListItem button component='a' href={"https://github.com/jchailatte"} key={"GitHub"}>
            <ListItemIcon><GithubIcon/></ListItemIcon>
            <ListItemText primary={"GitHub"}/>
          </ListItem>
          <ListItem button component='a' href={"https://www.linkedin.com/in/jchailatte/"} key={"LinkedIn"}>
            <ListItemIcon><LinkedInIcon/></ListItemIcon>
            <ListItemText primary={"LinkedIn"}/>
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}