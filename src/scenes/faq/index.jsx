import {Box, Typography, useTheme} from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import  ExpandMore  from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () =>{
   const theme = useTheme();
   const colors = tokens(theme.palette.mode)


    return (
        <Box m="20px">
          <Box>
            <Header title="FAQ" subtitle="Frequently Asked Questions Pages"/>
          </Box>
          <Box>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMore/>}>
                 <Typography color={colors.greenAccent[500]} variant="h5">
                    An Importan question  
                 </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis quo rerum nemo, qui suscipit vel.
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMore/>}>
                 <Typography color={colors.greenAccent[500]} variant="h5">
                    An Important question  
                 </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis quo rerum nemo, qui suscipit vel.
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMore/>}>
                 <Typography color={colors.greenAccent[500]} variant="h5">
                    Another Important question  
                 </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis quo rerum nemo, qui suscipit vel.
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMore/>}>
                 <Typography color={colors.greenAccent[500]} variant="h5">
                    Your Favorite question  
                 </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis quo rerum nemo, qui suscipit vel.
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMore/>}>
                 <Typography color={colors.greenAccent[500]} variant="h5">
                    Some Random  question  
                 </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis quo rerum nemo, qui suscipit vel.
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMore/>}>
                 <Typography color={colors.greenAccent[500]} variant="h5">
                    An Important question  
                 </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis quo rerum nemo, qui suscipit vel.
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMore/>}>
                 <Typography color={colors.greenAccent[500]} variant="h5">
                    The Final question  
                 </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis quo rerum nemo, qui suscipit vel.
                </AccordionDetails>
            </Accordion>
          </Box>
        </Box>
    )
}
export default FAQ;