import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import Image from "./image/image";
import AWSCertifiedCloudPractitionerBadge from "../assets/images/resume/badge-aws-certified-cloud-practitioner.png";
import ACECertifiedPersonalTrainerBadge from "../assets/images/resume/badge-ace-certified-personal-trainer.png";

// Routes.
import { Link } from "react-router-dom";


// ---------------------------------------------------------

const Badge = ({ title, image, link }) => {
  const theme = useTheme();
  return (
    <Box
      border={1}
      borderRadius={"8px"}
      borderColor={theme.palette.divider}
      width={"150px"}
      height={"220px"}
    >
      <Stack height={"100%"} justifyContent={"space-between"}>
        <Stack p={2} spacing={1}>
          <Image src={image} />
          <Typography variant="body2">{title}</Typography>
        </Stack>

        <Box
          border={1}
          borderRadius={"0px 0px 8px 8px"}
          borderColor={theme.palette.divider}
          backgroundColor={"rgba(255, 255, 255, 0.1)"}
        >
          <Link
            to={link}
            target={"_blank"}
            style={{
              color: "inherit",
              textDecoration: "inherit",
            }}
          >
            <Stack >
              <Typography align="center" variant="caption">Click For Info</Typography>
            </Stack>
          </Link>
        </Box>
      </Stack>
    </Box>
  );
}


// ---------------------------------------------------------

const ExperienceBadges = () => {
  return (
    <>
      <Typography variant="h6">Badges</Typography>

      <Stack direction={"row"} spacing={1}>
        <Badge
          title={"AWS Certified Cloud Practitioner"}
          image={AWSCertifiedCloudPractitionerBadge}
          link={"https://www.credly.com/badges/790cc18b-c9ab-4502-8b7a-3b8b0b73368e/"}
        />

        <Badge
          title={"ACE Certified Personal Trainer"}
          image={ACECertifiedPersonalTrainerBadge}
          link={"https://credentials.acefitness.org/7f97229e-e7a5-4181-a2f0-d73789ff23f7"}
        />
      </Stack>
    </>
  );
}


// ---------------------------------------------------------

export default ExperienceBadges;