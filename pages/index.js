import React, {useState, Component} from 'react'
import ReactDOM from 'react-dom'
import Drawer from '../components/Drawer'
import { makeStyles, useTheme} from '@material-ui/core/styles';

import Background from '../components/background';

export default function Index(prop) {

  return(
    <Background>
      <Drawer selected={'Home'}/>
    </Background>
  )
}
