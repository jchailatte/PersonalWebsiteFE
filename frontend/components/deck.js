import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import Canvas from '../components/canvas';
import Brushstroke from '../components/brushengine/brushstroke';

const useStyles = makeStyles((theme)=>(
{
    media:{
        height:170,
    },    
    grow:{
        display: 'flex',
        justifyContent: 'space-between',
    }
}));

export default function Deck(props){
    const classes = useStyles();

    const bs = new Brushstroke({
        color: '#FFFFFF',
        inkAmount: 20,
        size: 45,
        lifting: true,
        duration: 0.5,
        padding: 15
    });

    return (
        <Grid container spacing={3}>
        {props.items.map((item,index)=>(
        <Grid item xs={12} sm={6} md={4} lg={4} className={classes.grow} key={index}>
            <Canvas 
                id={"card_canvas"+index +props.serial}
                container={"container"+index + props.serial}
                bs={bs}
            ></Canvas>
            <Card style={{background: 'none'}} id={"container"+index+props.serial}>
                <CardActionArea disabled style={{height:'90%'}}>
                    <CardMedia
                        className={classes.media}
                        image={item.image}
                        title={item.text}
                    />
                    <CardContent style={{height: '60%'}}>
                        <Typography gutterBottom variant="h5" component="h2">
                            {item.text}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {item.blurb}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            <br></br>
                            {item.note}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary" href={item.href1} disabled={item.button1==''}>
                        {item.button1}
                    </Button>
                    <Button size="small" color="primary" disabled={item.button2==''}>
                        {item.button2}
                    </Button>
                </CardActions>
            </Card>
        </Grid>))}
    </Grid>
    )
}