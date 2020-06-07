import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import Sidebar from '../components/sidebar';

const useStyles = makeStyles((theme)=>(
{
    media:{
        height:170,
    },    
    grow:{
        display: 'flex',
        flexGrow: 1,
        justifyContent: 'space-between'
    }
}));

const items=
[
    {
        text: 'CS@SC Summer Camps',
        image: '/graphics/summercamp.png',
        blurb: 'Capstone Project(legacy from 2016). Added to and fixed(aka deleted) parts of the backend and migrated the WordPress site to another server (which had a firewall yay).',
        note: 'Note: Can\'t really see much that I did on the site as all the functionalities require an account but I spent way to many hours to not include this project.',
        button1: 'Go to',
        button2: '',
        href1: 'https://summercamp.usc.edu/',
    },
    {
        text: 'Twitch Stonks',
        image: '/graphics/twitchstonks.png',
        blurb: 'Many streamers can benefit from increased chat interaction and more reasons to receive bits and cheers. TwitchStonks allows viewers to anticipate heroic plays or embarrassing fails. Play stocks with your favorite streamers with none of the risk.',
        button1: 'Devpost',
        button2: 'GitHub',
        href1: 'https://devpost.com/software/twitchstonks',
        href2: 'https://github.com/PeterYangIO/twitchcon2019',
    },
    {
        text: 'I\'m Hungry',
        image: '/graphics/imhungry.png',
        blurb: 'Software Engineering class project. A Yelp like application that allows the user to query a type of food and it will return various recipes as well as nearby restaurants within the desired distance.',
        button1: 'Github',
        button2: '',
        href1: 'https://github.com/jchailatte/ImHungry-Agile-',
    },
    {
        text: 'Hitch \'n Ditch',
        image: '/graphics/hitchnditch.jpg',
        blurb: 'Hitch \'n Ditch allows users to have the freedom of a car sharing service such as Maven or Zipcar but further aims to reduce congestion by utilizing "last mile delivery". Rather than giving the user full autonomy, within the last mile of driving, the user will be prompted to pick up the next person to drive the car.',
        button1: 'Devpost',
        button2: 'GitHub',
        href1: 'https://devpost.com/software/hitch-n-ditch',
        github: 'https://github.com/jchailatte/Hitch-n-Ditch',
    },
    {
        text: 'Streamer Trivia',
        image: '/graphics/streamertrivia.jpg',
        blurb: 'We wanted to help broadcasters engage with their viewers. We decided that a Family Feud style game would be a super fun way for broadcasters to get viewers involved in their stream.',
        note: 'Note: This was my first Hackathon so pardon the code...it\'s awful',
        button1: 'Devpost',
        button2: 'GitHub',
        href1: 'https://devpost.com/software/streamer-trivia',
        github: 'https://github.com/jchailatte/StreamerTrivia',
    },
];

function ProjectContent(prop) {
    const classes = useStyles();

    function Projectsr()
    {
        return(
        items.map((item,index)=>(
            <React.Fragment key={item.text}>
            <Grid item xs={12} sm={6} md={4} lg={4} className={classes.grow}>
                <Card >
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
            </Grid>
            </React.Fragment>
        )));
    }

    return(
        <Grid container spacing={3}>
            <Projectsr items={items}></Projectsr>
        </Grid>
    )
};

export default function Projects(props)
{
    return(
        <Sidebar 
            selected={'Projects'} 
            blur={true}
            quote={"Having confidence doesn't guarentee success, but you will definitely fail if you lack it!"}
            by={"Long Live Summons!!"}
        >
            <ProjectContent></ProjectContent>
        </Sidebar>
    )
}