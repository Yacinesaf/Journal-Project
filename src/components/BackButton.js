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
      {['/', '/entries', '/login', '/signup'].includes(location.pathname) || !store.getState().user.id ? null :
        <ArrowBackIosIcon
          onClick={() => history.push('/entries')}
          fontSize={smDown ? '' : 'large'}
          style={{
            color: 'rgb(82, 84, 170)',
            paddingLeft: 25,
            position: "absolute",
            top: smDown ? 20 : 100,
            cursor: 'pointer'
          }} />
      }
    </div>
  );
}

export default BackButton;