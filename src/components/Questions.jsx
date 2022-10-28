import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/material";

const questions = [
  "Do you offer any vegan options?",
  "Do you offer any gluten free options?",
  "Can I clone these sections?",
  "Do we need to write a business plan?",
  "How can we get funding for our start up?",
];

const Questions = () => {
  const [expanded, setExpanded] = React.useState();

  const expand = (id) => {
    if(expanded === id){
      setExpanded(null)
    }else{
      setExpanded(id)
    }
  }

  return (
    <Box maxWidth="1200px" width="100%" margin="100px auto">
      {questions.map((question, i) => (
        <Accordion
          key={i}
          expanded={expanded === i}
          onClick={() => expand(i)}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            sx={{ padding: "15px" }}
          >
            <Typography color="primary" variant="h6">
              {question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui modi
              nihil maiores hic iusto suscipit fuga necessitatibus reprehenderit
              voluptate, sit tenetur facere cupiditate vero, optio asperiores
              quod consequuntur commodi autem rem dicta ea magni vitae assumenda
              ad! Totam, iure odio cumque distinctio accusamus porro aliquam ad
              laborum vero ut. Eius!
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default Questions;
