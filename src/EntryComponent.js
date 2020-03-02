import React, { useState } from 'react';
import { Card, Typography } from '@material-ui/core';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';
import './css.css'

function EntryComponent({ object }) {

  const [favoriteClicked, setFavoriteClicked] = useState(false)


  return (
    <Card className='cardShadow' style={{ height: 320, width: 200, borderRadius: 15, backgroundColor: 'black', cursor : 'pointer' }}>
      <div style={{ display: 'flex', padding: 20}}>
        <div>
          <Typography variant='subtitle1' style={{ color: 'white' }} >{object.date}</Typography>
          <Typography variant='caption' style={{ color: 'white', display: 'block', fontWeight : 500 }} >{(object.month).toUpperCase()}</Typography>
          <Typography variant='caption' style={{ color: 'white', fontWeight : 500 }} >{object.year}</Typography>
        </div>
        <div onClick={()=> setFavoriteClicked(!favoriteClicked)} style={{paddingTop : 5, paddingLeft : 'calc((200px - 90px))'}}>
          {favoriteClicked ? <StarIcon fontSize='small' style={{ color: 'white', cursor : 'pointer' }} /> : <StarBorderIcon fontSize='small' style={{ color: 'white', cursor : 'pointer' }} />}
        </div>
      </div>
      <div style={{height : 'calc(320px - 150px)', display: 'flex', alignItems : 'flex-end', padding : 20}}>
        <Typography style={{color : 'white', fontWeight : 500}} >{object.title ? object.title : 'No title'}</Typography>
      </div>
    </Card>
  );
}

export default EntryComponent;