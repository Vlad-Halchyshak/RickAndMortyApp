import React from 'react'
import clsx from 'clsx'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import {NavLink} from 'react-router-dom'




export default function Menu() {
 
  

  

  return (
    <div className="nav_container">
      <AppBar position="fixed" style={{ backgroundColor: 'lightseagreen' }}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            <nav>
              <div className="nav">
                <div activeClassName="active">
                  <NavLink to="/characters">Characters</NavLink>
                </div>
                <div activeClassName="active">
                  <NavLink to="/episodes">Episodes</NavLink>
                </div>
                <div activeClassName="active">
                  <NavLink to="/locations">Locations</NavLink>
                </div>
                <div activeClassName="active">
                  <NavLink to="/myWatchList">MyList</NavLink>
                </div>
                <div>
                  <NavLink to="/home">Home</NavLink>
                  
                </div>
              </div>
            </nav>
          </Typography>
        </Toolbar>
      </AppBar>
      <div>
        
      </div>
    </div>
  )
}
