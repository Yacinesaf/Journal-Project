import React from 'react';
import img from '../assets/aboutImg.svg'
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Typography, Grid } from '@material-ui/core';
import { getParagraph } from '../services/apiEndpoints';

function Aboutus(props) {
  const theme = useTheme();
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));
  const lgUp = useMediaQuery(theme.breakpoints.up('lg'));
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const [lorem, setLorem] = React.useState(null)

  React.useEffect(() => {
    if (!lorem) {
      getParagraph().then(res => {
        return setLorem(res)
      })
    }
  })

  return (
    <div>
      : <Grid className='appBackground' container justify='center' alignContent='flex-start' style={{ paddingTop: 100 }}>
        <Grid item xs={12}>
          <Grid container justify='center' alignContent='center'>
            <Grid item xs={10} lg={5} style={{ paddingRight: mdDown ? 0 : 50, paddingBottom: smDown ? 40 : 0 }}>
              <Typography variant={smDown ? 'h5' : 'h4'} style={{ fontWeight: 450 }}>About us</Typography>
              <Typography variant={mdDown ? 'body1' : 'h6'} style={{ textAlign: 'left', paddingTop: 20 }} >
                {lorem}
              </Typography>
            </Grid>
            {smDown ? null
              : <Grid item md={10} lg={5} style={{ display: 'flex', justifyContent: 'center' }}>
                <div className={lgUp ? 'floating' : ''} style={lgUp ? {
                  position: "fixed",
                  backgroundImage: `url(${img})`,
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'contain',
                  height: 500,
                  width: 600,
                  top: 200,
                  float: 'right'
                }
                  :
                  {
                    backgroundImage: `url(${img})`,
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'contain',
                    height: 500,
                    width: 600,
                  }} />
              </Grid>}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Aboutus;