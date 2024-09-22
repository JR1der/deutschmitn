import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

interface AccordionCourseProps {
  expanded: string | false;
  panel: string;
  handleChange: (
    panel: string
  ) => (_event: React.SyntheticEvent, newExpanded: boolean) => void;
  title: string;
  subtitle: string;
  firstTitle: string;
  firstText: string;
  secondTitle: string;
  secondText: string;
  textArray: string[];
}

const AccordionCourse: React.FC<AccordionCourseProps> = ({
  expanded,
  panel,
  handleChange,
  title,
  subtitle,
  firstTitle,
  firstText,
  secondTitle,
  secondText,
  textArray,
}) => {
  return (
    <Accordion
      className="mb-2.5 rounded-[5px] border-yellow-2 border"
      expanded={expanded === panel}
      defaultExpanded
      onChange={handleChange(panel)}
    >
      <AccordionSummary
        className="p-2.5 pl-5 md:pl-[30px]"
        expandIcon={<ExpandMoreIcon sx={{ color: "#AE0101" }} />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <Typography
          className="text-left font-bold text-my-yellow text-base sm:text-xl md:text-[22px] lg:text-2xl w-1/5 sm:w-[15%] md:w-[10%] lg:w-[7%]"
          variant="h5"
        >
          {title}
        </Typography>
        <Typography
          className="text-dark-red text-left font-semibold text-sm sm:text-[15px] md:text-base lg:text-lg"
          variant="h6"
        >
          {subtitle}
        </Typography>
      </AccordionSummary>
      <AccordionDetails className="border-t border-yellow-2 p-5">
        <Box className="block md:flex justify-between mb-2">
          <Box>
            <Typography
              className="text-base sm:text-xl md:text-[22px] lg:text-2xl text-center sm:text-left text-dark-red mb-4"
              variant="h6"
            >
              {firstTitle}
            </Typography>
            <Typography
              className="text-xs sm:text-base md:text-lg lg:text-xl text-left"
              variant="body2"
            >
              {firstText}
            </Typography>
          </Box>
          <Box sx={{ ml: { md: 2 } }}>
            <Typography
              className="text-base sm:text-xl md:text-[22px] lg:text-2xl text-center sm:text-left text-dark-red mb-4"
              variant="h6"
            >
              {secondTitle}
            </Typography>
            <Typography
              className="text-xs sm:text-base md:text-lg lg:text-xl text-left"
              variant="body2"
            >
              {secondText}
            </Typography>
          </Box>
        </Box>
        <Typography
          className="text-base sm:text-xl md:text-[22px] lg:text-2xl text-dark-red text-center mb-6"
          variant="h5"
        >
          What you will acquire
        </Typography>
        <Box className="block md:flex items-center justify-center md:justify-between">
          <Box>
            {textArray.map((text: string, index: number) => (
              <Box className="flex mb-4" key={index}>
                <CheckCircleIcon className="text-dark-red mr-2 h-4 sm:h-5 md:h-6" />
                <Typography
                  className="text-xs sm:text-base md:text-lg lg:text-xl text-left"
                  variant="body2"
                >
                  {text}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordionCourse;
