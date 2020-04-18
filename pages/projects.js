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
import Sidebar from '../components/sidebar';

const useStyles = makeStyles((theme)=>(
{
    media:{
        height:160,
    },
    blur:{
        backdropFilter: 'blur(10px)',
    }
}));

const items=
[
    {
        text: 'Twitch Stonks',
        image: '/graphics/twitchstonks.png',
        blurb: 'Many streamers can benefit from increased chat interaction and more reasons to receive bits and cheers. TwitchStonks allows viewers to anticipate heroic plays or embarrassing fails.',
        devpost: 'https://devpost.com/software/twitchstonks',
        github: 'https://github.com/PeterYangIO/twitchcon2019',
    },
    {
        text: 'Hitch \'n Ditch',
        image: '/graphics/hitchnditch.jpg',
        blurb: 'Hitch \'n Ditch allows users to have the freedom of a car sharing service such as Maven or Zipcar but further aims to reduce congestion by utilizing "last mile delivery". Rather than giving the user full autonomy, within the last mile of driving, the user will be prompted to pick up the next person to drive the car.',
        devpost: 'https://devpost.com/software/hitch-n-ditch',
        github: 'https://github.com/jchailatte/Hitch-n-Ditch'
    },
    {
        text: 'Streamer Trivia',
        image: '/graphics/streamertrivia.jpg',
        blurb: 'We wanted to help broadcasters engage with their viewers. We decided that a Family Feud style game would be a super fun way for broadcasters to get viewers involved in their stream.',
        note: 'Note: This was my first Hackathon so pardon the code...it\'s awful',
        devpost: 'https://devpost.com/software/streamer-trivia',
        github: 'https://github.com/jchailatte/StreamerTrivia',
    },

    
];

export default function Projects(prop) {
    const classes = useStyles();

    function Projectsr()
    {
        return(
        items.map((item,index)=>(
            <React.Fragment key={item.text}>
            <Grid item xs={4}>
                <Card>
                    <CardActionArea disabled>
                        <CardMedia
                        className={classes.media}
                        image={item.image}
                        title={item.text}
                        />
                        <CardContent>
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
                        <Button size="small" color="primary" href={item.devpost}>
                            Learn More
                        </Button>
                        <Button size="small" color="primary" href={item.github}>
                            GitHub
                        </Button>
                    </CardActions>
                    </Card>
                </Grid>
            </React.Fragment>
        )));
    }

    return(
        <Background blur={true} height={true}>  
        <Sidebar selected={'Projects'}>
            <Grid container spacing={3} >
                <Projectsr items={items}></Projectsr>
            </Grid>
        </Sidebar>
        </Background>
    )
};
