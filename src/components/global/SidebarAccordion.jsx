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
                ".mui-vf72v2-MuiPaper-root-MuiAccordion-root.Mui-expanded": {
                  boxShadow: "none !important",
                  border: 0,
                },
              }}
            >
              <Link to={`${item?.link}`} style={{ textDecoration: "none" }}>
                <AccordionSummary
                  expandIcon={
                    item?.sublinks == null ? null : (
                      <ExpandMoreIcon
                        sx={{
                          color: "blue",
                        }}
                      />
                    )
                  }
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
                    borderRadius: "10px",
                    "&:hover": {
                      color: item?.sublinks ? "blue" : "#fff !important",
                      backgroundColor: item?.sublinks ? "transparent" : "blue", // Add or adjust as needed
                    },
                  }}
                >
                  <Box
                    component={"div"}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      // color: "#fff !important",
                      // "&:hover": {
                      //   color: "red !important",
                      // },
                    }}
                  >
                    {/* <Link to={`${item?.link}`}> */}
                    {item?.icon && (
                      <Box
                        sx={{
                          paddingTop: "2px",
                        }}
                      >
                        {item?.icon}
                      </Box>
                    )}
                    {/* </Link> */}
                    {/* <Link to={`${item?.link}`} style={{ textDecoration: "none" }}> */}
                    <Typography
                      variant="body1"
                      sx={{
                        width: "100%",
                        height: "100%",
                        fontWeight: `${item?.link == pathname ? 600 : 400}`,
                        ml: 2,
                        mt: 0.5,
                      }}
                    >
                      {item?.text}
                    </Typography>
                    {/* </Link> */}
                  </Box>
                </AccordionSummary>
              </Link>

              {item?.sublinks &&
                item?.sublinks?.map((eachItem, index) => (
                  <div key={index}>
                    <Link
                      style={{
                        width: "100%",
                        height: "100%",
                        textDecoration: "none",
                      }}
                      to={`${eachItem?.link}`}
                    >
                      <AccordionDetails
                        key={index}
                        sx={{
                          pl: 5.3,
                          pt: 1.5,
                          pb: 1.5,
                          mb: 0.7,
                          mx: 2,
                          boxShadow: "none !important",
                          alignItems: "center",
                          borderRadius: "10px",
                          "&:hover": {
                            color: "#fff !important",
                            backgroundColor: "blue", // Add or adjust as needed
                          },
                          // backgroundColor: `${
                          //   eachItem?.link == pathname
                          //     ? `${theme?.palette?.background?.dark}`
                          //     : null
                          // }`,
                        }}
                      >
                        <Typography
                          variant="body1"
                          sx={{
                            width: "100%",
                            height: "100%",
                            // color: `${theme?.palette?.links_color?.dark}`,
                          }}
                        >
                          {eachItem?.text}
                        </Typography>
                      </AccordionDetails>
                    </Link>
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
