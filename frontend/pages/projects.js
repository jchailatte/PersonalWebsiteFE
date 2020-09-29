import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import Deck from '../components/deck';

const useStyles = makeStyles((theme)=>(
{
    fontstyle:{
        color: 'white',
        textShadow: '0 0 5px black, 0 0 5px black', 
        fontFamily: "'Caveat', cursive"
    },
    spacing: {
        paddingTop: '5vh'
    }
}));

const freelance =
[  
    {
        text: 'Booth Technologies',
        image: '/graphics/boothtech.jpg',
        blurb: "Current freelance project that I'm working on where I'm basically rewriting their entire mobile MVP ;)",
        note: 'Link goes to their current product',
        button1: 'Go to',
        button2: '',
        href1: 'https://booth-frontend.herokuapp.com/'
    },
];

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

export async function getStaticProps(context){
    return{
        props:{
            selected: 'Projects',
            blur: true,
            quote: "Having confidence doesn't guarentee success, but you will definitely fail if you lack it!",
            by: "Long Live Summons!!"
        }
    }
}

export default function Project(prop) {
    const classes = useStyles();

    return(
        <React.Fragment>
            <Typography variant="h3" className={classes.fontstyle}>
                Freelance
            </Typography>
            <Deck
                items={freelance}
                serial={1}
            >
            </Deck>
            <Typography variant="h3" className={`${classes.fontstyle} ${classes.spacing}`}>
                Projects
            </Typography>
            <Deck
                items={items}
                serial={2} 
            ></Deck>
        </React.Fragment>
    )
};
