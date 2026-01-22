import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.redAccent[500]} variant="h5">
            How do I download reports?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            You can download reports by clicking the "Download Reports" button
            on the top right of the dashboard page. It will generate a PDF of
            the current statistics.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.redAccent[500]} variant="h5">
            Can I customize the theme?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes! You can toggle between light and dark mode using the icon in
            the topbar. The colors are predefined using Material UI and custom
            tokens.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.redAccent[500]} variant="h5">
            How is the data managed?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Currently, the dashboard uses mock data defined in the `src/data`
            folder. This can be easily replaced with API calls to your backend
            server.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.redAccent[500]} variant="h5">
            What charts are available?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The dashboard includes Line, Bar, Pie, and Geography charts, all
            powered by the Nivo library for high-performance data visualization.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.redAccent[500]} variant="h5">
            How to add new users?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Navigate to the "Profile Form" section under "Pages" in the sidebar.
            Fill out the form and click "Create New User" to submit the data.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
