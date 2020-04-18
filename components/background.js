import React, {useState, Component} from 'react'
import ReactDOM from 'react-dom'
import Drawer from '../components/Drawer'
import { makeStyles, useTheme} from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=>(
{
    root: {
      display:'flex',
    },
    container: {
      height: '100vh',
      backgroundColor: '#f7f1e1',
  
      backgroundImage: `url('/graphics/homepage.gif')`,
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      backgroundSize: 'cover',
      [theme.breakpoints.up("sm")]:
      {
        backgroundPosition: 'right',
      },
      [theme.breakpoints.down('sm')]:
      {
        backgroundPosition: '80%',
      }
    },
}
));

export default function Background(props) {
  const classes = useStyles();
  
  return(
    <div className={classes.container}>
        {props.children}
    </div>
  )
}
