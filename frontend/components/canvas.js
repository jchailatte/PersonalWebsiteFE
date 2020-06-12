import { useEffect } from 'react';
import { makeStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import { useResize } from '../utils/hooks/useResize';

const useStyles = makeStyles((theme)=>(
{
    canvas: {
        position: 'absolute',
    }
}));

export default function Canvas(props) {
    const classes = useStyles();

    const dimensions = useResize(props.container);
    
    useEffect(()=>{
        if(props.bs != undefined){
            props.bs.draw({
                canvas: document.getElementById(props.id),
                ctx: document.getElementById(props.id).getContext('2d'),
                width:dimensions.width, 
                height:dimensions.height
            })
        }
    },[dimensions]);

    return(
        <canvas 
            height={dimensions.height} 
            width={dimensions.width} 
            id={props.id} 
            className={classes.canvas}
        >
        </canvas>
    )
}

Canvas.propTypes = {
    id: PropTypes.string.isRequired,
    container: PropTypes.string.isRequired,
    bs: PropTypes.object //.isRequired but due to blocking it has to be initialized as undefined for some pages
}