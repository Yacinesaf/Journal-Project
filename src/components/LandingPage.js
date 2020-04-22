import React from 'react';
import bgImg1 from '../assets/landingPage1.png'
import firstAsset from '../assets/landingAsset1.svg'
import secondAsset from '../assets/landingAsset2.svg'
import thirdAsset from '../assets/landingAsset3.svg'
import { Grid, Typography, Button } from '@material-ui/core';
import '../style.css'
import { Link } from "react-router-dom";
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

function LandingPage() {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const xsOnly = useMediaQuery(theme.breakpoints.only('xs'));
  const smOnly = useMediaQuery(theme.breakpoints.only('sm'));

  return (
    <div>
      <Grid container
        justify='center'
        alignItems='center'
        style={{
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundImage: `url(https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80)`,
          width: '100%',
          height: '100vh'
        }}>
        <Grid item xs={11} md={6} style={{ textAlign: 'center' }}>
          <Typography variant={smDown ? 'h6' : 'h4'} style={{ color: 'white' }} >WRITE IT. READ IT.</Typography>
          <Typography variant={smDown ? 'h4' : 'h3'} style={{ color: 'white', paddingBottom: 20 }} >RELIVE YOUR LIFE</Typography>
          <Link to='/signup' style={{ textDecoration: 'none' }}>
            <Button className='buttonStyle ' variant='contained' style={{ backgroundColor: '#5459f4', fontSize: smDown ? 16 : 26, padding: smDown ? '6px 12px' : '8px 25px', boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)' }}>Sign up Now</Button>
          </Link>
        </Grid>
      </Grid>
      <div style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(${bgImg1})`,
        width: '100%',
      }}>
        <Grid container
          style={{ height: xsOnly ? '100vh' : (smOnly ? '50vh' : '70vh') }}
          justify='center'
          alignItems='center'>
          <Grid item xs={11} sm={5} md={6} lg={5} xl={4} style={{ padding: 20 }}>
            <Typography style={{ color: 'white', fontSize: smDown ? 12 : 18, }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna sapien, imperdiet at ligula id, semper tincidunt ipsum.
              Pellentesque vestibulum dui mi, at luctus arcu aliquam vitae. Maecenas vulputate velit eget ante bibendum, a commodo leo ullamcorper.
              Morbi id varius velit. Sed luctus malesuada porttitor. Proin faucibus est viverra neque tempor euismod.
              Duis hendrerit a mauris feugiat tincidunt. Maecenas risus sapien, hendrerit vel mollis quis, ultricies vitae justo.
              Aliquam fringilla aliquet dapibus. Vestibulum euismod tristique enim, sed sagittis sem blandit eget.
              Etiam molestie enim pharetra ornare finibus. Nam ac condimentum ligula. In hac habitasse platea dictumst.
              Curabitur nec maximus sem. Aliquam dignissim ut ipsum accumsan lobortis. Duis pretium magna sed lacus mollis,
              maximus vulputate orci venenatis. Nunc iaculis suscipit consequat. Fusce quis felis elit. Nunc hendrerit,
              risus sed mattis tempus, elit orci efficitur urna, quis efficitur urna ligula eu ante. Ut eu nisi at quam posuere molestie sed id mauris.
    </Typography>
          </Grid>
          <Grid className='floating' item xs={11} sm={6} md={5} style={{ paddingLeft: smDown ? 0 : 50 }}>
            <img alt='img' src={firstAsset} style={{ height: smOnly ? 300 : (xsOnly ? 200 : 500), width: '100%' }} />
          </Grid>
        </Grid>
        {xsOnly ?
          <Grid container
            style={{ height: xsOnly ? '100vh' : (smOnly ? '50vh' : '70vh') }}
            justify='center'
            alignItems='center'>
            <Grid item xs={11} sm={5} md={6} lg={5} xl={4} style={{ padding: 20 }}>
              <Typography style={{ color: 'white', fontSize: 12 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna sapien, imperdiet at ligula id, semper tincidunt ipsum.
                Pellentesque vestibulum dui mi, at luctus arcu aliquam vitae. Maecenas vulputate velit eget ante bibendum, a commodo leo ullamcorper.
                Morbi id varius velit. Sed luctus malesuada porttitor. Proin faucibus est viverra neque tempor euismod.
                Duis hendrerit a mauris feugiat tincidunt. Maecenas risus sapien, hendrerit vel mollis quis, ultricies vitae justo.
                Aliquam fringilla aliquet dapibus. Vestibulum euismod tristique enim, sed sagittis sem blandit eget.
                Etiam molestie enim pharetra ornare finibus. Nam ac condimentum ligula. In hac habitasse platea dictumst.
                Curabitur nec maximus sem. Aliquam dignissim ut ipsum accumsan lobortis. Duis pretium magna sed lacus mollis,
                maximus vulputate orci venenatis. Nunc iaculis suscipit consequat. Fusce quis felis elit. Nunc hendrerit,
                risus sed mattis tempus, elit orci efficitur urna, quis efficitur urna ligula eu ante. Ut eu nisi at quam posuere molestie sed id mauris.
        </Typography>
            </Grid>
            <Grid className='floating' item xs={11} sm={6} md={5}>
              <img alt='img' src={secondAsset} style={{ height: smOnly ? 300 : (xsOnly ? 200 : 500), width: '100%' }} />
            </Grid>
          </Grid>
          : <Grid container
            style={{ height: xsOnly ? '100vh' : (smOnly ? '50vh' : '70vh') }}
            justify='center'
            alignItems='center'>
            <Grid className='floating' item xs={11} sm={6} md={5} style={{ paddingLeft: 50 }}>
              <img alt='img' src={secondAsset} style={{ height: smOnly ? 300 : (xsOnly ? 200 : 500), width: '100%' }} />
            </Grid>
            <Grid item xs={11} sm={5} md={6} lg={5} xl={4} style={{ padding: 20 }}>
              <Typography style={{ color: 'white', fontSize: smOnly ? 12 : 18 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna sapien, imperdiet at ligula id, semper tincidunt ipsum.
                Pellentesque vestibulum dui mi, at luctus arcu aliquam vitae. Maecenas vulputate velit eget ante bibendum, a commodo leo ullamcorper.
                Morbi id varius velit. Sed luctus malesuada porttitor. Proin faucibus est viverra neque tempor euismod.
                Duis hendrerit a mauris feugiat tincidunt. Maecenas risus sapien, hendrerit vel mollis quis, ultricies vitae justo.
                Aliquam fringilla aliquet dapibus. Vestibulum euismod tristique enim, sed sagittis sem blandit eget.
                Etiam molestie enim pharetra ornare finibus. Nam ac condimentum ligula. In hac habitasse platea dictumst.
                Curabitur nec maximus sem. Aliquam dignissim ut ipsum accumsan lobortis. Duis pretium magna sed lacus mollis,
                maximus vulputate orci venenatis. Nunc iaculis suscipit consequat. Fusce quis felis elit. Nunc hendrerit,
                risus sed mattis tempus, elit orci efficitur urna, quis efficitur urna ligula eu ante. Ut eu nisi at quam posuere molestie sed id mauris.
            </Typography>
            </Grid>
          </Grid>}
        <Grid container
          style={{ height: xsOnly ? '100vh' : (smOnly ? '50vh' : '70vh') }}
          justify='center'
          alignItems='center'>
          <Grid item xs={11} sm={5} md={6} lg={5} xl={4} style={{ padding: 20 }}>
            <Typography style={{ color: 'white', fontSize: smDown ? 12 : 18 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna sapien, imperdiet at ligula id, semper tincidunt ipsum.
              Pellentesque vestibulum dui mi, at luctus arcu aliquam vitae. Maecenas vulputate velit eget ante bibendum, a commodo leo ullamcorper.
              Morbi id varius velit. Sed luctus malesuada porttitor. Proin faucibus est viverra neque tempor euismod.
              Duis hendrerit a mauris feugiat tincidunt. Maecenas risus sapien, hendrerit vel mollis quis, ultricies vitae justo.
              Aliquam fringilla aliquet dapibus. Vestibulum euismod tristique enim, sed sagittis sem blandit eget.
              Etiam molestie enim pharetra ornare finibus. Nam ac condimentum ligula. In hac habitasse platea dictumst.
              Curabitur nec maximus sem. Aliquam dignissim ut ipsum accumsan lobortis. Duis pretium magna sed lacus mollis,
              maximus vulputate orci venenatis. Nunc iaculis suscipit consequat. Fusce quis felis elit. Nunc hendrerit,
              risus sed mattis tempus, elit orci efficitur urna, quis efficitur urna ligula eu ante. Ut eu nisi at quam posuere molestie sed id mauris.
            </Typography>
          </Grid>
          <Grid className='floating' item xs={11} sm={6} md={5} style={{ paddingLeft: smDown ? 0 : 50, paddingBottom: smDown ? 25 : 0 }}>
            <img alt='img' src={thirdAsset} style={{ height: smOnly ? 300 : (xsOnly ? 200 : 500), width: '100%' }} />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default LandingPage;
