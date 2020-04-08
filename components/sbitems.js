import React from 'react'
import CodeIcon from "@material-ui/icons/Code";
import PersonIcon from "@material-ui/icons/Person";
import GithubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MeetingRoomIcon from "@material-ui/icons/MeetingRoomRounded";
import ForumIcon from "@material-ui/icons/Forum";

//https://github.com/jsmanifest/modern-sidebar

function onClick(e, item) {
    window.alert(JSON.stringify(item, null, 2));
  }

const items = [
    { name: "about", 
      label: "About", 
      Icon: PersonIcon },
    {
      name: "projects",
      label: "Projects",
      Icon: CodeIcon,
    },
    { name: "riot", label: "Riot", 
      items: [
        { name: "league", label: "League of Legends", onClick },
        { name: "tft", label: "Teamfight Tactics", onClick }
      ],
    },
    {
      name: "rooms",
      label: "Rooms",
      Icon: MeetingRoomIcon,
    },
    {
      name: "thoughts",
      label: "Thoughts",
      Icon: ForumIcon,
    },
    "divider",
    {
      name: "github",
      label: "GitHub",
      Icon: GithubIcon,
      onClick(){window.location.assign("https://github.com/jchailatte")},
    },
    {
      name: "linkedin",
      label: "LinkedIn",
      Icon: LinkedInIcon,
      onClick(){window.location.assign("https://www.linkedin.com/in/jchailatte/")},
    }
  ];

  export default items;