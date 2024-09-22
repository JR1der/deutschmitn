import { Box, Button, Typography } from "@mui/material";

import { ParallaxLayer } from "@react-spring/parallax";
import React from "react";
import { useNavigate } from "react-router-dom";
import AccordionCourse from "./AccordionCourse.tsx";

const AccordionLayerCourses = () => {
  const [expanded, setExpanded] = React.useState<string | false>('panel1');
  const navigate = useNavigate();

  const handleChange =
      (panel: string) => (_event: React.SyntheticEvent, newExpanded: boolean) => {
        setExpanded(newExpanded ? panel : false);
      };

  return (
      <ParallaxLayer className='z-[1] block justify-center h-auto' offset={1.1} speed={0}>
        <Box className='z-[1] flex justify-center border-t-4 border-dark-red bg-bg-1 h-auto'>
          <Box className='md:border-b-4 border-dark-red w-full md:w-4/5 p-5 md:p-10'>
            <AccordionCourse
                expanded={expanded}
                panel={"panel1"}
                handleChange={handleChange}
                title="A1"
                subtitle="Beginner Level – Start your German journey"
                firstTitle="Speaking"
                firstText="Learn how to introduce yourself, greet others, and engage in basic conversations about everyday life."
                secondTitle="Writing"
                secondText="Master writing simple sentences, filling out basic forms, and drafting short personal messages."
                textArray={[
                  "Basic understanding of German vocabulary and expressions.",
                  "Ability to greet, introduce yourself, and ask simple questions.",
                  "Confidence in handling simple dialogues in familiar situations.",
                  "Understanding simple written texts and instructions."
                ]}
            />
            <AccordionCourse
                expanded={expanded}
                panel={"panel2"}
                handleChange={handleChange}
                title="A2"
                subtitle="Elementary Level – Strengthen your basics"
                firstTitle="Speaking"
                firstText="Learn how to discuss your daily routines, express personal needs, and hold longer conversations about familiar topics."
                secondTitle="Writing"
                secondText="Develop skills in writing short paragraphs about yourself, your family, and your work, along with simple letters or emails."
                textArray={[
                  "Deeper understanding of essential vocabulary and grammar.",
                  "Ability to handle routine conversations in shops, restaurants, and travel situations.",
                  "Confidence in discussing past and future events.",
                  "Reading and understanding short stories or personal emails."
                ]}
            />
            <AccordionCourse
                expanded={expanded}
                panel={"panel3"}
                handleChange={handleChange}
                title="B1"
                subtitle="Intermediate Level – Expand your communication"
                firstTitle="Speaking"
                firstText="Learn to express opinions, describe personal experiences, and hold in-depth conversations about work, hobbies, and current events."
                secondTitle="Writing"
                secondText="Gain skills to write detailed texts about your experiences, opinions, and simple reports."
                textArray={[
                  "Ability to navigate more complex social interactions.",
                  "Confidence in expressing opinions and making requests.",
                  "Deeper understanding of grammar and vocabulary for everyday communication.",
                  "Reading comprehension for intermediate-level articles and literature."
                ]}
            />
            <AccordionCourse
                expanded={expanded}
                panel={"panel4"}
                handleChange={handleChange}
                title="B2"
                subtitle="Upper Intermediate – Achieve fluency"
                firstTitle="Speaking"
                firstText="Engage in detailed discussions about complex topics like politics, culture, and technology, with fluency and spontaneity."
                secondTitle="Writing"
                secondText="Master writing clear, well-structured essays, reports, and formal correspondence."
                textArray={[
                  "The ability to converse naturally in diverse situations.",
                  "Fluency in articulating arguments and opinions in professional and social settings.",
                  "Reading advanced articles, essays, and texts without much assistance.",
                  "Mastery of more nuanced grammar and advanced vocabulary."
                ]}
            />
            <AccordionCourse
                expanded={expanded}
                panel={"panel5"}
                handleChange={handleChange}
                title="C1"
                subtitle="Advanced Level – Master German proficiency"
                firstTitle="Speaking"
                firstText="Discuss abstract topics, make presentations, and use the language in academic and professional contexts fluently."
                secondTitle="Writing"
                secondText="Learn to write complex texts with a clear structure and argumentation, suitable for business or academic purposes."
                textArray={[
                  "Native-like fluency and understanding of sophisticated language structures.",
                  "Ability to communicate effectively in academic or professional environments.",
                  "Proficiency in reading and understanding complex texts such as research papers and professional reports.",
                  "Confidence in writing reports, articles, and academic papers."
                ]}
            />
          </Box>
          <Box
              className='border-b-4 border-l-4 border-dark-red bg-my-yellow hidden md:flex flex-col pt-10 p-12 z-[1] w-2/5 text-left text-dark-red'>
            <Typography className='text-2xl lg:text-3xl font-bold' variant="h4">
              Master the German Language at Your Own Pace
            </Typography>
            <Typography className='text-lg lg:text-xl mt-5 text-my-black' variant="h6">
              Whether you're starting as a beginner or refining your advanced skills, our online German language school
              is
              here to support your journey.
            </Typography>
            <Button
                className='transition duration-300 hover:scale-110 my-4 text-my-yellow block bg-dark-red p-2 font-semibold text-lg capitalize hover:bg-yellow-3 hover:text-bg-2 '
                onClick={() => navigate("/register")}>
              Register now!
            </Button>
          </Box>
        </Box>
        <Box
            className='items-center border-t-4 border-b-4 border-dark-red bg-my-yellow flex md:hidden flex-col pt-6 z-[1] w-auto p-5 text-center text-dark-red'>
          <Typography className='font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl' variant="h4">
            Master the German Language at Your Own Pace
          </Typography>
          <Typography className='mt-4 text-my-black text-base sm:text-lg md:text-xl lg:text-2xl' variant='h6'>
            Whether you're starting as a beginner or refining your advanced skills, our online German language school is
            here to support your journey.
          </Typography>
          <Button
              className='w-3/5 transition duration-300 hover:scale-110 my-4 text-my-yellow block bg-dark-red p-2 font-semibold text-lg capitalize hover:bg-yellow-3 hover:text-bg-2 '
              onClick={() => navigate("/register")}>
            Register now!
          </Button>
        </Box>
      </ParallaxLayer>
  )
}

export default AccordionLayerCourses;