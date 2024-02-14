import React from "react";
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { CaretDown } from "phosphor-react";


// ---------------------------------------------------------

const ExperienceCertification = ({ HideHealthAndFitness, HideBusinessAndFinance }) => {
  const theme = useTheme();

  return (
    <>
      {/* ========================= */}
      {/* ========================= */}
      {!HideHealthAndFitness &&
        <Accordion
          disableGutters
          elevation={0}
          square={false}
          sx={{
            borderRadius: "4px",
            background: "#1b1b1b",
            "&:before": {
              display: "none",
            }
          }}
        >
          <AccordionSummary
            expandIcon={<CaretDown size={24} />}
            square={false}
            sx={{
              borderRadius: "4px",
              backgroundColor: "#242424",
            }}
          >
            <Typography variant="body2"><b>HEALTH & FITNESS</b></Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2">
              •  ACE <small>(American Council on Exercise)</small> Certified Personal Trainer / Fitness Specialist <br />
              •  CRP + AED + Standard First Aid <small>(from MHI Training Master)</small> <br />
              •  VPS <small>(Values and Principles in Sports)</small> by Sports Singapore <br />
              •  MOE Registered Provisional NROC Coach <small>(for Athletics sport)</small>
            </Typography>
          </AccordionDetails>
        </Accordion>
      }
      {/* ========================= */}
      {/* ========================= */}
      {!HideBusinessAndFinance &&
        <Accordion
          disableGutters
          elevation={0}
          square={false}
          sx={{
            borderRadius: "4px",
            background: "#1b1b1b",
            "&:before": {
              display: "none",
            }
          }}
        >
          <AccordionSummary
            expandIcon={<CaretDown size={24} />}
            square={false}
            sx={{
              borderRadius: "4px",
              backgroundColor: "#242424",
            }}
          >
            <Typography variant="body2"><b>BUSINESS & FINANCE</b></Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2">
              Registered licensed Financial Advisor for Aviva Singapore. <br />
              •  M5 - Rules And Regulations For Financial Advisory Services <br />
              •  M9 - Life Insurance And Investment-Linked Policies <br />
              •  M9A - Life Insurance And Investment-Linked Policies II <br />
              •  HI - Health Insurance Module <br />
              •  M8 - Collective Investment Schemes <br />
              •  M8A - Collective Investment Schemes II
            </Typography>
          </AccordionDetails>
        </Accordion>
      }
    </>
  );
}


// ---------------------------------------------------------

export default ExperienceCertification;