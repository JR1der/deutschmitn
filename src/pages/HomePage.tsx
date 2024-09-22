import {Parallax, ParallaxLayer} from '@react-spring/parallax';
import logoImage from '../img/DeutschMitLogTransparent.png';
import {Box, Typography} from "@mui/material";
import BerlinParallaxLayer from "../components/BerlinParallaxLayer.tsx";
import FrankfurtParallaxLayer from "../components/FrankfurtParallaxLayer.tsx";
import Shapes from "../img/Shapes.png";

const HomePage = () => {
  return (
      <>
        <Parallax pages={4} className='top-[75px] left-0'>
          <BerlinParallaxLayer/>
          <ParallaxLayer className='border-b-4 border-dark-red z-[1] bg-cover h-screen' offset={0.4} speed={0.3}
                         style={{backgroundImage: `url(${Shapes})`}}/>
          <ParallaxLayer offset={0.8} speed={0.4} style={{zIndex: '1'}}>
            <Box className='flex justify-center items-center h-[400px] md:h-[600px]'>
              <img src={logoImage} alt="Logo" className='w-auto max-h-full'/>
            </Box>
          </ParallaxLayer>
          <ParallaxLayer className='border-t-4 border-dark-red z-[5] bg-bg-1 p-10' offset={1} speed={0.5}>
            <Box className='h-[70vh] flex justify-between items-center p-5'>
              <Box className='w-2/5 h-80 border-2 border-dark-red rounded-lg mr-5 flex justify-center items-center'>
                <Typography variant="body1" color="textSecondary" align="center">Image or Placeholder</Typography>
              </Box>
              <Box className='w-1/2'>
                <Typography className='font-bold text-dark-red mb-4 text-left' variant="h5">
                  Lorem Ipsum is simply dummy text of.
                </Typography>
                <Typography className='text-my-black leading-normal' variant="body1">
                  Lorem Ipsum is simply dummy text of. Lorem Ipsum is simply dummy text of. Lorem Ipsum is simply
                  text of. Lorem Ipsum is simply dummy text of. Lorem Ipsum is simply dummy text of.
                </Typography>
              </Box>
            </Box>
          </ParallaxLayer>
          <ParallaxLayer className='z-[1] bg-bg-1 h-[200vh]' offset={1} speed={0.5}/>
          <FrankfurtParallaxLayer/>
          <ParallaxLayer className='border-t-4 border-dark-red z-[1] bg-bg-1 p-10' offset={2.8} speed={0.5}>
            <Box className='h-screen flex justify-between items-center p-5'>
              <Box sx={{width: '50%'}}>
                <Typography className='font-bold text-dark-red mb-4 text-left' variant="h5">
                  Lorem Ipsum is simply dummy text of.
                </Typography>
                <Typography className='text-left leading-normal text-my-black' variant="body1">
                  Lorem Ipsum is simply dummy text of. Lorem Ipsum is simply dummy text of. Lorem Ipsum is simply
                  text of. Lorem Ipsum is simply dummy text of. Lorem Ipsum is simply dummy text of.
                </Typography>
              </Box>
              <Box className='w-2/5 h-80 border-2 border-dark-red rounded-lg mr-[5%] flex justify-center items-center'>
                <Typography variant="body1" color="textSecondary" align="center">Image or Placeholder</Typography>
              </Box>
            </Box>
          </ParallaxLayer>
        </Parallax>
      </>
  )
}

export default HomePage;