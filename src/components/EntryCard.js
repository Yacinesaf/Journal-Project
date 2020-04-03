import React from 'react';
import { Card, Typography } from '@material-ui/core';
import '../style.css'

function EntryCard({ object }) {


  return (
    <Card className='cardShadow'
      style={{
        height: 280,
        width: '100%',
        borderRadius: 15,
        backgroundImage: `url(${object.img})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        cursor: 'pointer',
      }}>
      <div style={{backgroundColor : 'rgba(0,0,0,.3)'}}>
        <div style={{ display: 'flex', padding: 20 }}>
          <div>
            <Typography variant='h6' style={{ color: 'white', float: 'left', textShadow: '3px 3px 0px rgba(0,0,0,0.2)' }} >{object.date.day}</Typography>
            <Typography variant='caption' style={{ color: 'white', display: 'block', fontWeight: 500, textShadow: '3px 3px 0px rgba(0,0,0,0.2)' }} >{object.date.month.toUpperCase()}</Typography>
            <Typography variant='caption' style={{ color: 'white', fontWeight: 500, textShadow: '3px 3px 0px rgba(0,0,0,0.2)' }} >{object.date.year}</Typography>
          </div>
        </div>
        <div style={{ height: 'calc(280px - 150px)', display: 'flex', alignItems: 'flex-end', padding: 20, }}>
          <Typography style={{ color: 'white', fontWeight: 500, textOverflow: 'ellipsis', overflow: 'hidden', textAlign : 'left', whiteSpace: 'nowrap',  maxWidth : 200, maxHeight : 25 }} >{object.title ? object.title : 'No title'}</Typography>
        </div>
        <div style={{ backgroundColor: 'black', height: '100%', width: '100%', opacity: 1 }} />
      </div>
    </Card>
  );
}

export default EntryCard;

