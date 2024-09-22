import {ParallaxLayer} from "@react-spring/parallax";
import frankfurtSkyImage from "../img/FrankfurtSky.png";
import {Typography} from "@mui/material";
import frankfurtCityImage from "../img/FrankfurtCity.png";

const FrankfurtParallaxLayer = () => {
  return (
      <>
        <ParallaxLayer className='z-[1]' offset={2} speed={0}>
          <div className='border-t-4 border-dark-red bg-cover h-[120vh] w-full'
               style={{backgroundImage: `url(${frankfurtSkyImage})`}}/>
        </ParallaxLayer>
        <ParallaxLayer className='z-[1] bg-bg-2 h-screen' offset={2.7} speed={1.2}/>
        <ParallaxLayer className='z-[2] flex flex-col justify-center items-start ml-[45%]' offset={2} speed={0.5}
                       style={{top: '-260px'}}>
          <div className='mb-4'>
            <Typography className='text-white font-medium' variant="h2">Join us! </Typography>
          </div>
          <div className='leading-normal'>
            <Typography className='text-my-black font-medium' variant="h4">Lorem Ipsum is simply dummy text of.
              of. </Typography>
          </div>
        </ParallaxLayer>
        <ParallaxLayer className='z-[3]' offset={2} speed={2.5}>
          <div className='bg-cover bg-center border-b-4 border-dark-red h-[120vh] w-full'
               style={{backgroundImage: `url(${frankfurtCityImage})`}}/>
        </ParallaxLayer>
      </>
  )
}

export default FrankfurtParallaxLayer;