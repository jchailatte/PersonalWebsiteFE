import React, {useState, Component} from 'react'
import clsx from 'clsx';
import { makeStyles, useTheme} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

import Background from '../components/background';
import Drawer from '../components/drawer';

const useStyles = makeStyles((theme)=>(
{
    media:{
        height:160,
    }
}));

export default function Projects(prop) {
    const classes = useStyles();

    return(
      <Background className={classes.root}>
        <Drawer selected={'Projects'}>
            <Grid container spacing={3} >
                <Grid item xs={4}>
                <Card className={classes.root}>
                    <CardActionArea disabled>
                        <CardMedia
                        className={classes.media}
                        image='/graphics/twitchstonks.png'
                        title="TwitchStonks"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                            Twitch Stonks
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                            Many streamers can benefit from increased chat interaction and more reasons to receive bits and cheers. 
                            TwitchStonks allows viewers to anticipate heroic plays or embarrassing fails.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" href={'https://devpost.com/software/twitchstonks'}>
                        Learn More
                        </Button>
                        <Button size="small" color="primary" href={'https://github.com/PeterYangIO/twitchcon2019'}>
                            GitHub
                        </Button>
                    </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Drawer>
      </Background>
    )
};
