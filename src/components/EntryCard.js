import React, { useState } from 'react';
import { Card, Typography } from '@material-ui/core';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';
import '../style.css'
import { monthFormating } from '../services/helperFunctions'

function EntryCard({ object, img }) {

  const [favoriteClicked, setFavoriteClicked] = useState(false)

  return (
    <Card className='cardShadow'
      style={{
        height: 320,
        width: '100%',
        borderRadius: 15,
        backgroundImage: `url(${img})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        cursor: 'pointer',
      }}>
      <div style={{ display: 'flex', padding: 20 }}>
        <div>
          <Typography variant='h6' style={{ color: 'white', float: 'left', textShadow: '3px 3px 0px rgba(0,0,0,0.2)' }} >{object.date}</Typography>
          <Typography variant='caption' style={{ color: 'white', display: 'block', fontWeight: 500, textShadow: '3px 3px 0px rgba(0,0,0,0.2)' }} >{monthFormating(object.month).toUpperCase()}</Typography>
          <Typography variant='caption' style={{ color: 'white', fontWeight: 500, textShadow: '3px 3px 0px rgba(0,0,0,0.2)' }} >{object.year}</Typography>
        </div>
      </div>
      <div style={{ height: 'calc(320px - 150px)', display: 'flex', alignItems: 'flex-end', padding: 20 }}>
        <Typography style={{ color: 'white', fontWeight: 500 }} >{object.title ? object.title : 'No title'}</Typography>
      </div>
      <div style={{ backgroundColor: 'black', height: '100%', width: '100%', opacity: 1 }} />
    </Card>
  );
}

export default EntryCard;

