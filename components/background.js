import clsx from 'clsx';
import { makeStyles} from '@material-ui/core/styles';

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
        minHeight:'100vh',
    },
}));

export default function Background(props) {
  const classes = useStyles();
  
  return(
    <div className={clsx(classes.container,{[classes.height]:props.height})}>
        {props.children}
    </div>
  )
}