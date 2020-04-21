import React from 'react';
import bgImg from '../assets/landingPage.jpg'
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
          backgroundImage: `url(${bgImg})`,
          width: '100%',
          height: '100vh'
        }}>
        <Grid item xs={6} style={{ textAlign: 'center' }}>
          <Typography className='buttonLanding' variant='h3' style={{ color: 'white', paddingBottom: 20 }} >KEEP TRACK OF YOUR LIFE</Typography>
          <Button ele variant='contained' style={{ backgroundColor: '#5459f4', color: 'white', fontSize: 30, textTransform: 'none', padding: '10px 30px' }}>Sign up Now</Button>
        </Grid>
      </Grid>
      <Grid container
        justify='center'
        alignItems='center'
        style={{
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundImage: `url(${bgImg1})`,
          width: '100%',
          height: '100vh'
        }}>
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
        justify='center'
        alignItems='center'
        style={{
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundImage: `url(${bgImg1})`,
          width: '100%',
          height: '100vh'
        }}>
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
        justify='center'
        alignItems='center'
        style={{
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundImage: `url(${bgImg1})`,
          width: '100%',
          height: '100vh'
        }}>
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
  );
}

export default LandingPage;
