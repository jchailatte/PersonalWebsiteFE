import React from 'react'
import HomeIcon from "@material-ui/icons/Home";
import ReceiptIcon from "@material-ui/icons/Receipt";
import CodeIcon from "@material-ui/icons/Code";
import PersonIcon from "@material-ui/icons/Person";
import GithubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

//https://github.com/jsmanifest/modern-sidebar

function onClick(e, item) {
    window.alert(JSON.stringify(item, null, 2));
  }

const items = [
    { name: "about", label: "About", Icon: PersonIcon },
    {
      name: "projects",
      label: "Projects",
      Icon: CodeIcon,
    },
    "divider",
    {
      name: "github",
      label: "GitHub",
      Icon: GithubIcon,
      onClick(){window.location.replace("https://github.com/jchailatte")},
    },
    {
      name: "linkedin",
      label: "LinkedIn",
      Icon: LinkedInIcon,
      onClick(){window.location.replace("https://www.linkedin.com/in/jchailatte/")},
    }
  ];

  export default items;