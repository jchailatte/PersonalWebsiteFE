import React, {useState, Component} from 'react'
import clsx from 'clsx';
import { makeStyles, useTheme} from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=>(
{
    container: {
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
    height:{
        height:'100vh',
    },
    blur:{
        backdropFilter: 'blur(10px)',
    }
}
));

export default function Background(props) {
  const classes = useStyles();
  
  console.log(props.blur);
  return(
    <div className={clsx(classes.container)}>
        <div className={clsx({[classes.height]:props.height},{[classes.blur]: props.blur})}>
        {props.children}
        </div>
    </div>
  )
}