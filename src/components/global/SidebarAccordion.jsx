import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, useTheme } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

const SidebarAccordion = ({ sidebarLinks }) => {
  const location = useLocation();
  const { pathname } = location;
  const theme = useTheme();
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (_event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      {sidebarLinks?.map((item, index) => (
        <Box key={index} sx={{ width: "100%", height: "auto" }}>
          <Box sx={{ width: "100%", height: "100%" }}>
            <Accordion
              expanded={
                item?.sublinks == null ? null : expanded === `panel${index + 1}`
              }
              onChange={handleChange(`panel${index + 1}`)}
              sx={{
                boxShadow: "none !important",
                overflow: "auto",
                width: "100%",
                border: 0,
                ".mui-vf72v2-MuiPaper-root-MuiAccordion-root.Mui-expanded": {
                  boxShadow: "none !important",
                  border: 0,
                },
                // "&:hover": {
                //   //   backgroundColor: "#F0F0F0",
                // },
              }}
            >
              <AccordionSummary
                expandIcon={item?.sublinks == null ? null : <ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id={`panel${index + 1}a-header`}
                sx={{
                  mx: "auto",
                  p: 1.4,
                  mb: 0,
                  minHeight: "55px",
                  gap: 2,
                  width: "95%",
                  height: "43px",
                  borderRadius: "2px",
                  backgroundColor: `${item?.link == pathname ? "red" : null}`,
                }}
              >
                <Link to={`${item?.link}`}>
                  {item?.icon && (
                    <Box
                      sx={{
                        color: `${theme?.palette?.links_color?.light}`,
                        paddingTop: "2px",
                      }}
                    >
                      {item?.icon}
                    </Box>
                  )}
                </Link>
                <Link to={`${item?.link}`} style={{ textDecoration: "none" }}>
                  {item?.sublinks ? (
                    <Typography
                      variant="body1"
                      sx={{
                        width: "100%",
                        height: "100%",
                        fontWeight: `${item?.link == pathname ? 600 : 400}`,
                        ml: 2,
                        mt: 0.5,
                        color: `${theme?.palette?.links_color?.light}`,
                      }}
                    >
                      {item?.text}
                    </Typography>
                  ) : (
                    <Typography
                      variant="body1"
                      sx={{
                        width: "100%",
                        height: "100%",

                        fontWeight: `${item?.link == pathname ? 600 : 400}`,
                        ml: 2,
                        mt: 0.5,
                        color: `${theme?.palette?.links_color?.light}`,
                      }}
                    >
                      {item?.text}
                    </Typography>
                  )}
                </Link>
              </AccordionSummary>
              {item?.sublinks &&
                item?.sublinks?.map((eachItem, index) => (
                  <div key={index}>
                    <AccordionDetails
                      key={index}
                      sx={{
                        pl: 6.5,
                        pt: 1.5,
                        pb: 1.5,
                        mb: 0.7,
                        boxShadow: "none !important",
                        alignItems: "center",
                        "&:hover": {
                          backgroundColor: `${theme?.palette?.links_color?.light}`,
                        },
                        backgroundColor: `${
                          eachItem?.link == pathname
                            ? `${theme?.palette?.background?.dark}`
                            : null
                        }`,
                      }}
                    >
                      <Link
                        style={{
                          width: "100%",
                          height: "100%",
                          textDecoration: "none",
                        }}
                        to={`${eachItem?.link}`}
                      >
                        <Typography
                          variant="body1"
                          sx={{
                            width: "100%",
                            height: "100%",
                            color: `${theme?.palette?.links_color?.dark}`,
                          }}
                        >
                          {eachItem?.text}
                        </Typography>
                      </Link>
                    </AccordionDetails>
                  </div>
                ))}
            </Accordion>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default SidebarAccordion;
