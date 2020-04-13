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
      backgroundPosition: 'right',
      backgroundSize: 'cover',
    },
}
));

export default function Index(prop) {
  const classes = useStyles();
  
  return(
    <div className={classes.container}>\
      <Drawer selected={'Home'}/>
    </div>
  )
}
