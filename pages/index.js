import React, {useState, Component} from 'react'

import Sidebar from '../components/sidebar'
import Background from '../components/background';

export default function Index(prop) {
    return(
        <Background height={true}>
            <Sidebar selected={'Home'}/>
        </Background>
    )
}
