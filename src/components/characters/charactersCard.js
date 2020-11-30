import { makeStyles } from '@material-ui/core/styles'
import Popover from '@material-ui/core/Popover'
import Typography from '@material-ui/core/Typography'

import React from 'react'


const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
}))
export const Card = ({ character }) => {
  
  
    const classes = useStyles()
    const [anchorEl, setAnchorEl] = React.useState(null)

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
      setAnchorEl(null)
    }

    const open = Boolean(anchorEl)
    const id = open ? 'simple-popover' : undefined
  
  return (
    <div className="character_container">
      <p>{character.name}</p>
      <img src={character.image} onClick={handleClick} />

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
      >
        <Typography className="Popup_window">
          <ul style={{listStyleType: 'none'}}>
            <li>№{character.id}</li>
            <li>Gender:  {character.gender}</li>
            <li>Status:  {character.status}</li>
            <li>Species: {character.species}</li>
            <li>Url: {character.url}</li>
            <li>Created: {character.created}</li>
            <li>Location: {character.location.name}</li>
            <li>Origin: {character.origin.name}</li>
           
          </ul>
        </Typography>
      </Popover>
    </div>
  )

}