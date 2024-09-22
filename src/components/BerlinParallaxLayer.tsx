import {ParallaxLayer} from "@react-spring/parallax";
import berlinSkyImage from "../img/BerlinSky.png";
import {Typography} from "@mui/material";
import berlinCityImage from "../img/BerlinCity.png";

const BerlinParallaxLayer = () => {
  return (
      <>
        <ParallaxLayer className='z-[1]' offset={0} speed={0}>
          <div className='bg-cover w-full h-[150vh]' style={{backgroundImage: `url(${berlinSkyImage})`}}/>
        </ParallaxLayer>
        <ParallaxLayer className='z-[1] bg-bg-2 h-[80vh]' offset={0.7} speed={0.5}/>
        <ParallaxLayer
            className='z-[2] top-[-5%] flex flex-col justify-center pl-[8%]'
            offset={0}
            speed={-0.2}
            style={{top: '-5%'}}
        >
          < div className='mb-4'>
            <Typography
                className="text-right sm:text-left text-white font-medium text-[32px] sm:text-[40px] md:text-[46px] lg:text-[50px] w-[90%]"
                variant="h2"
            >DeutschMITN</Typography>
          </div>
          <div className='leading-normal'>
            <Typography variant="h4"
                        className='text-right sm:text-left font-normal text-my-black text-xl sm:text-2xl md:text-3xl lg:text-4xl w-[90%] sm:w-[70%] md:w-4/5 lg:w-[90%]'
            >A new online language school
            </Typography>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0.1} speed={1} className='z-[3]'>
          <div
              className='border-b-4 border-dark-red bg-cover bg-right h-[120vh] w-full'
              style={{backgroundImage: `url(${berlinCityImage})`}}
          />
        </ParallaxLayer>
      </>
  )
}

export default BerlinParallaxLayer;