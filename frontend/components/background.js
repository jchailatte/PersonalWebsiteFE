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
        minHeight:'100vh',
        [theme.breakpoints.up("md")]: {
            backgroundPosition: 'right',
        },
        [theme.breakpoints.down('md')]: {
            backgroundPosition: '80%',
        }
    }
}));

export default function Background(props) {
  const classes = useStyles();
  
  return(
    <div className={classes.container}>
        {props.children}
    </div>
  )
}