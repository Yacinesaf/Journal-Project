import React from 'react';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useHistory, useLocation } from 'react-router-dom'
import store from '../reduxStore/store';

function BackButton(props) {
  const history = useHistory()
  const location = useLocation()
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <div>
      {location.pathname === '/entries' || !store.getState().user.id ? null :
        <ArrowBackIosIcon
          onClick={() => history.push('/entries')}
          fontSize='large'
          style={{
            color: 'rgb(82, 84, 170)',
            paddingLeft: 25,
            position: "absolute",
            top: smDown ? 30 : 100,
            cursor: 'pointer'
          }} />
      }
    </div>
  );
}

export default BackButton;