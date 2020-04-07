import React, {useState, Component} from 'react'
import ReactDOM from 'react-dom'

import bg from '../graphics/homepage.gif'
import bgstyle from '../css/background.module.css'

import Sidebar from '../components/sidebar'
import items from '../components/items'

class Index extends Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return(
          <div className={bgstyle.container}>
            <Sidebar items={items}/>
            <img src={bg} className={bgstyle.styling}></img>
          </div>
        )
    }
}

export default Index;