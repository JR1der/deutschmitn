import { Box, Typography } from "@mui/material";
import { ParallaxLayer } from "@react-spring/parallax";
import logoImage from "../img/DeutschMitLogTransparent.png";
import koelnCityImage from "../img/KoelnCity.png";
import koelnSkyImage from "../img/KoelnSky.png";
import Shapes from "../img/Shapes.png";

const KoelnParallaxLayer = () => {
  return (
    <>
      <ParallaxLayer className="z-[1]" offset={0} speed={0}>
        <div
          className="bg-cover h-screen w-full"
          style={{ backgroundImage: `url(${koelnSkyImage})` }}
        />
      </ParallaxLayer>
      <ParallaxLayer
        className="z-[1] bg-bg-2 h-screen"
        offset={0.7}
        speed={0.5}
      />
      <ParallaxLayer
        className="border-b-4 border-dark-red z-[1] bg-cover h-[80vh]"
        offset={0.4}
        speed={0.3}
        style={{ backgroundImage: `url(${Shapes})` }}
      />
      <ParallaxLayer className="z-[1]" offset={0.8} speed={0.3}>
        <Box className="flex justify-center items-center h-[400px] md:h-[600px]">
          <img className="w-auto max-h-full" src={logoImage} alt="Logo" />
        </Box>
      </ParallaxLayer>
      <ParallaxLayer
        className="z-[2] flex flex-col justify-center items-start pl-[8%]"
        offset={0}
        speed={-0.2}
        style={{ top: "-8%" }}
      >
        <div className="mb-4">
          <Typography
            className="font-medium text-dark-red text-[28px] sm:text-[32px] md:text-[38px] lg:text-[42px]"
            variant="h2"
            sx={{
              textShadow:
                "0 0 10px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 0, 0, 0.4), 0 0 30px rgba(255, 0, 0, 0.2)",
            }}
          >
            Courses
          </Typography>
        </div>
        <div className="leading-normal">
          <Typography
            className="w-1/2 sm:w-3/5 md:w-[70%] lg:w-4/5 font-normal text-my-black text-left text-xl sm:text-2xl md:text-3xl lg:text-4xl"
            variant="h4"
            sx={{
              textShadow:
                "0 0 8px rgba(255, 255, 255, 0.6), 0 0 15px rgba(255, 0, 0, 0.3)",
            }}
          >
            Here you can find the courses offered by our online school.
          </Typography>
        </div>
      </ParallaxLayer>
      <ParallaxLayer className="z-[3]" offset={0.3} speed={1}>
        <div
          className="border-b-4 border-dark-red bg-cover bg-center h-screen w-full"
          style={{ backgroundImage: `url(${koelnCityImage})` }}
        />
      </ParallaxLayer>
    </>
  );
};

export default KoelnParallaxLayer;
