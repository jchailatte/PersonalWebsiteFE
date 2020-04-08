import React, {useState, Component} from 'react'
import ReactDOM from 'react-dom'

import bg from '../graphics/homepage.gif'
import bgstyle from '../css/background.module.css'

import Sidebar from '../components/sidebar'
import items from '../components/sbitems'

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
          </div>
        )
    }
}

export default Index;