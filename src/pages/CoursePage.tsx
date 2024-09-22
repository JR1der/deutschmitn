import { Parallax } from "@react-spring/parallax";
import AccordionLayerCourses from "../components/AccordionLayerCourses.tsx";
import KoelnParallaxLayer from "../components/KoelnParallaxLayer.tsx";

const CoursePage = () => {
  return (
    <div>
      <Parallax pages={3} className="top-2 left-0">
        <KoelnParallaxLayer />
        <AccordionLayerCourses />
      </Parallax>
    </div>
  );
};

export default CoursePage;
