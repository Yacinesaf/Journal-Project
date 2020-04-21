import React from 'react';
import bgImg1 from '../assets/landingPage1.png'
import firstAsset from '../assets/landingAsset1.svg'
import secondAsset from '../assets/landingAsset2.svg'
import thirdAsset from '../assets/landingAsset3.svg'
import { Grid, Typography, Button } from '@material-ui/core';
import '../style.css'


function LandingPage() {

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
        <Grid item xs={6} style={{ textAlign: 'center' }}>
          <Typography className='buttonLanding' variant='h4' style={{ color: 'white' }} >WRITE IT. READ IT.</Typography>
          <Typography className='buttonLanding' variant='h3' style={{ color: 'white', paddingBottom: 20 }} >RELIVE YOUR LIFE</Typography>
          <Button className='buttonStyle' variant='contained' style={{ backgroundColor: '#5459f4', fontSize: 26, padding: '8px 25px', boxShadow : '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)' }}>Sign up Now</Button>
        </Grid>
      </Grid>
      <div style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(${bgImg1})`,
        width: '100%',
      }}>
        <Grid container
          style={{ height: '90vh' }}
          justify='center'
          alignItems='center'>
          <Grid item xs={4} style={{ padding: 20 }}>
            <Typography style={{ color: 'white', fontSize: 18, }}>
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
          <Grid className='floating' item xs={6} style={{ paddingRight: 50 }}>
            <img alt='img' src={firstAsset} style={{ height: 600, width: 600, float: 'right' }} />
          </Grid>
        </Grid>
        <Grid container
          style={{ height: '90vh' }}
          justify='center'
          alignItems='center'>
          <Grid className='floating' item xs={6} style={{ paddingLeft: 50 }}>
            <img alt='img' src={secondAsset} style={{ height: 600, width: 600, float: 'left' }} />
          </Grid>
          <Grid item xs={4} style={{ padding: 20 }}>
            <Typography style={{ color: 'white', fontSize: 18, }}>
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
        </Grid>
        <Grid container
          style={{ height: '90vh' }}
          justify='center'
          alignItems='center'>
          <Grid item xs={4} style={{ padding: 20 }}>
            <Typography style={{ color: 'white', fontSize: 18, }}>
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
          <Grid className='floating' item xs={6} style={{ paddingRight: 50 }}>
            <img alt='img' src={thirdAsset} style={{ height: 600, width: 600, float: 'right' }} />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default LandingPage;
